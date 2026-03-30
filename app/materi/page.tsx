import ProgramHeader from "@/components/materi/ProgramHeader";
import BangunDatar from "@/components/materi/BangunDatar";
import BangunRuang from "@/components/materi/BangunRuang";
import FungsiKuadrat from "@/components/materi/FungsiKuadrat";
import PersamaanGaris from "@/components/materi/PersamaanGaris";
import Statistika from "@/components/materi/Statistika";
import DanLainnya from "@/components/materi/DanLainnya";
export default function Materi (){
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 via-green-100 via-blue-100 to-purple-100">
            <ProgramHeader />
            <BangunDatar />
            <BangunRuang />
            <FungsiKuadrat />
            <PersamaanGaris />
            <Statistika />
            <DanLainnya />
        </div>
    );
}