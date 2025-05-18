import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import PriceView from "./PriceView";
import { AddToCartButton } from "./AddToCartButton";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group text-sm rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 overflow-hidden relative">
        {product?.images && (
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={urlFor(product?.images[0]).url()}
              width={500}
              height={500}
              alt="product image"
              priority
              className={`w-full h-72 object-contain overflow-hidden  hovereffect ${product?.stock !== 0 && "group-hover:scale-105"}`}
            />
          </Link>
        )}
        {product?.stock === 0 && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex flex-col items-center justify-center">
            <p className="text-xl text-white font-semibold text-center">
              Out of Stock
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col py-3 px-2 gap-1.5 bg-zinc-50 border border-t-0 rounded-lg rounded-tl-none rounded-tr-none">
        <h2 className="line-clamp-1 font-semibold">{product?.name}</h2>
        <p>{product?.intro}</p>

        <PriceView
          className="text-lg"
          price={product?.price}
          discount={product?.discount}
        />

        <AddToCartButton product={product} />
      </div>
    </div>
  );
}

export default ProductCard;
