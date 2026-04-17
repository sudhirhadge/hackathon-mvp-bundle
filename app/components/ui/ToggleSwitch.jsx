// components/ui/ToggleSwitch.jsx
"use client";

import { useState } from "react";

export default function ToggleSwitch({ checked, onChange }) {
    const id = "switch-" + Math.random().toString(36).slice(2);

    return (
        <div className="inline-flex items-center">
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={(e) => onChange?.(e.target.checked)}
                className="sr-only"
            />
            <label
                htmlFor={id}
                className={`relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full ${checked ? "bg-indigo-600" : "bg-gray-700"
                    }`}
            >
                <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${checked ? "translate-x-5" : "translate-x-0.5"
                        }`}
                />
            </label>
        </div>
    );
}