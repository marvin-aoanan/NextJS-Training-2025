function getRandomNumber(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout(
  { children }: { children: React.ReactNode }
) {

  const random = getRandomNumber(2);
  if(random === 1) {
    throw new Error("Error loading product...")
  }

  return (
    <div className="p-4">
      {children}
      <h2 className="mt-3 mb-2">Featured products</h2>
    </div>
  )
}