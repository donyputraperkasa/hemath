import { Code2, Sigma } from "lucide-react";

const skills = [
    {
        title: "Software Engineering",
        icon: Code2,
        items: [
            "Next.js",
            "NestJS",
            "Prisma ORM",
            "MySQL",
            "TypeScript",
            "TailwindCSS",
            "REST API",
        ],
    },
    {
        title: "Mathematics",
        icon: Sigma,
        items: [
            "Algebra",
            "Geometry",
            "Trigonometry",
            "Calculus",
            "Problem Solving",
        ],
    },
];

export default function Skills() {
    return (
        <section className="py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Title */}
            <div className="text-center mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-indigo-600">
                    Skills
                </h2>
                <div className="w-16 h-1 bg-indigo-500 mx-auto mt-2 rounded-full"></div>
            </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {skills.map((group, index) => {
                    const Icon = group.icon;
                    return (
                    <div
                        key={index}
                        className="rounded-2xl p-6 md:p-7 bg-white/80 backdrop-blur-md border border-white/80 shadow-lg hover:scale-105 transition duration-300"
                    >
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="text-indigo-600">
                                <Icon size={22} />
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold text-indigo-600">
                                {group.title}
                            </h3>
                        </div>

                        {/* List */}
                        <div className="flex flex-col">
                            {group.items.map((item, i) => (
                                <div key={i}>
                                <p className="text-sm md:text-base text-gray-800 py-3">
                                    {item}
                                </p>
                                {i !== group.items.length - 1 && (
                                    <div className="h-px bg-white/10" />
                                )}
                                </div>
                            ))}
                        </div>
                    </div>
                    );
                })}
                </div>
            </div>
        </section>
    );
}