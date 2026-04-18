// app/auth/register/page.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import AuthLayout from "../../components/AuthLayout";
import { mockRegister, mockLogin } from "../../lib/mockAuth";

export default function RegisterPage() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const res = mockRegister(form.email, form.password, form.name);

        if (res.success) {
            setError("");
            // Optionally auto‑login after register
            mockLogin(form.email, form.password);
            // Demo: just show “registered” in UI
        } else {
            setError(res.error);
        }
    };

    return (
        <AuthLayout title="Create Account">
            <form onSubmit={handleSubmit}>
                <Input
                    label="Full Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
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
                        href="/auth"
                        className="text-sm text-indigo-600 hover:underline"
                    >
                        Already have an account? Sign in
                    </Link>
                    <Button type="submit">Create Account</Button>
                </div>
            </form>
        </AuthLayout>
    );
}