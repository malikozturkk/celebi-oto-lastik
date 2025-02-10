import React from "react"
import { IProduct, slugify } from "@/data/services"
import Link from "next/link"

interface ProductProps {
    products: IProduct['items'][number][]
}

const Products: React.FC<ProductProps> = ({ products }) => {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-5">
                {products.map((product: IProduct['items'][number]) => (
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
                        <button type="button" className="w-full inline-flex items-center justify-center px-5 py-3 font-semibold text-red transition-all duration-200 bg-white rounded-md border border-red hover:bg-red hover:text-white">Detayları Gör</button>
                    </Link>
                ))}
            </div>
            <Link
                href={`urunler`}
                className="w-fit inline-flex items-center justify-center px-5 py-3 font-semibold text-white transition-all duration-200 bg-red rounded-md hover:bg-hoverRed focus:bg-hoverRed">
                Tüm Ürünler
            </Link>
        </div>
    )
}
export default Products