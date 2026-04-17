// app/dashboards/page.jsx
"use client";

import { useState } from "react";
import { getKpis, getRecentMetrics } from "../lib/mockDashboard";
import KpiCard from "../components/KpiCard";
import Card from "../components/ui/Card";
import DataGrid from "../components/DataGrid";

export default function DashboardPage() {
    const [filter, setFilter] = useState("today");

    const kpis = getKpis(filter);
    const rows = getRecentMetrics(filter);

    return (
        <div className="min-h-screen px-4 py-6 bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold text-white mb-4">
                    Business Visibility Dashboard
                </h1>

                {/* Filter bar */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {[
                        { key: "today", label: "Today" },
                        { key: "this_week", label: "This Week" },
                        { key: "this_month", label: "This Month" },
                    ].map((f) => (
                        <button
                            key={f.key}
                            onClick={() => setFilter(f.key)}
                            className={`px-3 py-1 rounded text-sm font-medium ${filter === f.key
                                ? "bg-indigo-600 text-white"
                                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                {/* KPI row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <KpiCard label="Revenue" value={kpis.revenue} change={+12} />
                    <KpiCard label="New Users" value={kpis.newUsers} change={+8} />
                    <KpiCard label="Pending Tasks" value={kpis.pendingTasks} change={-5} />
                </div>

                {/* Recent metrics grid */}
                <Card>
                    <h2 className="text-lg font-medium text-white mb-3">
                        Recent Metrics
                    </h2>
                    <DataGrid rows={rows} />
                </Card>
            </div>
        </div>
    );
}