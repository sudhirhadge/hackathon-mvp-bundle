// components/TransactionList.jsx

export default function TransactionList({ transactions }) {
    if (transactions.length === 0) {
        return <p className="text-gray-400 text-sm">No transactions.</p>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm">
                <thead>
                    <tr className="text-left text-gray-400 border-b border-gray-700">
                        <th className="pb-2">Date</th>
                        <th className="pb-2">Description</th>
                        <th className="pb-2">Category</th>
                        <th className="pb-2">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((tx) => (
                        <tr key={tx.id} className="border-b border-gray-800">
                            <td className="py-3 text-gray-300">{tx.date}</td>
                            <td className="py-3 text-gray-200">{tx.description}</td>
                            <td className="py-3 text-gray-300">{tx.category}</td>
                            <td className="py-3 font-medium">
                                <span
                                    className={
                                        tx.type === "income"
                                            ? "text-green-400"
                                            : "text-red-400"
                                    }
                                >
                                    {tx.type === "income" ? "+" : "-"}₹{tx.amount}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}