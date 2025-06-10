"use client";
import { CATEGORIES_QUIERYResult, Product } from "@/sanity.types";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import NoProductAvailable from "./NoProductsAvilable";
import ProductCard from "./ProductCard";
import { Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Title from "./Title";

interface Props {
  categories: CATEGORIES_QUIERYResult;
  slug: string;
}

const CategoryProducts = ({ categories, slug }: Props) => {
  const [currentSlug, setCurrentSlug] = useState(slug);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (categorySlug: string) => {
    try {
      setLoading(true);
      const query = `
        *[_type == 'product' && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(name asc)
      `;

      const data = await client.fetch(query, { categorySlug });
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentSlug);
  }, [currentSlug]);

  return (
    <>
      <Title className="text-xl">
        Products by Category{" "}
        <span className="font-bold text-green-600 capitalize tracking-wide">
          {currentSlug && currentSlug}
        </span>
      </Title>
      <div className="py-5 flex flex-col md:flex-row items-start gap-5">
        <div className="flex flex-col md:min-w-40 border">
          {categories?.map((item) => (
            <Button
              onClick={() => setCurrentSlug(item?.slug?.current as string)}
              className={`bg-transparent border-0 rounded-none text-gray-900 shadow-none hover:bg-gray-900/80 hover:text-white hovereffect font-semibold border-b last:border-b-0 ${item?.slug?.current === currentSlug && "bg-gray-900 text-white border-gray-900"}`}
              key={item?._id}
            >
              {item?.title}
            </Button>
          ))}
        </div>
        <div className="w-full">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full">
              <motion.div className="flex items-center space-x-2 text-blue-600">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Product is loading...</span>
              </motion.div>
            </div>
          ) : products?.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
              <>
                {products?.map((product: Product) => (
                  <AnimatePresence key={product?._id}>
                    <motion.div
                      layout
                      initial={{ opacity: 0.2 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <ProductCard key={product?._id} product={product} />
                    </motion.div>
                  </AnimatePresence>
                ))}
              </>
            </div>
          ) : (
            <NoProductAvailable
              selectedTab={currentSlug}
              className="mt-0 w-full"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryProducts;
