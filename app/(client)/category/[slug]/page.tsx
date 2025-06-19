export const metadata = {
  title: "Categories | Tulos",
  description: "Different categories and styles you can see and explore",
  alternates: {
    canonical: "/cart",
  },
};

import CategoryProducts from "@/components/CategoryProducts";
import Container from "@/components/Container";

import { getAllCategories } from "@/sanity/helpers/queries";

async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categories = await getAllCategories();

  return (
    <Container className="py-10">
      <CategoryProducts categories={categories} slug={slug} />
    </Container>
  );
}

export default CategoryPage;
