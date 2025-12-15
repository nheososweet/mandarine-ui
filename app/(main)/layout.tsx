"use client";

import { Toaster } from "@/components/ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NuqsAdapter>{children}</NuqsAdapter>
      <Toaster />
    </>
  );
}
