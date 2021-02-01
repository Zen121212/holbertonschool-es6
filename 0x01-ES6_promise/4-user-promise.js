export default function signUpUser(firstName, lastName) {
  const fullName = new Promise((resolve) => {
    resolve(
      { firstName, lastName },
    );
  });
  return fullName;
}
