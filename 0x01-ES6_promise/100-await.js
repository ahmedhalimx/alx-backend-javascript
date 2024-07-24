import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let userProfile = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    userProfile = { photo, user };
  } catch (err) {
    userProfile = { photo: null, user: null };
  }
  return userProfile;
}
