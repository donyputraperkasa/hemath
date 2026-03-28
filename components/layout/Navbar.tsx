"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, BookOpen, Layers, Info, User, ClipboardList } from "lucide-react";
import { useState } from "react";
import Modal from "@/components/ui/Modal";

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isActive = (path: string) =>
        pathname === path ? "text-yellow-700 font-semibold border-b-2 border-yellow-700" : "text-gray-700";

    return (
        <header className="w-full bg-white/80 backdrop-blur shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Logo" className="w-8 h-8" />
                    <h1 className="text-2xl font-bold">HE-MATH</h1>
                </div>

                {/* Menu */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className={`flex items-center gap-2 px-2 py-1 rounded-md transition hover:bg-gray-100 ${isActive("/")}`}>
                        <Home size={18} /> Home
                    </Link>
                    <Link href="/materi" className={`flex items-center gap-2 px-2 py-1 rounded-md transition hover:bg-gray-100 ${isActive("/materi")}`}>
                        <BookOpen size={18} /> Materi
                    </Link>
                    <Link href="/layanan" className={`flex items-center gap-2 px-2 py-1 rounded-md transition hover:bg-gray-100 ${isActive("/layanan")}`}>
                        <Layers size={18} /> Layanan
                    </Link>
                    <Link href="/tentang" className={`flex items-center gap-2 px-2 py-1 rounded-md transition hover:bg-gray-100 ${isActive("/tentang")}`}>
                        <Info size={18} /> Tentang
                    </Link>
                    <Link href="/profile" className={`flex items-center gap-2 px-2 py-1 rounded-md transition hover:bg-gray-100 ${isActive("/profile")}`}>
                        <User size={18} /> Profile
                    </Link>
                    <Link href="/daftar" className={`flex items-center gap-2 px-2 py-1 rounded-md transition hover:bg-gray-100 ${isActive("/daftar")}`}>
                        <ClipboardList size={18} /> Daftar
                    </Link>
                </nav>

                {/* CTA */}
                <div className="hidden md:flex items-center">
                    <Link
                        href="https://portofolio-ku-gold.vercel.app"
                        target="_blank"
                        className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-xl font-medium transition"
                    >
                        portofolio
                    </Link>
                </div>

                {/* Mobile Right Actions */}
                <div className="md:hidden flex items-center gap-3">
                    <button onClick={() => setOpen(!open)}>
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <Modal open={open} onClose={() => setOpen(false)} title="Menu">
                <div className="flex flex-col gap-4 justify-center h-full">
                    <Link href="/" onClick={() => setOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition hover:bg-gray-100 ${isActive("/")}`}>
                        <Home size={18} /> Home
                    </Link>
                    <Link href="/materi" onClick={() => setOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition hover:bg-gray-100 ${isActive("/materi")}`}>
                        <BookOpen size={18} /> Materi
                    </Link>
                    <Link href="/layanan" onClick={() => setOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition hover:bg-gray-100 ${isActive("/layanan")}`}>
                        <Layers size={18} /> Layanan
                    </Link>
                    <Link href="/tentang" onClick={() => setOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition hover:bg-gray-100 ${isActive("/tentang")}`}>
                        <Info size={18} /> Tentang
                    </Link>
                    <Link href="/profile" onClick={() => setOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition hover:bg-gray-100 ${isActive("/profile")}`}>
                        <User size={18} /> Profile
                    </Link>
                    <Link href="/daftar" onClick={() => setOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition hover:bg-gray-100 ${isActive("/daftar")}`}>
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