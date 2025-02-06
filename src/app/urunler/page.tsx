import Link from "next/link";
import React from "react";
import { products } from "@/data/products";
import { IService, slugify } from "@/data/services";
import { productsMetadata } from "@/metadata/productsMetadata";
import { Metadata } from "next";
import ProductsCategory from "@/components/ProductsCategory";

export const metadata: Metadata = productsMetadata

export default function Products() {
    return (
        <div className="flex flex-col gap-4 p-4 pb-8 mx-auto max-w-7xl sm:p-6 lg:p-8 md:pb-16">
            <h1 className="font-bold text-4xl">Ürünlerimiz</h1>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full h-fit md:w-1/6 flex flex-col gap-3 p-4 rounded-lg bg-white shadow-lg">
                    <h3 className="text-xl font-bold border-b">Kategoriler</h3>
                    {products.map((category) => (
                        <ProductsCategory category={category} />
                    ))}
                </div>
                <div className="flex flex-col gap-8 w-full md:w-5/6">
                    {products.map((category) => (
                        <div key={category.category}>
                            <h2 id={slugify(category.category)} className="font-bold text-2xl">{category.category}</h2>
                            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                                {category.items && (category.items as IService[]).map((product: IService) => (
                                    <Link
                                        href={`urunler/${slugify(product.title)}`}
                                        key={slugify(product.title)}
                                        className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white justify-end shadow-lg"
                                    >
                                        <img
                                            src={`/images/products/${product.image}`}
                                            alt={product.title}
                                            className="rounded-lg mb-3 h-44 max-h-44"
                                        />
                                        <h3 className="font-bold text-xl line-clamp-2 w-full">{product.title}</h3>
                                        <p className="font-medium text-base text-[#687279] line-clamp-3 w-full">{product.description}</p>
                                        <button type="button" className="w-full inline-flex items-center justify-center px-5 py-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700">Devamını Gör</button>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}