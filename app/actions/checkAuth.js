'use server'
import {createSessionClient} from '@/config/Appwrite';
import { cookies } from 'next/headers';
// import {authContext} from '@/context/authContext';

async function checkAuth() {
    const sessionCookie = (await cookies()).get('appwrite-session');
    if(!sessionCookie){
        return {
           isAuthenticated : false,
        }
    }
    try {
        const {account} = await createSessionClient(sessionCookie.value);
        const user = await account.get();
        return {
           isAuthenticated : true,
            user:{
                id: user.$id,
                name: user.name,
                email: user.email
            }
        }
    } catch (error) {
        return {
           isAuthenticated : false
        }
    }
}
export default checkAuth;