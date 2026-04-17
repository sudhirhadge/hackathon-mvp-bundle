// components/DataGrid.jsx

export default function DataGrid({ rows }) {
    if (rows.length === 0) {
        return <p className="text-gray-400 text-sm">No data.</p>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm">
                <thead>
                    <tr className="text-left text-gray-400 border-b border-gray-700">
                        <th className="pb-2">Metric</th>
                        <th className="pb-2">Value</th>
                        <th className="pb-2">Trend</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.id} className="border-b border-gray-800">
                            <td className="py-3 text-gray-200">{row.metric}</td>
                            <td className="py-3 text-gray-300">{row.value}</td>
                            <td className="py-3">
                                <span
                                    className={
                                        row.status === "up"
                                            ? "text-green-400"
                                            : "text-red-400"
                                    }
                                >
                                    {row.status === "up" ? "▲" : "▼"}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}