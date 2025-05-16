import { FC } from "react";
import { motion } from "motion/react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { headerData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 bg-[#151515]/50 shadow-xl hovereffect cursor-auto w-full ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <motion.div
        ref={sidebarRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="min-w-72 max-w-92 bg-[#151515] text-white/70 h-full p-10 border-r-white flex flex-col gap-6"
      >
        <div className="flex items-center justify-between">
          <button onClick={onClose}>
            <Logo className="text-white">Tulos</Logo>
          </button>
          <button onClick={onClose} className="hover:text-red-500 hovereffect">
            <X className="w-7 h-7" />
          </button>
        </div>
        <div className="flex flex-col items-start gap-3.5 justify-center text-base font-semibold tracking-wide">
          {headerData?.map((link) => {
            return (
              <Link
                onClick={onClose}
                className={`hover:text-white hovereffect ${
                  pathname === link?.href && "text-white"
                }`}
                key={link?.title}
                href={link?.href}
              >
                {link?.title}
              </Link>
            );
          })}
        </div>
        <SocialMedia />
      </motion.div>
    </div>
  );
};

export default Sidebar;
