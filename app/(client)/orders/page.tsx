import { requiredUser } from "@/hooks/requiredUser";

async function OrdersPage() {
  await requiredUser();
  return <div>Orders page</div>;
}

export default OrdersPage;
