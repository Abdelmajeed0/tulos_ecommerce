import Cart from "@/components/Cart";

export const metadata = {
  title: "My Cart | Tulos",
  description: "Check your cart and proceed to checkout",
  alternates: {
    canonical: "/cart",
  },
};

function page() {
  return <Cart />;
}

export default page;
