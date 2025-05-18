import { cn } from "@/lib/utils";

interface Props {
  amount: number | undefined;
  className?: string;
}

function PriceFormater({ amount, className }: Props) {
  const formattedPrice = new Number(amount).toLocaleString("en-US", {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 2,
  });
  return (
    <span className={cn("text-sm font-semibold text-[#151515]", className)}>
      {formattedPrice}
    </span>
  );
}

export default PriceFormater;
