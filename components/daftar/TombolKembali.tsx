"use client";

import { useRouter } from "next/navigation";

export default function TombolKembali() {
    const router = useRouter();
    return (
        <div className="m-5 flex items-center justify-center">
            <button
                onClick={() => router.push("/daftar")}
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
                Kembali
            </button>
        </div>
    );
}