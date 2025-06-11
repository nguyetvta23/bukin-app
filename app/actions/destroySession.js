'use server';

import { PasswordHash } from "node-appwrite";
import {createSessionClient} from '@/config/Appwrite.js';
import { cookies } from 'next/headers';
import { error } from "console";

async function destroySession() {
    const cookieStore = await cookies(); 
    const sessionCookie = cookieStore.get('appwrite-session');    
    if(!sessionCookie){
        return {
            error: 'Không tìm thấy!',
        }
    }
    try {
        const {account} = await createSessionClient(sessionCookie.value)
        // delete cookie
        await account.deleteSession('current');
        // clear cookies
        cookieStore.delete('appwrite-session');
        return {
            success: 'Đăng xuất thành công!',
        }

    } catch (error) {
        console.log(error)
        return {
            error: 'Có lỗi khi đăng xuất'
        }
    }
}
export default destroySession;