'use server';
import {createAdminClient} from "@/config/Appwrite"
import { revalidatePath } from "next/cache";
import { redirect   } from "next/navigation";

async function getAllRooms(){
    const {databases} = await createAdminClient();
        const {documents: services} = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE, // database ID
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_SERVICES // collection ID
          );
          console.log(databases)
        // revalidatePath('/','layout');
        return services;
    // try{
    //     const {databases} = await createAdminClient();
    //     const {documents: services} = await databases.listDocuments(
    //         process.env.NEXT_PUBLIC_APPWRITE_DATABASE, // database ID
    //         process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_SERVICES // collection ID
    //       );
    //       console.log(databases)
    //     revalidatePath('/','layout');
    //     return services;
    // }catch(err){
    //     console.log('err')
    //     // redirect('/error');
    // }
}
export default getAllRooms;