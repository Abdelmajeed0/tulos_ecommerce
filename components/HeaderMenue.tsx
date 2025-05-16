"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { headerData } from "@/constants";

function HeaderMenue() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-5 text-sm capitalize font-semibold ">
      {headerData?.map((link) => {
        return (
          <Link
            className={`hover:text-[##151515] hoverEffect relative group ${
              pathname === link?.href && "text-[#52525b]"
            }`}
            key={link?.title}
            href={link?.href}
          >
            {link?.title}

            <span
              className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-[#151515] transition-all duration-300 group-hover:w-1/2 group-hover:left-0 ${
                pathname === link?.href && "w-1/2"
              }`}
            />
            <span
              className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-[#151515] transition-all duration-300 group-hover:w-1/2 group-hover:right-0 ${
                pathname === link?.href && "w-1/2"
              }`}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default HeaderMenue;
