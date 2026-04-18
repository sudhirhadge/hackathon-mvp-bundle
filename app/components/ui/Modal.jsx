// components/ui/Modal.jsx
"use client";

import { useEffect } from "react";

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleBackdropClick}
        >
            <div
                className="max-w-md w-full rounded-lg bg-white p-5 shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
}