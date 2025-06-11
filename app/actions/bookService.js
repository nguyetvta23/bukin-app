'use server';
import { createSessionClient } from "@/config/Appwrite"
import { redirect } from "next/navigation";
import { Query } from "node-appwrite";
import checkAuth from './checkAuth';
import { error } from "console";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import {ID} from 'node-appwrite';
import checkService from '@/app/actions/checkService';



async function bookService(previousState, formData) {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('appwrite-session');
    if (!sessionCookie) {
        redirect('/login')
    }
    try {
        const { databases } = await createSessionClient(
            sessionCookie.value
        );
        const { user } = await checkAuth();
        if (!user) {
            return {
                error: ' Must logged',
            }
        }
        const checkInDate = formData.get('check_in_date');
        const checkInTime = formData.get('check_in_time');
        const checkOutDate = formData.get('check_out_date');
        const checkOutTime = formData.get('check_out_time');
        const service_id = formData.get('room_id');

        const checkInDateTime = `${checkInDate}T${checkInTime}`;
        const checkOutDateTime = `${checkOutDate}T${checkOutTime}`;

        const isAvailable = await checkService(service_id, checkInDateTime, checkOutDateTime);
        if (!isAvailable) {
            return {
                error: 'This room is already booked!'
            }
        }

        const bookingService = {
            check_in: checkInDateTime,
            check_out: checkOutDateTime,
            user_id: user.id,
            service_id: service_id,
        }
        const newBooking = await databases.createDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
            ID.unique(),
            bookingService
        )
        revalidatePath('/bookings', 'layout')
        return {
            success: true
        }
    } catch (error) {
        console.log('Failed to book', error);
        return {
            error: 'something went wrong!'
        }
    }
}
export default bookService;