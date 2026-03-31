import DaftarHeader from "@/components/daftar/DaftarHeader";
import Option from "@/components/daftar/Option";

export default function Daftar (){
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 via-green-100 via-blue-100 to-purple-100">
            <DaftarHeader />
            <Option />
        </div>
    )
}