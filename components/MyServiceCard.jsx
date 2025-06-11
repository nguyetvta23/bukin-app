import Image from "next/image";
import { FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import DeleteServiceButton from "./DeleteServiceButton";

const MyServiceCard= ({ room }) => {
  const bucketID = process.env.NEXT_PUBLIC_APPWRITE_SERVICE_STORAGE_BUCKET;
  const projectID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;
  const imgURL = `https://fra.cloud.appwrite.io/v1/storage/buckets/${bucketID}/files/${room.image}/view?project=${projectID}`;
    const imageSrc = room.image ? imgURL : '/images/no-image.png';
  return (
    <tr className="border-b text-xs md:text-sm text-center text-gray-800">
    <td className="p-2 md:p-4">{room.name}</td>
    <td className="p-2 md:p-4">{room.price_per_hour} $</td>
    <td className="p-2 md:p-4">{room.sqft} m <sup>2</sup></td>
    <td className="relative p-2 md:p-4 flex justify-center space-x-2">
      <Link href={`/service/${room.$id}`}>
      <button className="btn-primary text-white px-3 py-1 rounded-md text-xs md:text-sm">View</button>
      </Link>
      <DeleteServiceButton roomID={room.$id} />
    </td>
  </tr>
 
  );
};

export default MyServiceCard;
