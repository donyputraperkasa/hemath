import LayananHeader from "@/components/layanan/LayananHeader";
import HomeVisitLearning from "@/components/layanan/HomeVisitLearning";
import CoffeeShopLearning from "@/components/layanan/CoffeeShopLearning";
import ChatTanyaJawab from "@/components/layanan/ChatTanyaJawab";

export default function Layanan (){
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 via-green-100 via-blue-100 to-purple-100">
            <LayananHeader />
            <HomeVisitLearning />
            <CoffeeShopLearning />
            <ChatTanyaJawab />
        </div>
    );
}