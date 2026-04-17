// app/kyc/page.jsx
import Link from "next/link";

export default function KYCLanding() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-white">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-3">
          Digital KYC Onboarding
        </h1>
        <p className="text-sm mb-8 text-gray-200">
          Fill in your details, upload ID, and get your KYC status instantly.
        </p>
        <Link
          href="/kyc/form"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium"
        >
          Start KYC
        </Link>
      </div>
    </div>
  );
}