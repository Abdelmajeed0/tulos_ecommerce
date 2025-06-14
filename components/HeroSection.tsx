"use client";
import { motion } from "motion/react";

import Image from "next/image";
import heroImage from "@/public/hero.png";

function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-20 md:mb-24 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Discover Your Signature Style,
            <span className="text-orange-600">
              every thing you need in one place
            </span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to <strong>Tulos</strong>, where fashion meets
            individuality. Explore our handpicked selection of trendy clothing
            for men and women, plus must-have accessories to complete every
            look.
          </p>
        </div>
        <div className="relative aspect-square w-full h-auto">
          <Image
            src={heroImage}
            alt="Woman and man receiving stylish clothing delivery"
            fill
            className="object-contain rounded-lg"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}

export default HeroSection;
