// import services from "@/data/services.json"
// import { HiH3 } from "react-icons/hi2";
import ServiceCard from "@/components/ServiceCard"
import Filter from "@/components/Filter"
import getAllRooms from "./actions/getAllRooms"

export default async function Home() {
  const services = await getAllRooms();
  // console.log(services);
  return (
    <div className="grid grid-cols-3 gap-4 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              {/* <Filter/> */}
      {
        services.length > 0 ? 
        (services.map((service) =>
           <ServiceCard key={service.$id} room={service}/>)) : 
        (<h2>No service now</h2>)
      }
    </div>
  );
}
