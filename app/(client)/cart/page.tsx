"use client";

import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
import Container from "@/components/Container";
import NoAccessToCart from "@/components/NoAccessToCart";
import useCartStore from "@/store";
import EmptyCart from "@/components/EmptyCart";
import { Heart, ShoppingBag, Trash } from "lucide-react";
import Title from "@/components/Title";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import toast from "react-hot-toast";
import PriceFormater from "@/components/PriceFormater";
import QuantityButtons from "@/components/QuantityButtons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  createCheckoutSession,
  Metadata,
} from "@/actions/createCheckoutSession";

function CartPage() {
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    deleteCartProduct,
    getTotalPrice,
    getItemCount,
    getSubTotalPrice,
    resetCart,
    getGroupedItems,
  } = useCartStore();
  const { user } = useUser();
  const { isSignedIn } = useAuth();
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loading />;
  }

  const cartProducts = getGroupedItems();

  const handleDeleteProduct = (id: string) => {
    deleteCartProduct(id);
    toast.success(`Product Deleted Succesfully`);
  };

  const handleResetCart = () => {
    const confirmed = window.confirm(
      "Are You sure you want to reset the cart?"
    );
    if (confirmed) {
      resetCart();
      toast.success("Cart Has been Reseted");
    }
  };

  const handleCheckOut = async () => {
    setLoading(true);
    try {
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: user?.fullName ?? "Unknown",
        customerEmail: user?.emailAddresses[0]?.emailAddress ?? "Unknown",
        clerkUserId: user!.id,
      };

      const checkouURL = await createCheckoutSession(cartProducts, metadata);

      if (checkouURL) {
        window.location.href = checkouURL;
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-gray-50 pb-52 md:pb-10">
      {isSignedIn ? (
        <Container>
          {cartProducts?.length ? (
            <>
              <div className="flex items-center gap-2 py-5">
                <ShoppingBag />
                <Title>Shopping Cart</Title>
              </div>
              <div className="grid lg:grid-cols-3 md:gap-8">
                {/* Products */}
                <div className="lg:col-span-2 rounded-lg">
                  <div className="border rounded-md bg-white">
                    {cartProducts?.map(({ product }) => {
                      const itemCount = getItemCount(product?._id);
                      return (
                        <div
                          key={product?._id}
                          className="border-b p-2.5 last:border-b-0 flex items-center justify-between gap-5"
                        >
                          <div className="flex flex-1 items-start gap-2 h-36 md:h-44">
                            {product?.images && (
                              <Link
                                href={`/product/${product?.slug?.current}`}
                                className="border p-0.5 md:p-1 mr-2 rounded-md overflow-hidden group"
                              >
                                <Image
                                  src={urlFor(product.images[0]).url()}
                                  alt="productImage"
                                  width={500}
                                  height={500}
                                  loading="lazy"
                                  className="w-32 md:w-40 h-32 md:h-40 object-cover group-hover:scale-105 overflow-hidden transition-transform duration-500 hovereffect"
                                />
                              </Link>
                            )}
                            <div className="h-full flex flex-1 flex-col justify-between py-1">
                              <div className="flex flex-col gap-0.5 md:gap-1.5">
                                <h2 className="text-base font-semibold line-clamp-1">
                                  {product?.name}
                                </h2>
                                <p className="text-sm text-lightColor font-medium">
                                  {product?.intro}
                                </p>
                                <p className="text-sm capitalize">
                                  Variant:{" "}
                                  <span className="font-semibold">
                                    {product?.variant}
                                  </span>
                                </p>
                                <p className="text-sm capitalize">
                                  Status:{" "}
                                  <span className="font-semibold">
                                    {product?.status}
                                  </span>
                                </p>
                              </div>
                              <div className="flex items-center gap-2 text-gray-500">
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger>
                                      <Heart className="w-4 h-4 md:w-5 md:h-5 mr-1 text-gray-500 hover:text-green-600 hovereffect" />
                                    </TooltipTrigger>
                                    <TooltipContent className="font-bold">
                                      Add to Favorite
                                    </TooltipContent>
                                  </Tooltip>
                                  <Tooltip>
                                    <TooltipTrigger>
                                      <Trash
                                        onClick={() =>
                                          handleDeleteProduct(product?._id)
                                        }
                                        className="w-4 h-4 md:w-5 md:h-5 mr-1 text-gray-500 hover:text-red-600 hovereffect"
                                      />
                                    </TooltipTrigger>
                                    <TooltipContent className="font-bold bg-red-600">
                                      Delete product
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-between h-36 md:h-44 p-0.5 md:p-1">
                              <PriceFormater
                                className="font-bold text-lg"
                                amount={(product?.price as number) * itemCount}
                              />
                              <QuantityButtons product={product} />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <Button
                      className="m-5 font-semibold hovereffect"
                      variant="destructive"
                      onClick={handleResetCart}
                    >
                      Reset Cart
                    </Button>
                  </div>
                </div>

                {/* Summary */}
                <div className="lg:col-span-1">
                  <div className="hidden md:inline-block w-full bg-white p-6 rounded-lg border ">
                    <Title className="text-xl mb-4">Order Summary</Title>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Sub Total:</span>
                        <PriceFormater amount={getSubTotalPrice()} />
                      </div>
                      <div className="flex justify-between">
                        <span>Discount:</span>
                        <PriceFormater
                          amount={getSubTotalPrice() - getTotalPrice()}
                        />
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-lg font-semibold text-black">
                          Total:
                        </span>
                        <PriceFormater
                          amount={getTotalPrice()}
                          className="text-lg font-bold text-black"
                        />
                      </div>
                      <Button
                        onClick={handleCheckOut}
                        className="w-full rounded-full font-semibold tracking-wide hovereffect"
                        size="lg"
                      >
                        {loading ? "Proccessing..." : "Proceed to Checkout"}
                      </Button>
                    </div>
                  </div>
                </div>
                {/* Mobile summary for mobile view  */}
                <div className="md:hidden fixed bottom-0 left-0 w-full bg-white pt-2">
                  <div className="p-4 rounded-lg border mx-4">
                    <Title className="text-xl mb-4">Order Summary</Title>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Sub Total:</span>
                        <PriceFormater amount={getSubTotalPrice()} />
                      </div>
                      <div className="flex justify-between">
                        <span>Discount:</span>
                        <PriceFormater
                          amount={getSubTotalPrice() - getTotalPrice()}
                        />
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-lg font-semibold text-black">
                          Total:
                        </span>
                        <PriceFormater
                          amount={getTotalPrice()}
                          className="text-lg font-bold text-black"
                        />
                      </div>
                      <Button
                        onClick={handleCheckOut}
                        className="w-full rounded-full font-semibold tracking-wide hovereffect"
                        size="lg"
                      >
                        {loading ? "Proccessing..." : "Proceed to Checkout"}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <EmptyCart />
          )}
        </Container>
      ) : (
        <NoAccessToCart />
      )}
    </div>
  );
}

export default CartPage;
