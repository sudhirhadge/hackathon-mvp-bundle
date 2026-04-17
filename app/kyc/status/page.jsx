// app/kyc/status/page.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import StatusCard from "../../components/ui/StatusCard";

export default function KYCStatus() {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const data = {};
    for (let [key, value] of params) {
      data[key] = value;
    }
    setFormData(data);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-white">
      <div className="w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-6">
          KYC Verification Result
        </h2>
        <StatusCard formData={formData} />
        <div className="mt-8 space-x-4">
          <Link href="/kyc/form" className="text-sm text-indigo-400 hover:underline">
            Start new onboarding
          </Link>
        </div>
      </div>
    </div>
  );
}