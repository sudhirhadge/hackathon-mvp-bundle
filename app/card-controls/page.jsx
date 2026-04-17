// app/card-controls/page.jsx
"use client";

import { useState } from "react";
import { getCards, updateCard } from "../lib/mockCardControls";
import Card from "../components/ui/Card";
import CardListItem from "../components/CardListItem";
import CardControlsForm from "../components/CardControlsForm";

export default function CardControlsPage() {
    const [cards, setCards] = useState(getCards());
    const [selectedCardId, setSelectedCardId] = useState(cards[0]?.id);

    const selectedCard = cards.find((c) => c.id === selectedCardId) || null;

    const handleToggleCardStatus = (id, newValue) => {
        const updated = updateCard(id, { isActive: newValue });
        setCards([...cards]); // Force re‑render
    };

    const handleUpdateControls = (id, updates) => {
        const updated = updateCard(id, updates);
        setCards([...cards]);
    };

    return (
        <div className="min-h-screen px-4 py-6 text-white">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">
                    Card Controls & Self‑Service Banking
                </h1>
                <p className="text-sm text-gray-300 mb-6">
                    View and manage your debit and credit cards instantly.
                </p>

                {/* Card list */}
                <Card>
                    <h2 className="text-lg font-medium mb-4">Your Cards</h2>
                    {cards.length === 0 ? (
                        <p className="text-gray-400 text-sm">No cards linked.</p>
                    ) : (
                        cards.map((card) => (
                            <CardListItem
                                key={card.id}
                                card={card}
                                onToggleCardStatus={handleToggleCardStatus}
                            />
                        ))
                    )}
                </Card>

                {/* Card controls form */}
                <Card>
                    <h2 className="text-lg font-medium mb-4">
                        Manage selected card
                    </h2>
                    <select
                        value={selectedCardId}
                        onChange={(e) => setSelectedCardId(e.target.value)}
                        className="mb-4 w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white text-sm"
                    >
                        {cards.map((card) => (
                            <option key={card.id} value={card.id}>
                                {card.type === "debit" ? "Debit" : "Credit"} ••••
                                {card.last4}
                            </option>
                        ))}
                    </select>
                    {selectedCard && (
                        <CardControlsForm
                            card={selectedCard}
                            onUpdate={handleUpdateControls}
                        />
                    )}
                </Card>
            </div>
        </div>
    );
}