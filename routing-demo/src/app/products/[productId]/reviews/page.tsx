export default async function ProductReviews(
  { params }: { params: Promise<{ productId: string }> }
) {
  const productId = (await params).productId;
  return (
  <div>
    <h1>Product {productId} reviews </h1>
    <ul>
      <li>Review 1</li>
      <li>Review 2</li>
    </ul>
  </div>
  )
  
}