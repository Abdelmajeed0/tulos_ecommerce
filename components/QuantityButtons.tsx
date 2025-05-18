import { Product } from "@/sanity.types";
import { Plus, Minus } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
  className?: string;
}

function QuantityButtons({ product, className }: Props) {
  const itemCount = 10;
  return (
    <div className={cn("flex items-center gap-1 text-base pb-1", className)}>
      <Button variant="outline" size="icon" className="w-6 h-6">
        <Minus />
      </Button>
      <span className="font-semibold w-8 text-center text-[#151515]">
        {itemCount}
      </span>
      <Button variant="outline" size="icon" className="w-6 h-6">
        <Plus />
      </Button>
    </div>
  );
}

export default QuantityButtons;
