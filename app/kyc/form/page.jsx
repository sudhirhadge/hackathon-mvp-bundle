// app/kyc/form/page.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";    



export default function KYCForm() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    country: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    console.log("Input changed:", e); // Debug log
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send to backend or store in state
    const urlParams = new URLSearchParams(formData).toString();
    window.location.href = `/kyc/documents?${urlParams}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <h2 className="text-xl font-bold mb-6 text-white">Personal Details</h2>
        <form onSubmit={handleSubmit}>
          <Input
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            label="Date of Birth"
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            required
          />
          <Input
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
          <Input
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <Input
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="flex justify-between mt-6">
            <Link href="/kyc" className="text-indigo-400 text-sm hover:underline">
              Back
            </Link>
            <Button type="submit">
              Next → Upload ID
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}