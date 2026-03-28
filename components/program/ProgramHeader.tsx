"use client";

import { Calculator } from "lucide-react";

export default function ProgramHeader() {
    return (
        <section className="bg-white/40 py-24 text-center relative">
            <div className="absolute bottom-0 left-0 w-full h-1" />
            <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-gradient-to-br from-indigo-100 to-teal-100 shadow-md">
                    <Calculator className="text-indigo-600" size={36} />
                </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-wide text-slate-800">
                Kita Mau Belajar Apa Nih Sama MasDon 😁
            </h1>
        </section>
    );
}
