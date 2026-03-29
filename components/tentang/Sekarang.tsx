import { GraduationCap } from "lucide-react";

const Awalmulai = [
    { perjalanan: "di tahun 2023 saya bergabung dengan Yayasan BOPKRI Yogyakarta di bidang pendidikan, dan saya akan menjalani pendidikan di Yayasan tersebut" },
    { perjalanan: "di beberapa tahun ini ini pula saya mengembangkan skill saya menjadi guru profesional dan menjadi seorang software engineering"},
    { perjalanan: "selain itu saya juga menjadi seorang guru matematika di daerah wates kulonprogo"},
    { perjalanan: "selain guru dan guru les private, saya juga sedang membangun diri saya menjadi seorang programer untuk menambah skill saya diluar guru"},
    { perjalanan: "hingga 2026 ini, saya masih menjadi guru les private, dan salah satunya ada yang dari sejak kelas 2 sd"},
    { perjalanan: "kalo dihitung hitung sih cukup banyak mantan murid less ku sampai hari ini, pokoknya senang bisa membantu belajar"}
];

export default function Sekarang() {
    return (
        <section className="py-16 text-center">
            {/* Header */}
            <div className="mb-10 px-4">
                <div className="flex justify-center mb-3">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-purple-100">
                        <GraduationCap className="text-indigo-600" size={28} />
                    </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
                    2023 - sekarang
                </h2>
            </div>

            {/* Grid */}
            <div className="max-w-6xl mx-auto px-4 gap-3 grid place-items-center">
                {Awalmulai.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={`group w-full rounded-xl px-4 py-5 flex flex-col items-center justify-center text-center gap-5 shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl bg-white `}
                        >
                        <p className="text-m font-semibold text-gray-700">{item.perjalanan}</p>
                    </div>
                );
                })}
            </div>
        </section>
    );
}