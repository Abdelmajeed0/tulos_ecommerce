"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { CATEGORIES_QUIERYResult } from "@/sanity.types";
import UnderLineSpan from "./UnderLineSpan";

function HeaderMenue({ categories }: { categories: CATEGORIES_QUIERYResult }) {
  const pathname = usePathname();

  return (
    <div className="hidden md:inline-flex w-1/3 whitespace-nowrap items-center gap-5 text-sm capitalize font-semibold ">
      <Link
        href={"/"}
        className={`hover:text-[##151515] hoverEffect relative group ${
          pathname === "/" && "text-[#52525b]"
        }`}
      >
        Home
        <UnderLineSpan path="/" />
      </Link>
      {categories?.map((category) => {
        return (
          <Link
            key={category?._id}
            href={`/category/${category?.slug?.current}`}
            className={`hover:text-[##151515] hoverEffect relative group ${
              pathname === category?.slug?.current && "text-[#52525b]"
            }`}
          >
            {category?.title}

            <UnderLineSpan path={`/category/${category?.slug?.current}`} />
          </Link>
        );
      })}
    </div>
  );
}

export default HeaderMenue;
