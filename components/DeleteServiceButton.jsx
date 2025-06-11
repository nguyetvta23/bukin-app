'use client'

import deleteRoom from "../app/actions/deleteRoom"  ;
import { toast } from "react-toastify";

const DeleteServiceButton = ( roomID) => {
    const handleDelete = async () => {
        const confirmed = window.confirm('Are u want to delete that service?')
        if (confirmed) {
            try {
                const response = await deleteRoom(roomID);
                toast.success('Delete successfully')
            } catch (error) {
                console.log('fail', error);
                return {
                    error: 'Fail to delete this service'
                }
            }
            
        }
    }
    return ( 
        <button onClick={handleDelete} className="btn-danger text-white px-3 py-1 rounded-md text-xs md:text-sm">Delete</button>
     );
}
 
export default DeleteServiceButton;