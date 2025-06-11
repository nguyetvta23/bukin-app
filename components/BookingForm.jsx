'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useActionState } from 'react';
import { toast } from 'react-toastify';
import bookService from '@/app/actions/bookService';

const BookingForm = ({ room }) => {
  const [state, formAction] = useActionState(bookService, {});

  const router = useRouter();

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success('Room has been booked!');
      router.push('/bookings');
    }
  }, [state]);

  return (
    <div className='mt-6 p-5 text-gray-900'>
      <h2 className='text-xl text-center font-bold'>Book this Room</h2>
      <form action={formAction} className='mt-4'>
        <input type='hidden' name='room_id' value={room.$id} />
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          <div>
            <label
              htmlFor='check_in_date'
              className='block text-sm font-medium text-gray-700'
            >
              Check-In Date
            </label>
            <input
              type='date'
              id='check_in_date'
              name='check_in_date'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              required
            />
          </div>
          <div>
            <label
              htmlFor='check_in_time'
              className='block text-sm font-medium text-gray-700'
            >
              Check-In Time
            </label>
            <input
              type='time'
              id='check_in_time'
              name='check_in_time'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              required
            />
          </div>
          <div>
            <label
              htmlFor='check_out_date'
              className='block text-sm font-medium text-gray-700'
            >
              Check-Out Date
            </label>
            <input
              type='date'
              id='check_out_date'
              name='check_out_date'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              required
            />
          </div>
          <div>
            <label
              htmlFor='check_out_time'
              className='block text-sm font-medium text-gray-700'
            >
              Check-Out Time
            </label>
            <input
              type='time'
              id='check_out_time'
              name='check_out_time'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              required
            />
          </div>
        </div>

        <div className='mt-6'>
          <button
            type='submit'
            className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  focus:outline-none  btn-primary'
          >
            Book Room
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;