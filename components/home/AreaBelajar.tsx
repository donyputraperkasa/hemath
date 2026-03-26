import { MapPin, Globe } from "lucide-react";

const areas = [
    {
        title: "Coffee Shop Area Yogyakarta",
        desc: "CnB Demangan, Couve jalan ahmad dahlan, Tomoro jalan taman siswa",
        icon: MapPin,
    },
    {
        title: "Coffee Shop Area Bantul",
        desc: "Tomoro jalan parangtritis, Mantra Bumi sebelah samsat sewon, Kohi COffee, Toska kopi selatan perempatan palbapang",
        icon: MapPin,
    },
    {
        title: "Datang ke Rumah",
        desc: "Untuk layanan ini, Anda dapat langsung datang ke rumah sesuai dengan jadwal yang sudah ditentukan. Kami juga menyediakan jadwal yang fleksibel sesuai dengan kebutuhan Anda.",
        icon: MapPin,
    },
];

export default function AreaBelajar() {
    return (
        <section className="py-16">
            {/* Header */}
            <div className="text-center mb-12 px-4">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                    Area Belajar Less Private
                </h2>
                <p className="text-gray-500 mt-3 max-w-2xl mx-auto leading-relaxed">
                    Siap datang ke tempat sesuai dengan kesepakatan bersama, maupun bisa datang kerumah
                </p>
            </div>

            {/* Cards */}
            <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {areas.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                    >
                        {/* Header Card */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-teal-100 p-3 rounded-full">
                                <Icon className="text-teal-600" size={20} />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                {item.title}
                            </h3>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                );
                })}
            </div>
        </section>
    );
}