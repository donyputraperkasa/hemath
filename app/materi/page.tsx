import ProgramHeader from "@/components/program/ProgramHeader";
import BangunDatar from "@/components/program/BangunDatar";
import BangunRuang from "@/components/program/BangunRuang";
import FungsiKuadrat from "@/components/program/FungsiKuadrat";
import PersamaanGaris from "@/components/program/PersamaanGaris";
import Statistika from "@/components/program/Statistika";
import DanLainnya from "@/components/program/DanLainnya";
export default function Program (){
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-sky-100 via-emerald-100 to-teal-200">
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