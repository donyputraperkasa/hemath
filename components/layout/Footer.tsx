export default function Footer() {
    return (
        <footer className="bg-[#2b2b2b] text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            
                {/* Layanan */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Layanan</h3>
                    <ul className="space-y-2">
                        <li>Les Privat one-on-one</li>
                        <li>Les Privat Group</li>
                        <li>Tanya PR</li>
                        <li>Latihan ujian</li>
                        <li>Pendalaman Materi</li>
                    </ul>
                </div>

                {/* Fasilitas */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Fasilitas</h3>
                    <ul className="space-y-2">
                        <li>Fleksibel</li>
                        <li>Tanya soal via WA</li>
                        <li>Les Datang ke Rumah</li>
                        <li>Les di Kafe</li>
                    </ul>
                </div>

                {/* Hubungi */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Hubungi</h3>
                    <div className="text-sm space-y-1 leading-relaxed">
                        <p>WA: 082236343404</p>
                        <p>Email: donyputraperkasa@gmail.com</p>
                        <p>Kasihan, Bantul 55181</p>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-600 mx-6" />

            {/* Bottom */}
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-sm gap-3">
                <p className="text-center sm:text-left">© 2026 HE-MATH - All rights reserved.</p>
            </div>
        </footer>
    );
}