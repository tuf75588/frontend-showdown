const IMAGE_ENDPOINT = 'https://nature-image-api.now.sh/';
export async function getImages(searchTerm: FormDataEntryValue) {
  const request = await fetch(`${IMAGE_ENDPOINT}search?q=${searchTerm}`);
  // make sure status code is okay
  if (request.ok) {
    const json = await request.json();
    return json.images;
  } else {
    throw new Error(request.statusText);
  }
}
