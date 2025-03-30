document.addEventListener("DOMContentLoaded", async () => {
    const registerBtn = document.getElementById("register-btn");
    const loginBtn = document.getElementById("login-btn");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const message = document.getElementById("message");
    const walletSection = document.getElementById("wallet-section");
    const authSection = document.getElementById("auth-section");
    const walletAddress = document.getElementById("wallet-address");
    const logoutBtn = document.getElementById("logout-btn");

    const API_URL = "https://backend-u2e6.onrender.com";

    // Check if user is already registered
    async function checkUser(email) {
        const res = await fetch(`${API_URL}/check-user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
        });

        const data = await res.json();
        return data.exists;
    }

    registerBtn.addEventListener("click", async () => {
        const email = emailInput.value;
        const password = passwordInput.value;
        if (!email || !password) {
            message.innerText = "Please enter email and password!";
            return;
        }

        if (await checkUser(email)) {
            message.innerText = "You are already registered. Please login!";
            registerBtn.style.display = "none"; // Hide register button
            return;
        }

        try {
            const res = await fetch(`${API_URL}/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();
            message.innerText = data.message || "Registration successful!";
            registerBtn.style.display = "none"; // Hide register button after successful registration
        } catch (error) {
            message.innerText = "Registration failed!";
        }
    });

    loginBtn.addEventListener("click", async () => {
        const email = emailInput.value;
        const password = passwordInput.value;
        if (!email || !password) {
            message.innerText = "Please enter email and password!";
            return;
        }

        try {
            const res = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();
            if (data.message === "Login successful") {
                authSection.classList.add("hidden");
                walletSection.classList.remove("hidden");
                walletAddress.innerText = "Your Wallet Address";
            } else {
                message.innerText = data.error || "Login failed!";
            }
        } catch (error) {
            message.innerText = "Login failed!";
        }
    });

    logoutBtn.addEventListener("click", () => {
        authSection.classList.remove("hidden");
        walletSection.classList.add("hidden");
        message.innerText = "Logout successful!";
    });
});
