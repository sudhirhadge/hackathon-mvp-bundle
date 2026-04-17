// app/payments/add/page.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Card from "../../components/ui/Card";
import AddTransactionForm from "../../components/AddTransactionForm";
import { addTransaction } from "../../lib/mockPayments";

export default function AddPayment() {
    const [message, setMessage] = useState("");

    const handleSubmit = (formData) => {
        const tx = addTransaction({
            ...formData,
            amount: parseFloat(formData.amount),
        });
        setMessage("Transaction added successfully!");
        // In a real app, you’d update global state instead of reloading
        setTimeout(() => {
            window.location.href = "/payments";
        }, 1200);
    };

    return (
        <div className="min-h-screen px-4 py-6">
            <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                    <Link href="/payments" className="text-sm text-gray-400 hover:underline">
                        ← Back to Payments
                    </Link>
                </div>

                <Card>
                    <h2 className="text-xl font-bold text-white mb-2">
                        Add New Transaction
                    </h2>
                    {message && (
                        <div className="mb-4 p-3 bg-green-900 text-green-200 text-sm rounded">
                            {message}
                        </div>
                    )}
                    <AddTransactionForm onSubmit={handleSubmit} />
                </Card>
            </div>
        </div>
    );
}