import { Metadata } from "next";
import { AddToCartButton } from "@/components/AddToCartButton";
import Container from "@/components/Container";
import ImageView from "@/components/ImageView";
import PriceView from "@/components/PriceView";
import ProductCharactristics from "@/components/ProductCharactristics";
import { getProductBySlug } from "@/sanity/helpers/queries";
import { Heart } from "lucide-react";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const slug = (await params).slug;

  return {
    title: `Product ${slug}`,
  };
};
async function SingleProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    return notFound();
  }

  return (
    <Container className="py-10 flex flex-col md:flex-row gap-10">
      {/* left side */}
      {product?.images && <ImageView images={product?.images} />}

      {/* Right side */}
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            {product?.name}
          </h2>
          <PriceView
            price={product?.price}
            discount={product?.discount}
            className="text-lg font-bold"
          />
        </div>
        {product?.stock && (
          <p className="bg-green-100 w-24 text-center text-green-600 text-sm py-2.5 font-semibold rounded-lg">
            In Stock
          </p>
        )}
        <p className="text-gray-600 tracking-wide text-sm">
          {product?.description}
        </p>
        <div className="flex items-center gap-2.5 lg:gap-5 w-full">
          <AddToCartButton
            product={product}
            className="bg-[#151515]/80 w-full text-white hover:bg-[#151515] hovereffect"
          />
          <button className="border-2 border-[#151515]/30 text-[#151515]/60 px-2.5 py-1.5 rounded-md hover:text-[#151515] hover:border-[#151515] hovereffect">
            <Heart className="w-5 h-5" />
          </button>
        </div>
        <ProductCharactristics product={product} />
        <div className="flex flex-wrap  gap-5 items-center">
          <div className="border border-[#6c7fd8]/20 text-center p-3 rounded-md hover:border-[#6c7fd8] hovereffect">
            <p className="text-base font-semibold text-gray-800">
              Free Shipping
            </p>
            <p className="text-sm text-gray-500">
              Free shipping over order $120
            </p>
          </div>
          <div className="border border-[#6c7fd8]/20 text-center p-3 rounded-md hover:border-[#6c7fd8] hovereffect">
            <p className="text-base font-semibold text-gray-800">
              Flexible Payment
            </p>
            <p className="text-sm text-gray-500">
              Pay with Multiple Credit Cards
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SingleProductPage;
