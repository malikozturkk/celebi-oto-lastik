import { getProductBySlug, ProductWithCategory } from "@/data/services";
import Link from "next/link";
import React from "react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

type Params = Promise<{ slug: string }>

export default async function Product({ params }: { params: Params }) {
    const { slug } = await params;
    const product: ProductWithCategory = getProductBySlug(slug)
    return (
        <div className="p-4 pb-8 mx-auto max-w-7xl flex flex-col md:flex-row gap-8 sm:p-6 lg:p-8 md:pb-16">
            {product &&
                <>
                    <div className="w-full md:max-w-96 min-h-64 md:min-h-96 flex items-center p-4 md:p-6 border-2 border-[#f3f0fe] rounded-lg">
                        <div className="w-full">
                            <Zoom>
                                <img
                                    src={`/images/products/${product.item.image}`}
                                    alt={product.item.title}
                                    className="rounded-lg duration-300 hover:scale-110"
                                />
                            </Zoom>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-6 w-full">
                        <h1 className="text-2xl font-bold">{product.item.title}</h1>
                        <p>{product.item.description}</p>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-semibold">Detaylı Bilgi / Rezervasyon İçin Bize Ulaşın</h3>
                            <div className="flex items-center gap-4 md:gap-8 flex-col md:flex-row">
                                <Link href="tel:05334333956" type="submit" className="inline-flex items-center justify-center px-5 py-3 gap-2 font-semibold text-white transition-all duration-200 w-full md:w-1/2 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700">
                                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#fff" d="M1 5V1h6v4L4.5 7.5l4 4L11 9h4v6h-4C5.477 15 1 10.523 1 5"></path></svg>
                                    Maltepe Şubesi
                                </Link>
                                <Link href="tel:05331601100" type="submit" className="inline-flex items-center justify-center px-5 py-3 gap-2 font-semibold text-white transition-all duration-200 w-full md:w-1/2 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700">
                                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#fff" d="M1 5V1h6v4L4.5 7.5l4 4L11 9h4v6h-4C5.477 15 1 10.523 1 5"></path></svg>
                                    Kaynarca Şubesi
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}