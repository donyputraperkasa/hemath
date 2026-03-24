"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;
    return (
        <nav className="flex gap-4">
            <Link href="/" className={isActive("/") ? "text-blue-500" : ""}>Home</Link>
            <Link href="/tentang" className={isActive("/tentang") ? "text-blue-500" : ""}>tentang</Link>
            <Link href="/daftar" className={isActive("/daftar") ? "text-blue-500" : ""}>daftar</Link>
            <Link href="/profile" className={isActive("/profile") ? "text-blue-500" : ""}>profile</Link>
            <Link href="/program" className={isActive("/program") ? "text-blue-500" : ""}>program</Link>
        </nav>
    );
}