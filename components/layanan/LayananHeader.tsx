import { BookOpenText } from "lucide-react";


export default function LayananHeader() {
    return (
        <section className="bg-white/40 py-24 text-center relative">
            <div className="absolute bottom-0 left-0 w-full h-1" />
            <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-gradient-to-br from-indigo-100 to-teal-100 shadow-md">
                    <BookOpenText className="text-indigo-600" size={36} />
                </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-wide text-slate-800">
                Belajar bisa dimana ajha lohhh 😁
            </h1>
        </section>
    );
}
