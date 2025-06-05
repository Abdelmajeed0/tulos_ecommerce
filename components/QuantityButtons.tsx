import { Product } from "@/sanity.types";
import { Plus, Minus } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import useCartStore from "@/store";

interface Props {
  product: Product;
  className?: string;
}

function QuantityButtons({ product, className }: Props) {
  const { addItem, getItemCount, removeItem } = useCartStore();
  const itemCount = getItemCount(product?._id);
  const isOutOfStock = product?.stock === 0;
  return (
    <div className={cn("flex items-center gap-1 text-base pb-1", className)}>
      <Button
        disabled={itemCount === 0 || isOutOfStock}
        onClick={() => {
          removeItem(product?._id);
          if (itemCount > 1) {
            toast.success(`Quantity decreased successfully!`);
          } else {
            toast.success(
              `${product?.name?.substring(0, 12)}... removed successfully!`
            );
          }
        }}
        variant="outline"
        size="icon"
        className="w-6 h-6"
      >
        <Minus />
      </Button>
      <span className="font-semibold w-8 text-center text-[#151515]">
        {itemCount}
      </span>
      <Button
        disabled={isOutOfStock}
        onClick={() => {
          addItem(product);
          toast.success(
            `${product?.name?.substring(0, 12)}... added successfully!`
          );
        }}
        variant="outline"
        size="icon"
        className="w-6 h-6"
      >
        <Plus />
      </Button>
    </div>
  );
}

export default QuantityButtons;
