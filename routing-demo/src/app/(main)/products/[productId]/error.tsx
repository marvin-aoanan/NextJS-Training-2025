"use client";

import Button from "@/app/components/button";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({ 
  error, 
  reset }: { 
    error: Error; 
    reset: () => void; 
  }) {

  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh()
      reset()
    })
  }

  return (
    <>
    <div className="text-center">{error.message}</div>
    {/* <button onClick={ ()=>reload() }>Retry reloading</button> */}
    <Button  onClick={ ()=>reload() }>Retry reloading</Button>
    </>
  );
}