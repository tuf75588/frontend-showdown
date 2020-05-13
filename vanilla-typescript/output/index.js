var form = document.querySelector('form');
var input = document.querySelector('input[name="searchTerm"]');
var loadingSpinner = document.querySelector('#loadingImage');
import { getImages } from './utils/API.js';
// hide the spinner on page load
loadingSpinner.style.display = 'none';
function handleSubmit(e) {
    loadingSpinner.style.display = '';
    e.preventDefault();
    var formData = new FormData(form);
    var searchTerm = formData.get('searchTerm');
    setTimeout(function () {
        loadingSpinner.style.display = 'none';
        return;
    }, 3000);
    getImages(searchTerm);
}
form.addEventListener('submit', handleSubmit);
