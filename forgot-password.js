const messageBox = document.getElementById('messageBox');

function showMessage(message, type) {
  messageBox.textContent = message;
  messageBox.className = 'message-box ' + type;
  messageBox.style.display = 'block';
}

document.getElementById('resetForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('resetEmail').value;
  const newPassword = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (!storedUser || storedUser.email !== email) {
    showMessage('No user found with this email.', 'error');
    return;
  }

  if (newPassword.length < 4) {
    showMessage('Password should be at least 4 characters.', 'error');
    return;
  }

  if (newPassword !== confirmPassword) {
    showMessage('Passwords do not match.', 'error');
    return;
  }

  storedUser.password = newPassword;
  localStorage.setItem('user', JSON.stringify(storedUser));
  showMessage('Password reset successful! Redirecting to login...', 'success');

  setTimeout(() => {
    window.location.href = 'login.html';
  }, 1500);
});
