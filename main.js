// Email capture: not yet wired to a backend — swap the handler body for a real request.
const form = document.getElementById('notify-form');
const status = document.getElementById('notify-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = "Thanks! We'll let you know when we launch.";
  form.reset();
});
