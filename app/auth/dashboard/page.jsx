// app/auth/dashboard/page.jsx
"use client";

import Link from "next/link";
import { mockIsLoggedIn, mockGetUser, mockLogout } from "../../lib/mockAuth";

export default function DashboardPage() {
    const user = mockGetUser();
    const isLoggedIn = mockIsLoggedIn();

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-white mb-4">
                        You need to log in first.
                    </p>
                    <Link href="/auth" className="text-indigo-400 underline">
                        Go to Login
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen px-4 py-6 text-white">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-2">
                    Welcome back, {user.name}
                </h1>
                <p className="text-sm text-gray-300 mb-6">
                    This is your protected dashboard.
                </p>

                <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 shadow">
                    <h2 className="text-lg font-medium text-white mb-4">
                        Dashboard Content
                    </h2>
                    <p className="text-sm text-gray-300">
                        Here you can show user‑specific data, transactions, support cases, etc.
                    </p>
                </div>

                <div className="mt-6">
                    <button
                        onClick={() => {
                            mockLogout();
                            // For demo: just reload to show “not logged in”
                            window.location.href = "/auth";
                        }}
                        className="text-sm text-red-400 hover:underline"
                    >
                        Log out
                    </button>
                </div>
            </div>
        </div>
    );
}