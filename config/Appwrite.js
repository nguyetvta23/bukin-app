import {Client, Databases, Account, Storage} from "node-appwrite";
// Admin Client
const createAdminClient = async ()=>{
    const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)  // e.g., https://cloud.appwrite.io/v1
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)    // Project ID
    .setKey(process.env.APPWRITE_API_KEY);     
    return {
        get account() {
          return new Account(client);
        },
        get databases() {
          return new Databases(client);
        },
        get storage() {
          return new Storage(client);
        },

}
}
//  Session Client
const createSessionClient = async (session)=>{
    const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) // Your API Endpoint
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT);            // Your project ID

    // const session = cookies().session; // Get the session cookie from the request
    if (session) {
        client.setSession(session);
    }
    return {
        get account(){
            return new Account(client);
        },
        get databases(){
            return new Databases(client);
        },

    }
}

    

export {createAdminClient, createSessionClient}