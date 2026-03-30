import { Smile } from "lucide-react";


export default function ProfileHeader() {
    return (
        <section className="bg-white/40 py-24 text-center relative">
            <div className="absolute bottom-0 left-0 w-full h-1" />
            <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-gradient-to-br from-indigo-100 via-purple-100 to-teal-100 shadow-md">
                    <Smile className="text-indigo-600" size={36} />
                </div>
            </div>
            <h1 className="p-8 w-full border-l-[32px] border-r-[32px] border-transparent text-3xl md:text-4xl font-semibold tracking-wide bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
                latar belakang saya
            </h1>
        </section>
    );
}
