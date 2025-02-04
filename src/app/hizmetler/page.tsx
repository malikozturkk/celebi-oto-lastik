import { IService } from "@/types/strapi.type";
import { getRequest } from "@/utils/api";
import Link from "next/link";
import React from "react";


export default async function Services() {
    const services: IService[] = await getRequest("/services?populate=*")
    return (
        <div className="p-4 pb-8 mx-auto max-w-7xl grid gap-4 sm:p-6 lg:p-8 md:pb-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service: IService) => (
                <Link
                    href={`hizmetler/${service.documentId}`}
                    key={service.id}
                    className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white justify-end"
                >
                    <img
                        src={process.env.NEXT_PUBLIC_CDN2_URL + service.image.url}
                        alt={service.title}
                        className="rounded-lg mb-3"
                    />
                    <h3 className="font-bold text-xl truncate w-full">{service.title}</h3>
                    <p className="font-medium text-base text-[#687279] truncate w-full">{service.description}</p>
                    <button type="button" className="w-full inline-flex items-center justify-center px-5 py-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700">Devamını Gör</button>
                </Link>
            ))}
        </div>

    )
}