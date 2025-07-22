document.getElementById('resetForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('resetEmail').value;
  const newPassword = document.getElementById('newPassword').value;

  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser && storedUser.email === email) {
    storedUser.password = newPassword;
    localStorage.setItem('user', JSON.stringify(storedUser));
    alert('Password reset successful! You can now login.');
    window.location.href = 'login.html';
  } else {
    alert('No user found with this email.');
  }
});
