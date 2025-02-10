import { homeMetadata } from '@/metadata/homeMetadata';
import { Metadata } from "next";
import Brands from "@/components/Brands";
import { getRandomProducts } from "@/data/services";
import { products } from "@/data/products";
import Products from "@/components/Products";
import Slider from "@/components/Slider";
import Advantages from "@/components/Advantages";

export const metadata: Metadata = homeMetadata;

export default function Home() {
  const randomProducts = getRandomProducts(products);
  return (
    <div className="flex flex-col gap-4 p-4 pb-8 mx-auto max-w-7xl sm:p-6 lg:p-8 md:pb-16">
      <Slider />
      <Brands />

      <h2 className="text-xl font-bold mt-4">Ürünler</h2>
      <Products products={randomProducts} />

      <h2 className="text-xl font-bold mt-4">Avantajlarınız</h2>
      <Advantages />
    </div>
  );
}
