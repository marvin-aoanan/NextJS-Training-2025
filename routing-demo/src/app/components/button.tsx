export default function Button({ 
  children, 
  onClick }: { 
    children: React.ReactNode; 
    onClick: () => void; 
  }) {
  return (
    <button className="bg-red-500 border rounded-sm p-2" onClick={onClick}>{children}</button>
  );
}