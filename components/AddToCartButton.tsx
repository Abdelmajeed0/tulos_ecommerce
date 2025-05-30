import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import { Button } from "./ui/button";
import QuantityButtons from "./QuantityButtons";
import PriceFormater from "./PriceFormater";

interface Props {
  product: Product;
  className?: string;
}

export const AddToCartButton = ({ product, className }: Props) => {
  const isOutOfStock = product?.stock === 0;
  const itemCount = 0;
  return (
    <div className="w-full">
      {itemCount ? (
        <div className="w-full flex flex-col text-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-muted-foreground">
              Quantity
            </span>
            <QuantityButtons product={product} />
          </div>
          <div className="flex items-center justify-between border-t pt-1">
            <span className="text-sm font-semibold">Subtotal</span>
            <PriceFormater
              amount={product?.price ? product?.price * itemCount : 0}
            />
          </div>
        </div>
      ) : (
        <Button
          disabled={isOutOfStock}
          className={cn(
            `w-full bg-transparent text-[#151515] shadow-none border border-[#151515]/30 font-semibold tracking-wide hover:text-white hovereffect`,
            className
          )}
        >
          Add to Cart
        </Button>
      )}
    </div>
  );
};
