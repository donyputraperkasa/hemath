import { GraduationCap } from "lucide-react";

const Awalmulai = [
    { perjalanan: "tahun 2022 ini saya bergabung ke salah satu bimbel di bantul yang khusus untuk persiapan masuk perguruan tinggi seperti STAN, STIS, dan sebagainya" },
    { perjalanan: "ditahun ini saya selain menjadi tentor di bimbel tersebut, saya juga tetap menjadi guru private sendiri seperti yang sudah saya lakukan sebelumnya" },
    { perjalanan: "di tahun ini juga saya diajak berkolaborasi dengan rekan untuk menjadi tentor di sebuah bimbel rumah di daerah bantul juga"},
    { perjalanan: "jadi ditahun ini saya menjadi guru private, tentor di bimbel resmi, dan menjadi kolaborator di bimbel rumah di daerah bantul"}
];

export default function DuaPuluhDua() {
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
                    2022
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