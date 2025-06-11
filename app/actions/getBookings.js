'use server';
import { createSessionClient } from "@/config/Appwrite"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Query } from "node-appwrite";
import { cookies } from 'next/headers';
import checkAuth from "./checkAuth";

async function getBookings() {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('appwrite-session');
    if (!sessionCookie) {
        redirect('/signin')
    }
    try {
        const { databases } = await createSessionClient(
            sessionCookie.value
        );
        const { user } = await checkAuth();
        if (!user) {
            return {
                error: 'Must be logged to view bookings'
            }
        }

        const { documents: bookings } = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
            [Query.equal('user_id', user.id)]
        );
        return bookings;

    } catch (error) {
        console.log('Failed to get bookings', error);
        // redirect('/error')
        return []
    }
}
export default getBookings;