import Link from "next/link";

import Logo from "./Logo";
import HeaderMenue from "./HeaderMenue";
import Container from "./Container";
import MobileMenue from "./MobileMenue";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

import { ListOrdered } from "lucide-react";

async function Header() {
  const user = await currentUser();
  console.log("user", user);
  return (
    <header className=" border-b border-gray-400 py-5">
      <Container className="flex justify-between items-center gap-7 text-[#52525b]">
        <HeaderMenue />
        <div className="w-auto md:w-1/3 flex justify-center items-center gap-2.5">
          <MobileMenue />
          <Logo className="text">Tulos</Logo>
        </div>

        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <ClerkLoaded>
            <SignedIn>
              <Link href={"/orders"} className="group relative">
                <ListOrdered className="w-5 h-5 group-hover:text-[#151515] hovereffect" />

                <span className="absolute -top-1 -right-1 bg-[#151515] text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
                  5
                </span>
              </Link>

              <UserButton />
            </SignedIn>
            {!user && (
              <SignInButton mode="modal">
                <button className="text-sm font-semibold hover:text-[#151515] hovereffect">
                  Login
                </button>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
}

export default Header;
