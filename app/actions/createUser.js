'use server';
import { createAdminClient} from '@/config/Appwrite';
import {ID} from "node-appwrite";

async function createUser(previousState, formData){
    const email = formData.get('email');
    const name = formData.get('name');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirm-password');


    if (!email || !name || !password) {
        return {
            error: 'Vui lòng điền đầy đủ thông tin!',
        }
    }
    if(password.length < 8){
        return{
            error: 'Mật khẩu phải nhiều hơn 8 kí tự',
        }
    }
    if(password !== confirmPassword){
        return {
            error: 'Mật khẩu không khớp!',        
        }
    }
    const {account} = await createAdminClient();
    try {
        // create
        await account.create(ID.unique(), email, password, name);
        return {
            success: true
        }
    } catch (error) {
        console.log('sign up that bai', error);
        return {
            error: 'That baai',
        }
    }
}
export default createUser;