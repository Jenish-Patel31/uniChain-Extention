const API_URL = "https://backend-u2e6.onrender.com";

async function registerUser(email, password) {
    const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    return res.json();
}

async function loginUser(email, password) {
    const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    return res.json();
}

function generateSeedPhrase() {
    const words = "apple banana cherry dragon eagle fox grape happy ice jelly kite lemon".split(" ");
    let seedPhrase = [];
    for (let i = 0; i < 12; i++) {
        seedPhrase.push(words[Math.floor(Math.random() * words.length)]);
    }
    return seedPhrase.join(" ");
}
