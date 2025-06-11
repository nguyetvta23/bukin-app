'use server';
import { createSessionClient } from "@/config/Appwrite"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Query } from "node-appwrite";
import { cookies } from 'next/headers';
import { DateTime } from 'luxon';
import { toUTCDateTime, dateRangesOverlap } from '@/app/actions/helpers'

// function toUTCDateTime(dateString){
//     return DateTime.fromISO(dateString, {zone: 'utc'}).toUTC();
// }

// function dateRangesOverlap(checkInA, checkOutA, checkInB, checkOutB){
//     return checkInA<checkOutB && checkOutA > checkInB;
// }
async function checkService(roomID, checkIn, checkOut) {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('appwrite-session');
    if (!sessionCookie) {
        redirect('/signin')
    }
    try {
        const { databases } = await createSessionClient(
            sessionCookie.value
        );
        const checkInDateTime = toUTCDateTime(checkIn);
        const checkOutDateTime = toUTCDateTime(checkOut);
        const { documents: bookings } = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE, // database ID
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS, // collection ID
            [Query.equal('service_id', roomID)]
        );
        for (const booking of bookings) {
            const bookingCheckInDateTime = toUTCDateTime(booking.check_in);
            const bookingCheckOutDateTime = toUTCDateTime(booking.check_out);
            if (dateRangesOverlap(
                checkInDateTime,
                checkOutDateTime,
                bookingCheckInDateTime,
                bookingCheckOutDateTime
            )) {
                return false;
            }
        }
        return true;

    } catch (error) {
        console.log('Failed to check service', error);
        return {
            error: 'Fail to check service availability'
        }
    }
}
export default checkService;