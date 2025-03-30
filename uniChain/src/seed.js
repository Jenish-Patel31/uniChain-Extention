const generateSeedPhrase = () => {
    const words = "apple banana cat dog elephant fox grape hat igloo".split(" "); // Example seed
    return Array.from({ length: 12 }, () => words[Math.floor(Math.random() * words.length)]).join(" ");
};

const seedPhrase = generateSeedPhrase();
document.getElementById("seed-container").innerText = seedPhrase;

// 🔹 Encrypt & Store Seed (User must copy it)
document.getElementById("confirm-seed").addEventListener("click", () => {
    chrome.storage.local.set({ seed: btoa(seedPhrase) });  // Encode for security
    alert("Seed phrase stored securely!");
    window.location.href = "popup.html";  // Redirect to wallet
});
