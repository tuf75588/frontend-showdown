export default async function fetchImages(searchTerm: string) {
  const API_URL = `https://nature-image-api.now.sh/`;
  try {
    const request = await fetch(`${API_URL}search?q=${searchTerm}`);
    const json = await request.json();
    return json.images;
  } catch (error) {
    throw new Error(error.message);
  }
}
