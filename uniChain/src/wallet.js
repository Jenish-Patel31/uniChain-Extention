// Fetch transaction history (Mock Example)
const transactions = [
    { date: "Nov 11", type: "Send", status: "Confirmed", amount: "-1 SepoliaETH" },
    { date: "Oct 25", type: "Contract Deployment", status: "Confirmed", amount: "-0 SepoliaETH" },
];

// Load Transactions
const loadHistory = () => {
    const historyContainer = document.getElementById("history");
    historyContainer.innerHTML = "";
    transactions.forEach((tx) => {
        historyContainer.innerHTML += `
            <div class="tx">
                <span>${tx.date}</span>
                <strong>${tx.type}</strong>
                <span>${tx.status}</span>
                <span>${tx.amount}</span>
            </div>`;
    });
};

// Fetch & Display Tokens (Mock Example)
const tokens = [
    { name: "Ethereum", balance: "0.5 ETH" },
    { name: "USDT", balance: "20 USDT" },
];

const loadTokens = () => {
    const tokensContainer = document.getElementById("tokens");
    tokensContainer.innerHTML = "";
    tokens.forEach((token) => {
        tokensContainer.innerHTML += `<div class="token"><strong>${token.name}</strong>: ${token.balance}</div>`;
    });
};

// Run functions on page load
document.addEventListener("DOMContentLoaded", () => {
    loadHistory();
    loadTokens();
});
