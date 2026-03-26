"use client";

import HomeSatu from "@/components/home/HomeSatu";
import ProgramKu from "@/components/home/ProgramKu";
import Perjalananku from "@/components/home/PerjalananKu";
import AreaBelajar from "@/components/home/AreaBelajar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 via-green-100 via-blue-100 to-purple-100">
      <HomeSatu />
      <ProgramKu />
      <Perjalananku />
      <AreaBelajar />
    </div>
  );
}
