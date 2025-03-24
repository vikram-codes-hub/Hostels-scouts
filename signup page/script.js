function validateLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (!email || !password) {
        alert('Please fill in all fields.');
        return false;
    }

    // Add your login validation logic here
    console.log('Login Data:', { email, password });
    alert('Login successful!');
    return false; // Prevent form submission for demo
}

function validateSignup() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const phone = document.getElementById('phone').value;
    const college = document.getElementById('college').value;

    if (!name || !email || !password || !confirmPassword || !phone || !college) {
        alert('Please fill in all fields.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    // Add your signup validation logic here
    console.log('Signup Data:', { name, email, password, phone, college });
    alert('Signup successful!');
    return false; // Prevent form submission for demo
}