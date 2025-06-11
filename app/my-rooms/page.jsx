import getMyRooms from "@/app/actions/getMyRooms";
import Heading from "@/components/Heading";
import MyServiceCard from "@/components/MyServiceCard";

const MyServices = async () => {
  const services = await getMyRooms();
  return (
    <>
    <Heading title="My rooms" />
    <div className="bg-white p-8 overflow-auto mt-16 h-screen">
      <div className="relative overflow-auto">
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full bg-white border mb-20">
            <thead>
              <tr className="bg-gray-800 text-center text-xs md:text-sm font-thin text-white">
                <th className="p-0">
                  <span className="block py-2 px-3 border-r border-gray-300">
                    Service Name
                  </span>
                </th>
                <th className="p-0">
                  <span className="block py-2 px-3 border-r border-gray-300">
                    Price
                  </span>
                </th>
                <th className="p-0">
                  <span className="block py-2 px-3 border-r border-gray-300">
                    Time
                  </span>
                </th>
                <th className="p-4 text-xs md:text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.length > 0 ? (
                services.map((service) => (
                  <MyServiceCard key={service.$id} room={service} />
                ))
              ) : (
                <h2>You have no rooms now!</h2>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default MyServices
;
