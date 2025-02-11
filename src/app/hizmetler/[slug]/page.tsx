import { getServiceBySlug, IService, slugify } from "@/data/services";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { slug } = await params;
    const service: IService | undefined = getServiceBySlug(slug);
    return {
        title: `${service?.title} | Çelebi Oto Lastik`,
        description: service?.description,
        alternates: {
            canonical: `https://celebiotolastik.com/hizmetler/${slug}`,
        },
        keywords: [
            service?.title as string,
            "oto lastik hizmetleri", "lastik değişimi", "jant düzeltme", "akü değişimi", "lastik tamiri",
            "mobil lastik hizmeti", "7/24 yol yardım", "acil lastik değişimi", "lastik oteli"
        ],
        authors: [
            { name: 'Çelebi Oto Lastik', url: 'https://celebiotolastik.com/' }
        ],
        creator: 'Çelebi Oto Lastik',
        publisher: 'Çelebi Oto Lastik',
        applicationName: 'Çelebi Oto Lastik',
        appleWebApp: {
            capable: true,
            statusBarStyle: 'default',
            title: `${service?.title} | Çelebi Oto Lastik`,
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                "max-snippet": -1,
                "max-image-preview": 'large',
                "max-video-preview": -1,
            },
        },
        openGraph: {
            title: `${service?.title} | Çelebi Oto Lastik`,
            description: service?.description,
            url: `https://celebiotolastik.com/hizmetler/${slug}`,
            siteName: "Çelebi Oto Lastik",
            images: [
                {
                    url: `/images/services/${slug}.jpg`,
                    alt: service?.title,
                },
            ],
            locale: "tr_TR",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: `${service?.title} | Çelebi Oto Lastik`,
            description: service?.description,
            site: '@celebiotolastik',
            creator: '@celebiotolastik',
            images: [`/images/services/${slug}.jpg`],
        },
        icons: {
            icon: '/images/logo.svg',
            shortcut: '/images/logo.svg',
            apple: '/images/logo.svg',
        },
        other: {
            'viewport': 'width=device-width, initial-scale=1.0',
            'searchAction': JSON.stringify({
                target: 'https://celebiotolastik.com/search?q={search_term_string}',
                queryInput: 'required name=search_term_string',
            }),
        },
    };
}


export default async function Service({ params }: { params: Params }) {
    const { slug } = await params;
    const service: IService | undefined = getServiceBySlug(slug)
    return (
        <div className="p-4 pb-8 mx-auto max-w-7xl flex flex-col md:flex-row gap-8 sm:p-6 lg:p-8 md:pb-16">
            {service &&
                <>
                    <div className="w-full md:max-w-96 min-h-64 md:min-h-96 flex items-center p-4 md:p-6 border-2 border-[#f3f0fe] rounded-lg">
                        <div className="w-full">
                            <Zoom>
                                <img
                                    src={`/images/services/${slugify(service.title)}.jpg`}
                                    alt={service.title}
                                    className="rounded-lg duration-300 hover:scale-110"
                                />
                            </Zoom>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-6 w-full">
                        <h1 className="text-2xl font-bold">{service.title}</h1>
                        <p>{service.description}</p>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-semibold">Detaylı Bilgi / Rezervasyon İçin Bize Ulaşın</h3>
                            <div className="flex items-center gap-4 md:gap-8 flex-col md:flex-row">
                                <Link href="tel:05334333956" type="submit" className="inline-flex items-center justify-center px-5 py-3 gap-2 font-semibold text-white transition-all duration-200 w-full md:w-1/2 bg-red rounded-md hover:bg-hoverRed focus:bg-hoverRed">
                                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#fff" d="M1 5V1h6v4L4.5 7.5l4 4L11 9h4v6h-4C5.477 15 1 10.523 1 5"></path></svg>
                                    Maltepe Şubesi
                                </Link>
                                <Link href="tel:05331601100" type="submit" className="inline-flex items-center justify-center px-5 py-3 gap-2 font-semibold text-white transition-all duration-200 w-full md:w-1/2 bg-red rounded-md hover:bg-hoverRed focus:bg-hoverRed">
                                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#fff" d="M1 5V1h6v4L4.5 7.5l4 4L11 9h4v6h-4C5.477 15 1 10.523 1 5"></path></svg>
                                    Pendik Şubesi
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}