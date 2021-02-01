import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const Photo = uploadPhoto();
  const User = createUser();
  return Promise.all([Photo, User]).then((values) => console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`), () => console.log('Signup system offline'));
}
