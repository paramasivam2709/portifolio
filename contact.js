const messageBox = document.getElementById('messageBox');

function showMessage(message, type) {
  messageBox.textContent = message;
  messageBox.className = 'message-box ' + type;
  messageBox.style.display = 'block';
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    showMessage('Please fill in all fields.', 'error');
    return;
  }

  // Simulate sending message (or save to localStorage for demo)
  const contactData = { name, email, message, time: new Date().toLocaleString() };
  localStorage.setItem('contactMessage', JSON.stringify(contactData));

  showMessage('Your message has been sent successfully!', 'success');
  document.getElementById('contactForm').reset();
});
