import { cn } from "@/lib/utils";
import PriceFormater from "./PriceFormater";

interface Porps {
  price: number | undefined;
  discount: number | undefined;
  className?: string;
}

function PriceView({ price, discount, className }: Porps) {
  return (
    <div className="flex items-center gap-2 text-2xl">
      <PriceFormater amount={price} className={className} />
      {price && discount && (
        <PriceFormater
          className={cn("line-through font-medium text-zinc-500", className)}
          amount={price + (discount * price) / 100}
        />
      )}
    </div>
  );
}

export default PriceView;
