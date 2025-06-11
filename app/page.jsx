
import ServiceCard from "@/components/ServiceCard"
import Heading from "@/components/Heading"
import getAllRooms from "./actions/getAllRooms"

export default async function Home() {
  const services = await getAllRooms();
  // console.log(services);
  return (
    <>
    <Heading title={'Our services'}/>
    <div className="grid grid-cols-3 gap-4 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">              
      {
        services.length > 0 ? 
        (services.map((service) =>
           <ServiceCard key={service.$id} room={service}/>)) : 
        (<h2>No service now</h2>)
      }
    </div>
    </>
  );
}
