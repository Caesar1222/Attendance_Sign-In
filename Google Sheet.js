const scriptURL = 'https://script.google.com/macros/s/AKfycbwDBCBPUDrVoXWGmDbPVY4YCZQnGtG4hZNlnAxGWXOXYZmkSBUiIHJM2_ZYuMbLbi07SQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(() => {window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})