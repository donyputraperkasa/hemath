import ProfileHeader from "@/components/profile/ProfileHeader";
import Pendidikan from "@/components/profile/Pendidikan";
import Skills from "@/components/profile/Skills";

export default function Profile() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 via-green-100 via-blue-100 to-purple-100">
            <ProfileHeader />
            <Pendidikan />
            <Skills />
        </div>
    );
}