// lib/mockCardControls.js

let cards = [
    {
        id: "1",
        last4: "4567",
        type: "debit",
        bank: "National Bank",
        isActive: true,
        allowAtm: true,
        allowInternational: true,
        allowOnline: true,
    },
    {
        id: "2",
        last4: "9123",
        type: "credit",
        bank: "City Finance",
        isActive: false,
        allowAtm: false,
        allowInternational: false,
        allowOnline: true,
    },
];

export function getCards() {
    return cards;
}

export function updateCard(id, updates) {
    cards = cards.map((c) =>
        c.id === id ? { ...c, ...updates } : c
    );
    return cards.find((c) => c.id === id);
}