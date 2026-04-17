// components/CardControlsForm.jsx
"use client";

import ToggleSwitch from "./ui/ToggleSwitch";

export default function CardControlsForm({ card, onUpdate }) {
    if (!card) return null;

    return (
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 mt-4">
            <h3 className="text-sm font-medium text-white mb-4">
                Card Controls
            </h3>
            <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                    <span className="text-gray-300">Allow ATM</span>
                    <button
                        onClick={() =>
                            onUpdate(card.id, { allowAtm: !card.allowAtm })
                        }
                    >
                        <ToggleSwitch checked={card.allowAtm} />
                    </button>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-gray-300">Allow international</span>
                    <button
                        onClick={() =>
                            onUpdate(card.id, { allowInternational: !card.allowInternational })
                        }
                    >
                        <ToggleSwitch checked={card.allowInternational} />
                    </button>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-gray-300">Allow online</span>
                    <button
                        onClick={() =>
                            onUpdate(card.id, { allowOnline: !card.allowOnline })
                        }
                    >
                        <ToggleSwitch checked={card.allowOnline} />
                    </button>
                </div>
            </div>
        </div>
    );
}