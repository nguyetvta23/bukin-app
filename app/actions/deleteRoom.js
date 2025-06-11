'use server';
import { createSessionClient } from "@/config/Appwrite"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Query } from "node-appwrite";
import { cookies } from 'next/headers';

async function deleteRoom({ roomID }) {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('appwrite-session');
    if (!sessionCookie) {
        redirect('/signin')
    }
    try {
        const { account, databases } = await createSessionClient(
            sessionCookie.value
        );
        const user = await account.get();
        const userID = user.$id;
        const { documents: services } = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE, // database ID
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_SERVICES, // collection ID
            [Query.equal('user_id', userID)]
        );
        const deleteRoom = services.find((service) => service.$id === roomID);
        if (deleteRoom) {
            await databases.deleteDocument(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE, // database ID
                process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_SERVICES, // collection ID
                deleteRoom.$id
            )
            revalidatePath('/my-rooms', 'layout');
            return {
                success: true
            }
        } else {
            console.log('fail to delete');
            return {
                error: 'Fail to delete',
            }
        }


    } catch (error) {
        console.log('Failed to load thi', error);
        redirect('/error')
    }
}
export default deleteRoom;