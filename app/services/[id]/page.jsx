import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import data from "@/data/services.json";
import Heading from "@/components/Heading";
import BookingForm from "@/components/BookingForm";
import Image from "next/image";
const ServicePage = ({ params }) => {
  const { id } = params;
  const service = data.find((service) => service.$id === id);

  if (!service) {
    console.log(service);
    return (
      <div className="text-center mt-10 text-red-600">Service not found</div>
    );
  }
  return (
    <section className="w-full mx-auto py-10 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <Heading title={service.name} />
      <div className="w-full h-full flex flex-col items-center md:py-4 py-10">
        <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4">
          <Image
            className="md:w-[50%] w-full md:rounded-t-lg rounded-sm"
            src={`/images/${service.image}`}
            width={500}
            height={500}
            alt="billboard image"
          />

          <div className="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 p-0 rounded-md">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
              {service.name}
            </h2>
            <p className="text-md mt-4">{service.description}</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-md ring-1 ring-blue-300">
                🕒 {service.availability}
              </span>
              <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-md ring-1 ring-green-300">
                💵 ${service.price_per_hour}/hour
              </span>
            </div>
            <ul className="list-disc text-md mt-4 px-4">
              <li>
                <strong>The Area:</strong> {service.sqft} m<sup>2</sup>
              </li>
              <li>
                <strong>Max capacity:</strong> {service.capacity} guests
              </li>
              <li>
                <strong>Location:</strong> {service.location} -{" "}
                {service.address}
              </li>
              <li>
                <strong>Amenities:</strong> {service.amenities}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <BookingForm/>
      <div className="flex justify-center mt-6">
        <div className="flex justify-center gap-4 mt-6">
          <Link href={`/`}>
            <button className="px-10 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
              <div className="flex items-center gap-2">
                <FaArrowLeft />
                Back
              </div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
