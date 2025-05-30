import { Product } from "@/sanity.types";
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "./ui/accordion";

const ProductCharactristics = ({ product }: { product: Product }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{product?.name}: Charactristics</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-1">
          <p className="flex justify-between items-center">
            Brand: <span className="font-semibold tracking-wide">Unknown</span>
          </p>
          <p className="flex justify-between items-center">
            Collection:{" "}
            <span className="font-semibold tracking-wide">
              {new Date().getFullYear()}
            </span>
          </p>
          <p className="flex justify-between items-center">
            Type:{" "}
            <span className="font-semibold tracking-wide">
              {product?.variant}
            </span>
          </p>
          <p className="flex justify-between items-center">
            Stock:{" "}
            <span className="font-semibold tracking-wide">
              {product?.stock ? "Avilabele" : "Out of stock"}
            </span>
          </p>
          <p className="flex justify-between items-center">
            Variant:{" "}
            <span className="font-semibold tracking-wide">
              {product?.intro}
            </span>
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductCharactristics;
