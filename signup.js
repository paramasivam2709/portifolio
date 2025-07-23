const messageBox = document.getElementById('messageBox');

function showMessage(message, type) {
  messageBox.textContent = message;
  messageBox.className = 'message-box ' + type;
  messageBox.style.display = 'block';
}

document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!name || !email || !password) {
    showMessage('Please fill all fields.', 'error');
    return;
  }

  const user = { name, email, password };
  localStorage.setItem('user', JSON.stringify(user));
  showMessage('Signup successful! Redirecting to login...', 'success');

  setTimeout(() => {
    window.location.href = 'login.html';
  }, 1500);
});
