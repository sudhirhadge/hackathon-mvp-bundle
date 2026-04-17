// components/CardListItem.jsx

import ToggleSwitch from "./ui/ToggleSwitch";

export default function CardListItem({ card, onToggleCardStatus }) {
    return (
        <div className="mb-4 rounded-lg border border-gray-700 bg-gray-900 p-4">
            <div className="flex flex-wrap items-center justify-between">
                <div>
                    <h3 className="text-sm font-medium text-gray-200">
                        {card.type === "debit" ? "Debit Card" : "Credit Card"}
                    </h3>
                    <p className="text-gray-400 text-sm">
                        Ending in ••••{card.last4}
                    </p>
                </div>
                <div className="flex flex-col items-end">
                    <label className="flex items-center text-sm text-gray-300">
                        <span className="mr-2">
                            {card.isActive ? "Card active" : "Card blocked"}
                        </span>
                        <button
                            onClick={() =>
                                onToggleCardStatus(card.id, !card.isActive)
                            }
                            className="ml-1"
                        >
                            <ToggleSwitch checked={card.isActive} />
                        </button>
                    </label>
                </div>
            </div>
        </div>
    );
}