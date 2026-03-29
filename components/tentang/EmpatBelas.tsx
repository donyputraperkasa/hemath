import { GraduationCap } from "lucide-react";

const Awalmulai = [
    { perjalanan: "setelah lulus sekolah 2014, saya memutuskan untuk iseng membuka jasa les private sendiri, jaman dulu bikin story pake BBM" },
    { perjalanan: "waktu itu yang jadi murid les pertama ku adek kelas beserta temen temen nya, kemudian ada yang dari sekolah lain juga" },
    { perjalanan: "waktu itu untuk les private nya cuma sistem COD di tempat umum, dan sering cuman sekedar tanya pr/tugas" },
    { perjalanan: "mulai dari sini saya mulai memberanikan diri untuk membuka les private sendiri berbekal pengetahuan yang agak terbatas" },

];

export default function EmpatBelas() {
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
                    2014
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