// components/AddTransactionForm.jsx
"use client";

import { useState } from "react";

export default function AddTransactionForm({ onSubmit }) {
    const [form, setForm] = useState({
        amount: "",
        type: "income",
        category: "",
        description: "",
        date: new Date().toISOString().split("T")[0],
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1">
                        Amount (₹)
                    </label>
                    <input
                        type="number"
                        name="amount"
                        value={form.amount}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-indigo-500 focus:outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1">
                        Type
                    </label>
                    <select
                        name="type"
                        value={form.type}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-indigo-500 focus:outline-none"
                    >
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1">
                        Category
                    </label>
                    <input
                        type="text"
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        placeholder="e.g., Food, Travel"
                        required
                        className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-indigo-500 focus:outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1">
                        Date
                    </label>
                    <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-indigo-500 focus:outline-none"
                    />
                </div>
            </div>
            <div className="mb-5">
                <label className="block text-sm font-medium text-gray-200 mb-1">
                    Description
                </label>
                <input
                    type="text"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Brief description"
                    required
                    className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-indigo-500 focus:outline-none"
                />
            </div>
            <div className="flex justify-between">
                <button
                    type="button"
                    onClick={() => (window.location.href = "/payments")}
                    className="text-sm text-gray-400 hover:underline"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 text-sm font-medium rounded-lg text-white"
                >
                    Save Transaction
                </button>
            </div>
        </form>
    );
}