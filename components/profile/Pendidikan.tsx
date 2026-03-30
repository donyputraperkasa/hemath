import React from 'react';
import { GraduationCap, BookOpen, Code } from 'lucide-react';

const pendidikan = [
    {
        title: 'Matematika',
        icon: GraduationCap,
        description:
        "Lulus dengan skripsi berjudul 'Magic Edge Labeling of Cycle Graphs' menggunakan bahasa pemrograman MATLAB.",
    },
    {
        title: 'Program Profesi Guru',
        icon: BookOpen,
        description:
        'Lulus dengan komitmen kuat terhadap nilai-nilai pendidikan yang selaras dengan prinsip pembelajaran modern.',
    },
    {
        title: 'Software Engineering',
        icon: Code,
        description:
        'Dilatih sebagai full-stack developer menggunakan Next.js, NestJS, Prisma, dan PostgreSQL.',
    },
];

export default function Pendidikan() {
    return (
        <div className="max-w-4xl mx-auto p-4 flex flex-col gap-6">
            {/* Title */}
            <div className="text-center mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-indigo-600">
                    Pendidikan
                </h2>
                <div className="w-16 h-1 bg-indigo-500 mx-auto mt-2 rounded-full"></div>
            </div>
            {pendidikan.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-start gap-4 p-5 rounded-2xl bg-white/80 shadow-md hover:scale-105 transition duration-300"
                    >
                        {/* Badge / Title */}
                        <div className="min-w-[160px] flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                                <item.icon size={20} />
                            </div>
                            <div className="bg-indigo-100 text-indigo-600 font-semibold text-m px-3 py-1.5 rounded-lg">
                                {item.title}
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
