const form: HTMLFormElement = document.querySelector('form');
const input: HTMLInputElement = document.querySelector(
  'input[name="searchTerm"]'
);
const loadingSpinner: HTMLImageElement = document.querySelector(
  '#loadingImage'
);
import { getImages } from './utils/API.js';
// hide the spinner on page load
loadingSpinner.style.display = 'none';

function handleSubmit(e: Event) {
  loadingSpinner.style.display = '';
  e.preventDefault();
  const formData: FormData = new FormData(form);
  const searchTerm = formData.get('searchTerm');
  setTimeout((): (() => void) => {
    loadingSpinner.style.display = 'none';
    return;
  }, 3000);
  getImages(searchTerm);
}

form.addEventListener('submit', handleSubmit);
