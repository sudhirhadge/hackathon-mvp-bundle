// lib/mockDashboard.js

export function getKpis(filter = "today") {
    const base = {
        revenue: 45000,
        newUsers: 128,
        pendingTasks: 27,
    };

    // Slightly change values per period for demo
    if (filter === "this_week") {
        return {
            revenue: 210000,
            newUsers: 612,
            pendingTasks: 141,
        };
    }
    if (filter === "this_month") {
        return {
            revenue: 780000,
            newUsers: 2150,
            pendingTasks: 492,
        };
    }

    return base;
}

export function getRecentMetrics(filter = "today") {
    const mockRows = [
        { id: "1", metric: "Revenue", value: 45000, status: "up" },
        { id: "2", metric: "New Users", value: 128, status: "up" },
        { id: "3", metric: "Pending Tasks", value: 27, status: "down" },
        { id: "4", metric: "Avg. Session", value: 3.2, status: "up" },
    ];

    return mockRows;
}