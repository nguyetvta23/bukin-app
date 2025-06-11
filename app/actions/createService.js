'use server';
import { createAdminClient } from '@/config/Appwrite';
import checkAuth from './checkAuth';
import { ID } from 'node-appwrite';
import { revalidatePath } from 'next/cache';

async function createService(previousState, formData) {
  const { databases, storage } = await createAdminClient();

  try {
    const { user } = await checkAuth();

    if (!user) {
      return {
        error: 'You must be logged in to create a room',
      };
    }
    let imageID;

    const image = formData.get('image');

    if (image && image.size > 0 && image.name !== 'undefined') {
      try {
        const response = await storage.createFile('service_bucket', ID.unique(), image);
        imageID = response.$id;
      } catch (error) {
        console.log('Loi', error);
        return {
          error: 'Lỗi hệ thống!',
        };
      }
    } else {
      console.log('No image file provided or file is invalid');
    }

    // Create room
    const newRoom = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_SERVICES,
      ID.unique(),
      {
        user_id: user.id,
        name: formData.get('name'),
        description: formData.get('description'),
        sqft: formData.get('sqft'),
        capacity: formData.get('capacity'),
        location: formData.get('location'),
        address: formData.get('address'),
        availability: formData.get('availability'),
        price_per_hour: formData.get('price_per_hour'),
        amenities: formData.get('amenities'),
        image: imageID,
      }
    );

    revalidatePath('/', 'layout');

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    const errorMessage =
      error.response.message || 'Lỗi hệ thống!';
    return {
      error: errorMessage,
    };
  }
}

export default createService;