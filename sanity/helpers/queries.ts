import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";

// to do create queries
export const getProductBySlug = async (slug: string) => {
  const PRODUCT_BY_SLUG_QUIERY = defineQuery(
    `*[_type == 'product' && slug.current == $slug] | order(name asc) [0]`
  );

  try {
    const product = await sanityFetch({
      query: PRODUCT_BY_SLUG_QUIERY,
      params: {
        slug,
      },
    });

    return product?.data || null;
  } catch (error) {
    console.log("Error fetching product by slug", error);
  }
};
