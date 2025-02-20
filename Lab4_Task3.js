function verifyPassword() {
    let password1 = prompt("Enter your password:");
    let password2 = prompt("Re-enter your password:");

    if (password1.length < 8) {
        alert("Password must be at least 8 characters long.");
    } else if (password1 !== password2) {
        alert("Passwords do not match.");
    } else {
        alert("Passwords matched.");
    }
}

verifyPassword();