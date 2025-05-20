import Container from "@/components/Container";

async function SingleProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  console.log(slug);
  return (
    <Container>
      <div>SingleProductPage</div>
    </Container>
  );
}

export default SingleProductPage;
