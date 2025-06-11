'use server';

import { PasswordHash } from "node-appwrite";
import {createAdminClient} from '@/config/Appwrite.js';
import { cookies } from 'next/headers';

async function createSession(prevState,formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    if (!email || !password) {
        return {
            error: 'Please fill out all fields',
        };
    }
    // get account instance
    const {account} = await createAdminClient()
    try {
        // gen session
        const  session = await account.createEmailPasswordSession(email, password);
        (await cookies()).set('appwrite-session', session.secret,   
            {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            expires: new Date(session.expire) ,
            path: '/'
          });
          return {
            success: 'Logged successfully'
          }
    } catch (error) {
        console.log('have problem', email, password, error);
        return {
            error: 'Cant loggin '
        }
    }
}
export default createSession;