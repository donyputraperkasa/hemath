"use client";

import { GraduationCap, Calculator, Ruler, BarChart3, Sigma, FunctionSquare, Triangle, Box, Variable, Scale, Sparkles } from "lucide-react";

const programs = [
    { title: "Luas & Keliling", icon: Ruler },
    { title: "Persamaan Garis", icon: FunctionSquare },
    { title: "Pola Bilangan", icon: Sigma },
    { title: "Volume Bangun Ruang", icon: Box },
    { title: "Rata-Rata & Statistik", icon: BarChart3 },
    { title: "Fungsi Linear", icon: Calculator },
    { title: "Segitiga", icon: Triangle },
    { title: "Aljabar", icon: Variable },
    { title: "Perbandingan", icon: Scale },
    { title: "Dan Lainnya", icon: Sparkles },
];

export default function ProgramKu() {
    return (
        <section className="py-16 text-center">
            {/* Header */}
            <div className="mb-10 px-4">
                <div className="flex justify-center mb-3">
                    <GraduationCap className="text-yellow-400" size={45} />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-yellow-800">
                    Apasih yang biasanya jadi kesulitan
                </h2>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                    Dijenjang sekolah biasnya yang menjadi kesulitsan seorang siswa dalam belajar matematika itu meliputi
                </p>
            </div>

            {/* Grid */}
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {programs.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div
                        key={index}
                        className="group rounded-xl p-4 flex flex-col items-center justify-center gap-2 shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl bg-white"
                        >
                        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-3 rounded-full transition-all duration-300 group-hover:scale-110">
                            <Icon size={20} className="text-indigo-600" />
                        </div>
                        <p className="text-sm font-semibold tracking-wide text-gray-800">{item.title}</p>
                    </div>
                );
                })}
            </div>
        </section>
    );
}