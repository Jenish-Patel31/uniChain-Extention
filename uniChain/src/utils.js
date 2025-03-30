// Import necessary cryptography functions
async function generateSeedPhrase() {
    const wordList = [
        "apple", "banana", "cherry", "dog", "elephant", "fox", "grape", "hat", "ice", "jelly",
        "kite", "lemon", "mango", "nut", "orange", "peach", "queen", "rose", "sun", "tiger",
        "umbrella", "violet", "water", "x-ray", "yellow", "zebra"
    ];

    let phrase = [];
    for (let i = 0; i < 12; i++) {
        phrase.push(wordList[Math.floor(Math.random() * wordList.length)]);
    }

    return phrase.join(" ");
}

function encryptData(data, password) {
    return btoa(unescape(encodeURIComponent(password + ":" + data)));  // Simple encryption (Improve later)
}

function decryptData(encrypted, password) {
    const decrypted = decodeURIComponent(escape(atob(encrypted)));
    if (decrypted.startsWith(password + ":")) {
        return decrypted.substring(password.length + 1);
    }
    return null; // Incorrect password
}
