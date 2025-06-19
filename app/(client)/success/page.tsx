import Success from "@/components/Success";

export const metadata = {
  title: "Order Successful | Tulos",
  description:
    "Thank you for your order! Your purchase was completed successfully.",
  alternates: {
    canonical: "/success",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const SuccessPage = () => {
  <Success />;
};

export default SuccessPage;
