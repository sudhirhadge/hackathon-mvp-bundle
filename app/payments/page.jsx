// app/payments/page.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import FilterBar from "../components/FilterBar";
import TransactionList from "../components/TransactionList";
import { getTransactions } from "../lib/mockPayments"

export default function PaymentsDashboard() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(getTransactions(activeFilter));
    }, [activeFilter]);

    return (
        <div className="min-h-screen px-4 py-6">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <h1 className="text-2xl font-bold text-white">Payments Dashboard</h1>
                    <Link href="/payments/add">
                        <Button className="mt-3 md:mt-0">
                            Add Transaction
                        </Button>
                    </Link>
                </div>

                <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

                <Card>
                    <h2 className="text-lg font-medium text-white mb-4">
                        Recent Transactions
                    </h2>
                    <TransactionList transactions={data} />
                </Card>
            </div>
        </div>
    );
}