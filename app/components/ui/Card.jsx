// components/ui/Card.jsx
export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-gray-900 rounded-xl border border-gray-700 p-6 shadow-lg ${className}`}>
      {children}
      
    </div>
  );
}