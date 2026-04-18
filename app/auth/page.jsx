// app/auth/page.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import AuthLayout from "../components/AuthLayout";
import { mockLogin, mockIsLoggedIn } from "../lib/mockAuth";

export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const res = mockLogin(form.email, form.password);

        if (res.success) {
            setError("");
            // In real app, you’d set auth state / redirect
            // For demo: just show “logged in” in UI
        } else {
            setError(res.error);
        }
    };

    // Pretend redirect when already “logged in”
    if (mockIsLoggedIn()) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-xl font-bold text-white">
                        You are already logged in.
                    </h1>
                    <Link href="/auth/dashboard" className="text-indigo-400 underline">
                        Go to Dashboard
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <AuthLayout title="Login">
            <form onSubmit={handleSubmit}>
                <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <Input
                    label="Password"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />

                {error && (
                    <p className="text-sm text-red-500 mb-4">{error}</p>
                )}

                <div className="flex justify-between">
                    <Link
                        href="/auth/register"
                        className="text-sm text-indigo-600 hover:underline"
                    >
                        Don’t have an account? Register
                    </Link>
                    <Button type="submit">Sign in</Button>
                </div>
            </form>
        </AuthLayout>
    );
}