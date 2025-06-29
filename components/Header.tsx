import Link from "next/link";

import Logo from "./Logo";
import HeaderMenue from "./HeaderMenue";
import Container from "./Container";
import MobileMenue from "./MobileMenue";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import { auth, currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

import { ListOrdered } from "lucide-react";
import { getAllCategories, getMyOrders } from "@/sanity/helpers/queries";

async function Header() {
  const user = await currentUser();
  const { userId } = await auth();
  const categories = await getAllCategories();
  let orders = null;
  if (userId) {
    orders = await getMyOrders(userId);
  }

  return (
    <header className=" border-b border-gray-400 py-5 sticky top-0 z-50 bg-white">
      <Container className="flex justify-between items-center gap-7 text-[#52525b]">
        <HeaderMenue categories={categories} />
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
                  {orders?.length ? orders.length : 0}
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
