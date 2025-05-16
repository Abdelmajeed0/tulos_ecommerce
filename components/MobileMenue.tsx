"use client";
import { useState } from "react";
import { AlignLeft } from "lucide-react";
import Sidebar from "./Sidebar";

function MobileMenue() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <AlignLeft className="md:hidden hover:text-[##151515] transition-all duration-300 cursor-pointer" />
      </button>
      <div className="md:hidden">
        <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </>
  );
}

export default MobileMenue;
