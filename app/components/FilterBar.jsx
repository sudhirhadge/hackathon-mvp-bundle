// components/FilterBar.jsx
"use client";

export default function FilterBar({ activeFilter, setActiveFilter }) {
    return (
        <div className="flex flex-wrap gap-2 mb-4">
            {[
                { key: "all", label: "All" },
                { key: "income", label: "Income" },
                { key: "expense", label: "Expense" },
            ].map((f) => (
                <button
                    key={f.key}
                    onClick={() => setActiveFilter(f.key)}
                    className={`px-3 py-1 rounded text-sm font-medium ${activeFilter === f.key
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                >
                    {f.label}
                </button>
            ))}
        </div>
    );
}