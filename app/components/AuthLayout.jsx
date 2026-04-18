// components/AuthLayout.jsx

export default function AuthLayout({ children, title }) {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-pink-900">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-lg shadow p-6">
                    <h1 className="text-xl font-bold text-gray-900 mb-1">{title}</h1>
                    <p className="text-sm text-gray-600 mb-6">
                        Sign in to your account or create a new one.
                    </p>
                    {children}
                </div>
            </div>
        </div>
    );
}