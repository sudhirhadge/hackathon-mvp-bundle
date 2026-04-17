// components/ui/FileUpload.jsx
"use client";

import { useState } from "react";

export default function FileUpload({ label, onChange, value }) {
  const [preview, setPreview] = useState(value);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      // Pass file to parent
      onChange?.(file);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-200 mb-1">
        {label}
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-300
          file:mr-4 file:py-2 file:px-4
          file:rounded-lg file:border-0
          file:bg-indigo-600 file:text-white"
      />
      {preview && (
        <div className="mt-3">
          <img
            src={preview}
            alt="Preview"
            className="max-h-32 rounded object-cover"
          />
        </div>
      )}
    </div>
  );
}