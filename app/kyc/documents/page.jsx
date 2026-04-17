// app/kyc/documents/page.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Card from "../../components/ui/Card";
import FileUpload from "../../components/ui/FileUpload";
import Button from "../../components/ui/Button";    

export default function KYCDocuments() {
  const [idFront, setIdFront] = useState(null);
  const [idBack, setIdBack] = useState(null);
  const [formData, setFormData] = useState({});

  // Pull form data from URL params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const data = {};
    for (let [key, value] of params) {
      data[key] = value;
    }
    setFormData(data);
  }, []);

  const handleSubmit = () => {
    // In real app: send to backend
    // For demo: go to status page with same data
    const params = new URLSearchParams(formData).toString();
    window.location.href = `/kyc/status?${params}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-lg">
        <h2 className="text-xl font-bold mb-6 text-white">Upload ID</h2>
        <p className="text-sm text-gray-300 mb-6">
          Capture clear images of your ID card’s front and back.
        </p>

        <FileUpload
          label="ID Front"
          onChange={setIdFront}
        />
        <FileUpload
          label="ID Back"
          onChange={setIdBack}
        />

        <div className="flex justify-between mt-6">
          <Link
            href={`/kyc/form?${new URLSearchParams(formData).toString()}`}
            className="text-indigo-400 text-sm hover:underline"
          >
            Back
          </Link>
          <Button onClick={handleSubmit} disabled={!idFront || !idBack}>
            Submit for KYC
          </Button>
        </div>
      </Card>
    </div>
  );
}