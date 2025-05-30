"use client";

import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
} from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";

interface Props {
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
}
function ImageView({ images = [] }: Props) {
  const [activeImage, setActiveImage] = useState(images[0]);
  return (
    <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
      <AnimatePresence mode="wait">
        <motion.div
          // we give it a key so when ever the key changes it trigers the animation again
          key={activeImage?._key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-h-[550px] min-h-[450px] border border-[#151515]/10 rounded-md group overflow-hidden"
        >
          <Image
            src={urlFor(activeImage).url()}
            alt="Product Image"
            width={700}
            height={700}
            priority
            className="w-full h-[96px] max-h-[550px] min-h-[500px] object-contain group-hover:scale-110 hovereffect rounded-md"
          />
        </motion.div>
      </AnimatePresence>
      <div className="grid grid-cols-6 gap-2 h-20 md:h-28">
        {images?.map((image, i) => (
          <button
            className={`border rounded-md overflow-hidden ${activeImage?._key === image?._key ? "ring-1 ring-[#151515]" : ""}`}
            onClick={() => setActiveImage(images[i])}
            key={image._key}
          >
            <Image
              src={urlFor(image).url()}
              alt="Product Image"
              width={100}
              height={100}
              priority
              className="w-full h-auto object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImageView;
