"use client";

import Link from "next/link";
import { MapPin, Coffee } from "lucide-react";

export default function Option() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Home Visit */}
                <Link href="/daftar/homevisit">
                    <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-white/40 group relative overflow-hidden">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-teal-200/20 to-transparent"></div>
                        <div className="flex justify-center mb-5">
                            <div className="p-4 rounded-full bg-teal-100/60 group-hover:scale-110 transition">
                                <MapPin className="w-11 h-11 text-teal-600" />
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold tracking-tight text-teal-800 mb-2">
                            Home Visit
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed px-6">
                            Tidak perlu repot repot keluar rumah untuk belajar, nanti guru yang akan datang langsung ke rumah kamu, hehehe
                        </p>

                        <p className="text-sm font-medium mt-10 inline-block px-4 py-2 rounded-full bg-gray-100 group-hover:bg-gray-900 group-hover:text-white transition">
                            Lihat Detail →
                        </p>
                    </div>
                </Link>

                {/* Coffee Shop */}
                <Link href="/daftar/coffeeshop">
                    <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-white/40 group relative overflow-hidden">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-orange-200/20 to-transparent"></div>
                        <div className="flex justify-center mb-5">
                            <div className="p-4 rounded-full bg-orange-100/60 group-hover:scale-110 transition">
                                <Coffee className="w-11 h-11 text-orange-500" />
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold tracking-tight text-orange-600 mb-2">
                            Coffee Shop
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed px-6">
                            Upgrade cara belajarmu! Diskusi seru dan santai di coffee shop biar belajar terasa lebih menyenangkan
                        </p>

                        <p className="text-sm font-medium mt-10 inline-block px-4 py-2 rounded-full bg-gray-100 group-hover:bg-gray-900 group-hover:text-white transition">
                            Lihat Detail →
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}