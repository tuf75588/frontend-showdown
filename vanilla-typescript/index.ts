const form: HTMLFormElement = document.querySelector('form');
const input: HTMLInputElement = document.querySelector(
  'input[name="searchTerm"]'
);

const imgSection: HTMLElement = document.querySelector('.images');
const loadingSpinner: HTMLImageElement = document.querySelector(
  '#loadingImage'
);
import { getImages } from './utils/API.js';
document.addEventListener('DOMContentLoaded', () => {
  loadingSpinner.style.visibility = 'hidden';
});

async function handleSubmit(e: Event) {
  e.preventDefault();
  const formData: FormData = new FormData(form);
  const searchTerm = formData.get('searchTerm');
  getImages(searchTerm).then(paintImagesToDOM);
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
  items.forEach(({ title }) => {
    const p = document.createElement('p');
    p.textContent = title;
    imgSection.appendChild(p);
    document.removeChild(loadingSpinner);
  });
}

form.addEventListener('submit', handleSubmit);
