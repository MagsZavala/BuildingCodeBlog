const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const confirmPassword = document.querySelector('#confirm-password-signup').value.trim();

  if (password !== confirmPassword) {
    alert('Passwords do not match. Please try again.');
    return;
  }

  if (username && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // Save user info to local storage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password); // Usually, you wouldn't store passwords in local storage, this is just for demonstration
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

  