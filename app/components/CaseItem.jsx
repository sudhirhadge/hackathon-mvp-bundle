// components/CaseItem.jsx

export default function CaseItem({ case: c, onClick }) {
    const statusColor =
        c.status === "open"
            ? "bg-yellow-100 text-yellow-800"
            : c.status === "in-progress"
                ? "bg-blue-100 text-blue-800"
                : "bg-green-100 text-green-800";

    return (
        <div
            onClick={() => onClick(c)}
            className="flex justify-between items-center p-4 border border-gray-700 rounded-lg bg-gray-900 hover:bg-gray-800 cursor-pointer"
        >
            <div>
                <h3 className="text-sm font-medium text-white mb-1">
                    {c.subject}
                </h3>
                <p className="text-xs text-gray-400">{c.category}</p>
            </div>
            <div className="flex flex-col items-end space-y-1">
                <span className={`text-xs px-2 py-1 rounded-full ${statusColor}`}>
                    {c.status.replace("-", " ")}
                </span>
                <time className="text-xs text-gray-400">
                    {new Date(c.lastUpdated).toLocaleDateString()}
                </time>
            </div>
        </div>
    );
}