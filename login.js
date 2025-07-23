const messageBox = document.getElementById('messageBox');

function showMessage(message, type) {
  messageBox.textContent = message;
  messageBox.className = 'message-box ' + type;
  messageBox.style.display = 'block';
}

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    showMessage('Login successful! Redirecting...', 'success');
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
  } else {
    showMessage('Invalid email or password.', 'error');
  }
});
