// Save private key securely (Encryption logic can be added)
async function storePrivateKey(privateKey, password) {
    const encryptedKey = btoa(privateKey); // Simple Base64 encoding (Enhance this later)
    await chrome.storage.local.set({ privateKey: encryptedKey });
}

// Retrieve private key securely
async function getPrivateKey(password) {
    const data = await chrome.storage.local.get("privateKey");
    return data.privateKey ? atob(data.privateKey) : null;
}
