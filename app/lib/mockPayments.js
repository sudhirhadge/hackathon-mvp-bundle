// lib/mockPayments.js

let transactions = [
    {
        id: "1",
        amount: 1250,
        type: "income",
        category: "Salary",
        description: "Monthly salary",
        date: "2026-04-10",
    },
    {
        id: "2",
        amount: 350,
        type: "expense",
        category: "Food",
        description: "Groceries",
        date: "2026-04-12",
    },
    {
        id: "3",
        amount: 200,
        type: "expense",
        category: "Travel",
        description: "Uber ride",
        date: "2026-04-13",
    },
];

export function getTransactions(filter = "all") {
    if (filter === "all") return transactions;
    return transactions.filter((t) => t.type === filter);
}

export function addTransaction(newTx) {
    const id = Date.now().toString();
    const tx = { ...newTx, id };
    transactions = [tx, ...transactions];
    return tx;
}