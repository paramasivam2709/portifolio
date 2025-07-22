document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    alert('Login successful! Welcome, ' + storedUser.name);
    window.location.href = 'index.html';
  } else {
    alert('Invalid email or password');
  }
});
