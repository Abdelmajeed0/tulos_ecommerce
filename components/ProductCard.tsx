import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group text-sm rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 overflow-hidden">
        {product?.images && (
          <Link href={"/product"}>
            <Image
              src={urlFor(product?.images[0]).url()}
              width={500}
              height={500}
              alt="product image"
              priority
              className={`w-full h-72 object-contain overflow-hidden group-hover:scale-105 hovereffect`}
            />
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
