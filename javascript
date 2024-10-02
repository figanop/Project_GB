const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    fetch('/send-email', {
        method: 'POST',
        body: formData,
    })
    .then((response) => response.text())
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
});