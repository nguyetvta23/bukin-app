'use server';
import {createAdminClient} from "@/config/Appwrite"
import { revalidatePath } from "next/cache";
import { redirect   } from "next/navigation";

async function getAllRooms(){
    try {
    const {databases} = await createAdminClient();
    const {documents: services} = await databases.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE, // database ID
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_SERVICES // collection ID
      );
    //   console.log(databases)
    // Revalidate the cache for this path
    // revalidatePath('/', 'layout');    
    return services;
        
    } catch (error) {
        console.log('Failed to load thi');
        redirect('/error')
    }
}
export default getAllRooms;