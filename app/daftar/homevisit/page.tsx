import HomeVisitHeader from "@/components/daftar/HomeVisitHeader";
import KalkulasiHomeVisit from "@/components/daftar/KalkulasiHomeVisit";
import TombolKembali from "@/components/daftar/TombolKembali";

export default function HomeVisit (){
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 via-green-100 via-blue-100 to-purple-100">
            <HomeVisitHeader />
            <KalkulasiHomeVisit />
            <TombolKembali />
        </div>
    )
}