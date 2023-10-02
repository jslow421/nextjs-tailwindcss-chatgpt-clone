"use client";
import Chat from "@/components/Chat";
import MobileSidebar from "@/components/MobileSidebar";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  const toggleComponentVisibility = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  return (
    <main className="overflow-hidden w-full h-screen relative flex">
      {isComponentVisible ? (
        <MobileSidebar toggleComponentVisibility={toggleComponentVisibility} />
      ) : null}
      <div className="dark hidden flex-shrink-0 bg-caylent-blue md:flex md:w-[260px] md:flex-col">
        <div className="flex h-full min-h-0 flex-col ">
          <Sidebar />
        </div>
      </div>
      <Chat toggleComponentVisibility={toggleComponentVisibility} />
    </main>
  );
}
