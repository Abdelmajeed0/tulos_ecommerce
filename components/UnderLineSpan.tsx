"use client";
import { usePathname } from "next/navigation";

const UnderLineSpan = ({ path }: { path: string | undefined }) => {
  const pathname = usePathname();
  return (
    <>
      <span
        className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-[#151515] transition-all duration-300 group-hover:w-1/2 group-hover:left-0 ${
          pathname === path && "w-1/2"
        }`}
      />
      <span
        className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-[#151515] transition-all duration-300 group-hover:w-1/2 group-hover:right-0 ${
          pathname === path && "w-1/2"
        }`}
      />
    </>
  );
};

export default UnderLineSpan;
