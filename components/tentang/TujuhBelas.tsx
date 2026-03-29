import { GraduationCap } from "lucide-react";

const Awalmulai = [
    { perjalanan: "sudah 3 tahun berjalan menjadi guru les, saya mendapat pengalaman juga dengan menjadi guru PPL sekolah di smp negeri daerah sewon" },
    { perjalanan: "ooo iyaa di tahun ini juga saya juga bergabung dengan salah satu bimbel cukup terkenal didaerah bantul"},
    { perjalanan: "di tahun ini juga saya mendapat pengalaman untuk dipercaya orang tua untuk jadi murid les private, ada yang kelas 2 smp, 3 smp, ada juga yang kelas 2 SD"},
    { perjalanan: "dari sini saya belajar untuk mengembangkan diri dan cara melakukan pembahasan materi yang lebih efisien dan menarik"}
];

export default function TujuhBelas() {
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
                    2017
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