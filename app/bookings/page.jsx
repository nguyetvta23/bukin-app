import Heading from '@/components/Heading';
import BookedServiceCard from '@/components/BookedServiceCard';
import getBookings from '../actions/getBookings';

const BookingsPage = async () => {
  const bookings = await getBookings();
  // console.log(bookings)
  return (
    <>
      <Heading title='My Bookings' />
      
      {bookings.length === 0 ? (
        <p className='text-gray-600 mt-4'>You have no bookings</p>
      ) : (
        bookings.map((booking) => (
          <BookedServiceCard key={booking.$id} booking={booking} />
        ))
      )}
    </>
  );
};

export default BookingsPage;