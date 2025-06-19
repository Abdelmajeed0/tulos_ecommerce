import { categoriesData, quickLinksData } from "@/constants";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
function Footer() {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b">
          <div className="space-y-4">
            <Logo>Tulos</Logo>
            <p className="text-gray-600 text-sm">
              Discover curated furniture collections at Tulos, blending style
              and comfort to elevate your living spaces.
            </p>
            <SocialMedia
              className="text-[#151515]/60"
              iconClassName="border-[#151515]/60 hover:border-[#151515] hover:text-[#151515]"
              tooltipClassName="bg-[#151515] text-white"
            />
          </div>
          <div>
            <h3 className="font-semibold text-md text-gray-900 mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              {quickLinksData?.map((item) => (
                <Link
                  className="text-gray-600 hover:text-gray-800 text-sm font-medium hovereffect"
                  key={item?.title}
                  href={item?.href}
                >
                  {item?.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-md text-gray-900 mb-4">
              Categories
            </h3>
            <div className="flex flex-col gap-3">
              {categoriesData?.map((item) => (
                <Link
                  className="text-gray-600 hover:text-gray-800 text-sm font-medium hovereffect"
                  key={item?.title}
                  href={`/category${item?.href}`}
                >
                  {item?.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-md text-gray-900 mb-4">
              Newsletter
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter to receive updates and exclusive
              offers.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <Button
                type="submit"
                className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
