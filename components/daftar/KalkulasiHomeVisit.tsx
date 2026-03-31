"use client";

import { useState } from "react";

export default function KalkulasiHomeVisit() {
    const [jenjang, setJenjang] = useState("smp");
    const [kelompok, setKelompok] = useState(1);
    const [pertemuan, setPertemuan] = useState(1);

    const harga: Record<string, number> = {
        sd: 35000,
        smp: 60000,
        sma: 85000,
    };

    const total = (harga[jenjang] || 0) * kelompok * pertemuan;

    return (
        <div className="max-w-4xl mx-auto py-14 px-6">
            <h1 className="text-5xl font-extrabold text-center text-teal-700 mb-10 tracking-tight">
                Home Visit Kalkulasi
            </h1>

            <div className="space-y-8">
                {/* Jenjang */}
                <div>
                    <label className="block text-base font-semibold text-gray-700 mb-2">
                        Jenjang
                    </label>
                    <select
                        value={jenjang}
                        onChange={(e) => setJenjang(e.target.value)}
                        className="w-full border-2 border-teal-400 rounded-xl p-4 text-lg bg-white/70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-teal-300 transition min-h-[52px]"
                    >
                        <option value="sd">SD</option>
                        <option value="smp">SMP</option>
                        <option value="sma">SMA</option>
                    </select>
                </div>

                {/* Kelompok */}
                <div>
                    <label className="block text-base font-semibold text-gray-700 mb-2">
                        Jumlah Siswa
                    </label>
                    <select
                        value={kelompok}
                        onChange={(e) => setKelompok(Number(e.target.value))}
                        className="w-full border-2 border-teal-400 rounded-xl p-4 text-lg bg-white/70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-teal-300 transition min-h-[52px]"
                    >
                        {[1, 2, 3, 4].map((item) => (
                        <option key={item} value={item}>
                            {item} Orang
                        </option>
                        ))}
                    </select>
                </div>

                {/* Pertemuan */}
                <div>
                    <label className="block text-base font-semibold text-gray-700 mb-2">
                        Jumlah Pertemuan
                    </label>
                    <select
                        value={pertemuan}
                        onChange={(e) => setPertemuan(Number(e.target.value))}
                        className="w-full border-2 border-teal-400 rounded-xl p-4 text-lg bg-white/70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-teal-300 transition min-h-[52px]"
                    >
                        {[1, 2, 4, 8, 12].map((item) => (
                        <option key={item} value={item}>
                            {item} Pertemuan
                        </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Divider */}
            <div className="my-12 border-t border-gray-300" />

            {/* Result */}
            <div className="text-center">
                <p className="text-gray-600 text-lg mb-2">Total Biaya</p>
                <h2 className="text-4xl font-extrabold text-purple-800 tracking-tight">
                    Rp {total.toLocaleString("id-ID")}
                </h2>

                <a
                    href={`https://wa.me/6282236343404?text=${encodeURIComponent(
                        `Halo, saya ingin daftar les Home Visit.
                        Jenjang: ${jenjang.toUpperCase()}
                        Jumlah Siswa: ${kelompok} orang
                        Jumlah Pertemuan: ${pertemuan}

                        Total Biaya: Rp ${total.toLocaleString("id-ID")}`
                    )}`}

                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-8 bg-yellow-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-800 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
                >
                    Lanjutkan ke Pendaftaran
                </a>
            </div>
        </div>
    );
}
