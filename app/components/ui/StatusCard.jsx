// components/StatusCard.jsx

import { simulateKyc } from "../../lib/mockKyc";


export default function StatusCard({ formData }) {
  const { status, reason } = simulateKyc(formData);

  const statusColor =
    status === "Approved"
      ? "bg-green-100 text-green-800"
      : status === "Rejected"
      ? "bg-red-100 text-red-800"
      : "bg-yellow-100 text-yellow-800";

  return (
    <div className="bg-gray-900 rounded-xl border border-gray-700 p-6 shadow-lg max-w-md">
      <h3 className="text-lg font-bold text-white mb-3">KYC Status</h3>
      <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${statusColor}`}>
        {status}
      </div>
      <p className="text-sm text-gray-300 mb-4">{reason}</p>
      <p className="text-xs text-gray-400">
        Account will be activated within 24 hours if approved.
      </p>
    </div>
  );
}