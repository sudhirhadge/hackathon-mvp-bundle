// components/KpiCard.jsx

export default function KpiCard({ label, value, change = null }) {
    const changeColor =
        change == null
            ? "text-gray-400"
            : change >= 0
                ? "text-green-400"
                : "text-red-400";

    return (
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow">
            <p className="text-sm text-gray-300">{label}</p>
            <p className="text-xl font-bold text-white mt-1">
                ₹{value?.toLocaleString?.()}
            </p>
            {change != null && (
                <p className={`text-sm mt-1 ${changeColor}`}>
                    {change >= 0 ? "+" : ""}
                    {change}%
                </p>
            )}
        </div>
    );
}