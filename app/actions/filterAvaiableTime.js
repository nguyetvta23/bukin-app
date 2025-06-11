'use server'
import { DateTime, Interval } from "luxon";
import { cookies } from "next/headers";
import { Query } from "node-appwrite";
import { createAdminClient } from "@/config/Appwrite";
import {toDdMm} from "@/app/actions/helpers"
async function filterAvaiableTime(params) {
    const id = params
    // const cookieStorage = await cookies()
    // const sessionCookie = cookieStorage.get('appwrite-session')
    try{
        const {databases} = await createAdminClient();
        const {documents: bookings} = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
            [Query.equal('service_id', id)]
        )
        if(bookings.length === 0){
            return {
                message: 'Full Availibility'
            }
        }
        const slots = bookings.map((booking)=>{
            return {
                check_in: toDdMm(booking.check_in),
                check_out: toDdMm(booking.check_out),
            }
        });
        return slots;
    }catch(error){
        console.log('Have mistake', error)
        return {
            error: 'Fail',
        }
    }
}

export default filterAvaiableTime;