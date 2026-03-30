import TentangHeader from "@/components/tentang/TentangHeader";
import EmpatBelas from "@/components/tentang/EmpatBelas";
import TujuhBelas from "@/components/tentang/TujuhBelas";
import DuaPuluh from "@/components/tentang/DuaPuluh";
import DuaPuluhDua from "@/components/tentang/DuaPuluhDua";
import Sekarang from "@/components/tentang/Sekarang";

export default function Tentang() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 via-green-100 via-blue-100 to-purple-100">
            <TentangHeader />
            <EmpatBelas />
            <TujuhBelas />
            <DuaPuluh />
            <DuaPuluhDua />
            <Sekarang />
        </div>
    );
}