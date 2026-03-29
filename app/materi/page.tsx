import ProgramHeader from "@/components/program/ProgramHeader";
import BangunDatar from "@/components/program/BangunDatar";
import BangunRuang from "@/components/program/BangunRuang";
import FungsiKuadrat from "@/components/program/FungsiKuadrat";
import PersamaanGaris from "@/components/program/PersamaanGaris";
import Statistika from "@/components/program/Statistika";
import DanLainnya from "@/components/program/DanLainnya";
export default function Program (){
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