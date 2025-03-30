// const API_URL = "https://backend-u2e6.onrender.com";

document.addEventListener("DOMContentLoaded", () => {
    // Registration form listener
    const registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const response = await fetch(`${API_URL}/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                chrome.storage.local.set({ user: email });
                alert("Registration successful! Store your seed phrase securely.");
                window.location.href = "seed.html";
            } else {
                alert(data.error || "Registration failed!");
            }
        });
    }

    // Login form listener
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            const response = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                chrome.storage.local.set({ user: email });
                alert("Login successful!");
                window.location.href = "popup.html";
            } else {
                alert(data.error || "Login failed!");
            }
        });
    }
});

