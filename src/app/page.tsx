import Image from "next/image";
import { homeMetadata } from '@/metadata/homeMetadata';
import { Metadata } from "next";
import Brands from "@/components/Brands";

export const metadata: Metadata = homeMetadata;

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4 pb-8 mx-auto max-w-7xl sm:p-6 lg:p-8 md:pb-16">
      <h2 className="text-xl font-bold">Markalar</h2>
      <Brands />
    </div>
  );
}
