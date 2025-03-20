import { notFound, redirect } from "next/navigation";

// function getRandomNumber(count: number) {
//   return Math.floor(Math.random() * count);
// }

export default async function ProductReview(
  { params } : { params: Promise<{ productId: string, reviewId: string }> }
) {

  // const random = getRandomNumber(2);
  // if(random === 1) {
  //   throw new Error("Error loading review...")
  // }

  const { productId, reviewId } = await params;
  if(parseInt(productId) > 1000 || parseInt(reviewId) > 1000) {
    //notFound();
    redirect('/products');
  }

  return (
    <div className="p-4">
      <h3>Review {reviewId} for product {productId}</h3>
    </div>
  );
}