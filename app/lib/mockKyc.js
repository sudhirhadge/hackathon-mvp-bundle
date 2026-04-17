// lib/mockKyc.js

/**
 * Simulate KYC result from formData.
 * Returns { status, reason }
 */
export function simulateKyc(formData) {
  const statuses = ["Approved", "Pending", "Rejected"];
  const status = statuses[Math.floor(Math.random() * statuses.length)];

  let reason = "KYC completed successfully.";
  if (status === "Pending") {
    reason = "Verification is in progress. Please check back later.";
  } else if (status === "Rejected") {
    reason = "ID does not meet our requirements. Please upload a valid ID.";
  }

  return {
    status,
    reason,
  };
}