// Feature 1: Form Validation
function validateForm(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var errorMsg = document.getElementById('errorMsg');
    var successMsg = document.getElementById('successMsg');

    // Clear previous messages
    errorMsg.innerText = '';
    successMsg.innerText = '';

    // Check if name is empty
    if (name === '') {
        errorMsg.innerText = 'Please enter your name!';
        return false;
    }

    // Check if email is valid
    if (!email.includes('@')) {
        errorMsg.innerText = 'Please enter a valid email address!';
        return false;
    }

    // Check if message is long enough
    if (message.length < 10) {
        errorMsg.innerText = 'Message must be at least 10 characters!';
        return false;
    }

    // If everything is good
    successMsg.innerText = 'Message sent successfully!';
    return true;
}

// Feature 2: Dark/Light Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    var btn = document.getElementById('darkBtn');
    if (document.body.classList.contains('dark-mode')) {
        btn.innerText = 'Light Mode';
    } else {
        btn.innerText = 'Dark Mode';
    }
}

// Feature 3: Show/Hide About Me
function toggleAbout() {
    var para = document.querySelector('#about p');
    var btn = document.getElementById('aboutBtn');
    if (para.style.display === 'none') {
        para.style.display = 'block';
        btn.innerText = 'Hide About Me';
    } else {
        para.style.display = 'none';
        btn.innerText = 'Show About Me';
    }
}