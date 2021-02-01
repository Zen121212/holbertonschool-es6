export default function handleResponseFromAPI(promise) {
  return promise.then(() => ({ status: 200, body: 'Success' })).catch(() => Error()).finally(() => console.log('Got response from API'));
}
