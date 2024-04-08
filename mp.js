document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;
  
    // Validate login (Sample validation)
    if (username === 'sampleuser' && password === 'samplepassword') {
      alert('Login successful!');
      // Redirect to dashboard or perform further actions
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });
  
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    var username = document.getElementById('registerUsername').value;
    var password = document.getElementById('registerPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
    // Validate registration (Sample validation)
    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
    } else {
      alert('Registration successful!'); // Assuming registration is successful
      // Perform further actions like storing user data
    }
  });
  