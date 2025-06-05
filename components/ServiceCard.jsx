import Image from "next/image";
import { FaSignOutAlt } from "react-icons/fa";
import Link from "next/link"

const ServiceCard = ({ room }) => {
  const imgUrl = "";
  return (
    <div className="basis-1/3">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <div className="relative w-full h-50">
            <Image
              className="w-full sm:w-32 sm:h-32 mb-3 sm:mb-0 rounded-t-lg"
              src={`/images/${room.image}`}
              // width={100}
              // height={100}
              fill={true}
              alt=""
            />
          </div>
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {room.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
            {room.description}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-1">
            {room.address}
          </p>
          <div className="mb-3 flex gap-3">
            <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-2 py-1 rounded-md ring-1 ring-green-300">
              ${room.price_per_hour}/hour
            </span>
            <span className="inline-block bg-red-100 text-green-800 text-sm font-semibold px-2 py-1 rounded-md ring-1 ring-red-300">
              ${room.availability}
            </span>
            
          </div>
          <Link
            href={`/services/${room.$id}`}
            className="inline-flex gap-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View
            <FaSignOutAlt />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
