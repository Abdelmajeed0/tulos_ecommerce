"use client";
import emptyCart from "@/images/emptyCart.png";
import Image from "next/image";
import { motion } from "motion/react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

function EmptyCart() {
  return (
    <div className="py-10 md:py-20 bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-md p-8 max-w-md w-full space-y-8"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="w-48 h-48 mx-auto relative"
        >
          <Image
            src={emptyCart}
            alt="Empty Cart Image"
            className="drop-shadow-lg object-contain"
          />
          <motion.div
            animate={{ x: [0, 10, -10, 0], y: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute -top-4 -right-4 bg-blue-500 rounded-full p-2"
          >
            <ShoppingCart size={24} className="text-white" />
          </motion.div>
        </motion.div>
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">
            Your cart is feeling lonely
          </h2>
          <p className="text-gray-600">
            It looks like you haven&apos;t added anything to your cart yet.
            Let&apos;s change that and find some amazing products for you!
          </p>
          <Link
            className="bg-gray-900/5 block border border-gray-800/20 text-center py-2.5 rounded-full text-sm font-semibold tracking-wide hover:border-gray-800 hover:bg-gray-800 hover:text-white hovereffect"
            href={"/"}
          >
            Discover Products
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default EmptyCart;
