"use client";

import { BarChart3 } from "lucide-react";

const StatistikaProblem = [
    { Kesulitan: "rata-rata" },
    { Kesulitan: "mencari nilai tengah" },
    { Kesulitan: "rata-rata gabungan" },
    { Kesulitan: "rumus rata-rata" },
    { Kesulitan: "rata-rata dengan tambahan data" },
    { Kesulitan: "rata-rata dengan kurangan data" },
    { Kesulitan: "nilai modus data" },
    { Kesulitan: "nilai tengah data dari gabungan data" },
];

export default function Statistika() {
    return (
        <section className="py-16 text-center">
            {/* Header */}
            <div className="mb-10 px-4">
                <div className="flex justify-center mb-3">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100">
                        <BarChart3 className="text-indigo-500" size={28} />
                    </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                    Statistika
                </h2>
            </div>

            {/* Grid */}
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
                {StatistikaProblem.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={`group w-full rounded-xl px-4 py-5 flex flex-col items-center justify-center text-center gap-2 shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl bg-white`}
                        >
                        <p className="text-m font-semibold text-gray-700">{item.Kesulitan}</p>
                    </div>
                );
                })}
            </div>
        </section>
    );
}