"use client";

import { GraduationCap, Calendar } from "lucide-react";

const Timeline = [
    { 
        tahun: "2014", 
        deskripsi: "Mulai menjadi guru private ketika sudah memasuki awal masuk kuliah",
    },
    { 
        tahun: "2015", 
        deskripsi: "Mengikuti UKM Pengabdian Masyarakat menjadi pembimbing belajar di pinggiran Kali Code",
    },
    { 
        tahun: "2017", 
        deskripsi: "Menjadi tentor Matematika di salah satu bimbel di Bantul dan menjalani PPL di SMP Negeri Bantul",
    },
    { 
        tahun: "2022", 
        deskripsi: "Fokus mengajar persiapan masuk perguruan tinggi di bimbel",
    },
    { 
        tahun: "2023", 
        deskripsi: "Bergabung dengan Yayasan BOPKRI Yogyakarta di bidang pendidikan",
    },
];

export default function PerjalananKu() {
    return (
        <section className="py-16 text-center">
            {/* Header */}
            <div className="mb-10 px-4">
                <div className="flex justify-center mb-3">
                    <GraduationCap className="text-yellow-400" size={45} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Perjalanan saya menjadi seorang guru Private Matematika
                </h2>
                <p className="text-gray-500 mt-2 max-w-2xl mx-auto leading-relaxed">
                    Perjalanan ini dimulai dari satu tujuan sederhana: membantu siswa memahami matematika tanpa rasa takut
                </p>
            </div>

            {/* Card Timeline */}
            <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-8">
                {Timeline.map((item, index) => (
                <div key={index} className="flex flex-col items-center w-full max-w-md">

                {/* Card */}
                    <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-yellow-100 w-full">
                        <div className="flex items-center gap-3 mb-3 justify-center">
                        <div className="bg-yellow-100 p-2 rounded-full">
                            <Calendar className="text-yellow-600" size={18} />
                        </div>
                        <span className="text-yellow-600 font-semibold">
                            {item.tahun}
                        </span>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed text-center">
                        {item.deskripsi}
                        </p>
                    </div>

                    {/* Line Connector */}
                    {index !== Timeline.length - 1 && (
                        <div className="w-1 h-10 bg-yellow-300 my-2 rounded-full"></div>
                    )}

                </div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center px-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Jadilah bagian dari perjalanan saya dalam membantu siswa memahami matematika
                </h3>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md transition">
                    Daftar Sekarang
                </button>
            </div>
        </section>
    );
}