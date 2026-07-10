const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const form = document.getElementById('contact-form');
const statusMessage = document.getElementById('form-status');

navToggle?.addEventListener('click', () => {
  siteNav?.classList.toggle('open');
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const message = document.getElementById('message')?.value.trim();

  if (!name || !email || !message) {
    statusMessage.textContent = 'Please fill in all fields before sending.';
    return;
  }

  statusMessage.textContent = 'Thanks! Your message has been received. We will contact you shortly.';
  form.reset();
});
