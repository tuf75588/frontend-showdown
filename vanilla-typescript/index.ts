const form: HTMLFormElement = document.querySelector('form');
const input: HTMLInputElement = document.querySelector(
  'input[name="searchTerm"]'
);

const imgSection: HTMLElement = document.querySelector('.images');
const loadingSpinner: HTMLImageElement = document.querySelector(
  '#loadingImage'
);
import { getImages } from './utils/API.js';

async function handleSubmit(e: Event) {
  // clear prior results on new search
  imgSection.innerHTML = '';
  e.preventDefault();
  const formData: FormData = new FormData(form);
  const searchTerm = formData.get('searchTerm');
  loadingSpinner.src = 'utils/loading.gif';
  getImages(searchTerm).then(paintImagesToDOM);
  form.reset();
}

// function to map over images and toggle loading spinner off
function paintImagesToDOM(
  items: Array<{
    image: string;
    title: string;
    author: string;
    source: string;
  }>
) {
  items.forEach(({ image }) => {
    const img = document.createElement('img');
    img.src = image;
    imgSection.appendChild(img);
    // remove loading indicator
    loadingSpinner.removeAttribute('src');
  });
}

form.addEventListener('submit', handleSubmit);
