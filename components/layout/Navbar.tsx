"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, BookOpen, Layers, Info, User, ClipboardList, Sigma } from "lucide-react";
import { useState } from "react";
import Modal from "@/components/ui/Modal";

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isActive = (path: string) =>
        pathname === path ? "text-white font-semibold bg-indigo-700" : "text-indigo-700 font-semibold";

    return (
        <header className="w-full bg-white/80 backdrop-blur shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                
                {/* Logo */}
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 transition group-hover:scale-110">
                        <Sigma className="text-indigo-600" size={20} />
                    </div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent transition group-hover:opacity-80">
                        HE-MATH
                    </h1>
                </div>

                {/* Menu */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className={`flex items-center gap-2 px-2 py-1 rounded-md transition hover:bg-indigo-50 hover:text-indigo-600 ${isActive("/")}`}>
                        <Home size={18} /> Home
                    </Link>
                    <Link href="/materi" className={`flex items-center gap-2 px-2 py-1 rounded-md transition hover:bg-indigo-50 hover:text-indigo-600 ${isActive("/materi")}`}>
                        <BookOpen size={18} /> Materi
                    </Link>
                    <Link href="/layanan" className={`flex items-center gap-2 px-2 py-1 rounded-md transition hover:bg-indigo-50 hover:text-indigo-600 ${isActive("/layanan")}`}>
                        <Layers size={18} /> Layanan
                    </Link>
                    <Link href="/tentang" className={`flex items-center gap-2 px-2 py-1 rounded-md transition hover:bg-indigo-50 hover:text-indigo-600 ${isActive("/tentang")}`}>
                        <Info size={18} /> Tentang
                    </Link>
                    <Link href="/profile" className={`flex items-center gap-2 px-2 py-1 rounded-md transition hover:bg-indigo-50 hover:text-indigo-600 ${isActive("/profile")}`}>
                        <User size={18} /> Profile
                    </Link>
                    <Link href="/daftar" className={`flex items-center gap-2 px-2 py-1 rounded-md transition hover:bg-indigo-50 hover:text-indigo-600 ${isActive("/daftar")}`}>
                        <ClipboardList size={18} /> Daftar
                    </Link>
                </nav>

                {/* CTA */}
                <div className="hidden md:flex items-center">
                    <Link
                        href="https://portofolio-ku-gold.vercel.app"
                        target="_blank"
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-5 py-2 rounded-xl font-medium transition shadow-md hover:shadow-lg"
                    >
                        portofolio
                    </Link>
                </div>

                {/* Mobile Right Actions */}
                <div className="md:hidden flex items-center gap-3">
                    <button onClick={() => setOpen(!open)} className="p-2 rounded-lg hover:bg-indigo-50 transition">
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <Modal open={open} onClose={() => setOpen(false)} title="Menu">
                <div className="flex flex-col gap-4 justify-center h-full">
                    <Link href="/" onClick={() => setOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition hover:bg-indigo-50 hover:text-indigo-600 ${isActive("/")}`}>
                        <Home size={18} /> Home
                    </Link>
                    <Link href="/materi" onClick={() => setOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition hover:bg-indigo-50 hover:text-indigo-600 ${isActive("/materi")}`}>
                        <BookOpen size={18} /> Materi
                    </Link>
                    <Link href="/layanan" onClick={() => setOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition hover:bg-indigo-50 hover:text-indigo-600 ${isActive("/layanan")}`}>
                        <Layers size={18} /> Layanan
                    </Link>
                    <Link href="/tentang" onClick={() => setOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition hover:bg-indigo-50 hover:text-indigo-600 ${isActive("/tentang")}`}>
                        <Info size={18} /> Tentang
                    </Link>
                    <Link href="/profile" onClick={() => setOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition hover:bg-indigo-50 hover:text-indigo-600 ${isActive("/profile")}`}>
                        <User size={18} /> Profile
                    </Link>
                    <Link href="/daftar" onClick={() => setOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition hover:bg-indigo-50 hover:text-indigo-600 ${isActive("/daftar")}`}>
                        <ClipboardList size={18} /> Daftar
                    </Link>

                    <Link
                        href="https://portofolio-ku-gold.vercel.app"
                        target="_blank"
                        className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-3 rounded-xl font-medium transition text-center"
                    >
                        portofolio
                    </Link>
                </div>
            </Modal>
        </header>
    );
}