// components/CaseDetailsModal.jsx
"use client";

import Modal from "./ui/Modal";

export default function CaseDetailsModal({ case: c, onClose }) {
    if (!c) return null;

    const messages = [
        {
            id: "1",
            text: "User reported transaction failed and amount was debited.",
            by: "customer",
            at: "2026-04-16T14:33:00Z",
        },
        {
            id: "2",
            text: "We have escalated to transaction team. Please allow 24 hours.",
            by: "agent",
            at: "2026-04-16T15:10:00Z",
        },
        {
            id: "3",
            text: "Transaction is being reviewed. Thank you for patience.",
            by: "agent",
            at: "2026-04-17T10:05:00Z",
        },
    ];

    return (
        <Modal isOpen={true} onClose={onClose}>
            <div className="max-w-lg w-full">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                    Case {c.id}
                </h2>

                <div className="mb-4 text-sm text-gray-600">
                    <p>
                        <strong>Subject:</strong> {c.subject}
                    </p>
                    <p>
                        <strong>Category:</strong> {c.category}
                    </p>
                    <p>
                        <strong>Status:</strong>{" "}
                        <span className="capitalize">{c.status}</span>
                    </p>
                </div>

                <h3 className="text-sm font-medium text-gray-700 mb-2">
                    Messages
                </h3>
                <div className="max-h-60 overflow-y-auto space-y-2">
                    {messages.map((m) => (
                        <div
                            key={m.id}
                            className={`p-2 rounded text-sm ${m.by === "customer"
                                ? "bg-indigo-50 text-indigo-700"
                                : "bg-gray-100 text-gray-700"
                                }`}
                        >
                            <p>{m.text}</p>
                            <p className="text-xs mt-1 text-gray-500">
                                {new Date(m.at).toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-end mt-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded bg-white hover:bg-gray-50"
                    >
                        Close
                    </button>
                </div>
            </div>
        </Modal>
    );
}