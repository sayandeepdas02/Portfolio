"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function VisitorCounter() {
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        // Increment visitor count on mount
        fetch("/api/visit", { method: "POST" })
            .then((res) => res.json())
            .then((data) => setCount(data.count))
            .catch((err) => console.error("Failed to fetch visitor count:", err));
    }, []);

    if (count === null) {
        return null; // Don't show until loaded
    }

    return (
        <section className="py-8">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
                <div className="text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-xs text-gray-400"
                    >
                        You are the{" "}
                        <span className="font-mono font-semibold text-gray-600">
                            {count.toLocaleString()}
                        </span>
                        {" "}visitor
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
