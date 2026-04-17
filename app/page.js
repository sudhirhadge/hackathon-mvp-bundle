import Link from "next/link";
import React from "react";

const Section = ({ title, children }) => (
  <div style={{ marginBottom: "24px" }}>
    <h2 style={{ color: "#2c3e50" }}>{title}</h2>
    <div style={{ paddingLeft: "10px" }}>{children}</div>
  </div>
);

const List = ({ items }) => (
  <ul>
    {items.map((item, i) => (
      <li key={i} style={{ marginBottom: "6px" }}>
        {item}
      </li>
    ))}
  </ul>
);

const Home = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <div className="bg-blue-100 text-black p-2 mb-4 text-left font-bold text-xl mb-8 px-2">
        <Link href="/payments" className="hover:underline p-2">
          View Payments Dashboard
        </Link>
        <Link href="/kyc/form" className="hover:underline">
          Start KYC Flow
        </Link>
        <Link href="/dashboards" className="hover:underline p-2">
          View Business Dashboard
        </Link>
      </div>
      <h1>Hackathon Notes (Fintech / Banking)</h1>
      <Section title="Expect Questions">
        <List
          items={[
            "Product understanding",
            "UX thinking",
            "Technical choices",
            "Edge cases",
          ]}
        />
      </Section>

      <Section title="What Interviewers Care About">
        <List
          items={[
            "Workflow clarity",
            "Role-based access",
            "Validation",
            "Responsiveness",
            "Security-focused UI decisions",
          ]}
        />
      </Section>

      <Section title="Problem Statements (Think Screens & Use Cases)">
        <List
          items={[
            "Card dashboard / controls",
            "Transaction dispute",
            "Quick onboarding for new users",
            "Secure payment initiation flow",
            "Transaction insights dashboard",
            "Service request & issue tracking",
            "KYC upload & tracking",
            "Relationship manager view",
          ]}
        />
      </Section>

      <Section title="How to Respond to a Feature">
        <List
          items={[
            "Problem statement",
            "Scope (users, roles, flows, data, priorities)",
            "Clarifying questions + out of scope",
            "Assumptions",
            "MVP expectations & success metrics",
            "React architecture / component plan",
          ]}
        />
      </Section>

      <Section title="Approach Framework">
        <p>
          <b>Understand → Reduce → Design → Build → Demo</b>
        </p>
      </Section>

      <Section title="Example Feature: Dispute Failed Payment">
        <List
          items={[
            "User sees transactions list",
            "Identifies failed/disputed transaction",
            "Fills dispute form",
            "Uploads evidence",
            "Tracks status/progress",
          ]}
        />
      </Section>

      <Section title="Define MVP">
        <List
          items={[
            "One main flow",
            "Dashboard + summary page",
            "Validation",
            "Loading & error states",
            "Confirmation page",
          ]}
        />
      </Section>

      <Section title="Architecture Plan">
        <List
          items={[
            "Create pages for important routes",
            "Follow a feature-based folder structure",
            "API Layer → add headers, bearer token, services (error handling, request abort, parallel calls)",
            "Data Layer → custom hooks + state management",
            "Container & Presentation component separation",
            "Global + component-level error/loading boundaries",
            "Utils, mocks, and types setup",
            "Shared features and reusable components (forms, modals, lists, inputs, status/progress indicators)",
            "Keep design secure and scalable from the start",
          ]}
        />
      </Section>

      <Section title="UX Principles">
        <List
          items={[
            "Accessibility",
            "Minimal clutter, strong hierarchy",
            "Responsive design",
            "Clear labels",
            "Trust signals (status, timestamps)",
          ]}
        />
      </Section>

      <Section title="How to Say Out Loud (While Coding Process)">
        <List
          items={[
            "First, I will restate the problem statement to confirm my understanding",
            "Then, I will identify the primary user and focus on the minimum critical flow",
            "For this hackathon, I will prioritize building one polished end-to-end journey with a proper confirmation at the end",
            "While developing, I will handle loading states, error scenarios, and basic security so the demo feels production-ready",
            "I will structure the code in a modular and scalable way so it can be extended later",
            "For edge cases, I will consider invalid inputs, failed API calls, duplicate actions, and missing data scenarios",
          ]}
        />
      </Section>

      <Section title="Common Interview Questions">
        <List
          items={[
            "How do you hide sensitive data?",
            "How do you confirm actions before submission?",
            "How do you handle roles & permissions?",
            "How do you show audit/history?",
            "How do you prevent duplicate requests?",
          ]}
        />
      </Section>

      <Section title="Demo Strategy">
        <List
          items={[
            "Start with the problem statement",
            "Explain what I built and why it matters",
            "Walk through the complete user flow step by step",
            "Highlight how the solution is secure and scalable",
            "Explain key technical decisions briefly",
            "End with what I would improve next if given more time",
          ]}
        />
      </Section>

      <Section title="Golden Rules">
        <List
          items={[
            "Prefer clean UX over many features",
            "Focus on complete flow",
            "Always have something demo-ready",
          ]}
        />
      </Section>

      <Section title="Execution Order">
        <List
          items={[
            "Build static UI",
            "Add mock data / APIs",
            "Add loading & error states",
            "Add functionality + UX polish",
            "Add security validations",
            "Improve scalability",
          ]}
        />
      </Section>
    </div>
  );
};

export default Home;