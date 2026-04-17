// components/ui/Input.jsx
export default function Input({ label, type = "text", name, value, onChange, required }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-200 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white 
        focus:border-indigo-500 focus:outline-none"
      />
    </div>
  );
}