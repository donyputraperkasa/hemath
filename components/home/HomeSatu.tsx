"use client";

import { GraduationCap } from "lucide-react";

export default function HomeSatu() {
    return (
        <section className="bg-yellow-50 py-24 text-center text-white relative">
        
            {/* Accent bottom line (senada dengan button) */}
            <div className="absolute bottom-0 left-0 w-full h-1" />

            {/* Icon */}
            <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-white/10 backdrop-blur">
                    <GraduationCap className="text-yellow-800" size={36} />
                </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-semibold tracking-wide text-yellow-800">
                Selamat Datang
            </h1>

        </section>
    );
}
