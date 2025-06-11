'use server';
import {createAdminClient} from "@/config/Appwrite"
import { revalidatePath } from "next/cache";
import { redirect   } from "next/navigation";

async function getService(id){
    try {
    const {databases} = await createAdminClient();
    const service = await databases.getDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE, // database ID
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_SERVICES,
        id
      );
    //   console.log(databases)
    // Revalidate the cache for this path
    // revalidatePath('/', 'layout');    
    return service;
        
    } catch (error) {
        console.log('Failed to load this page');
        redirect('/error')
    }
}
export default getService;