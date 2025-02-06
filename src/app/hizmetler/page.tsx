
import Link from "next/link";
import React from "react";
import { services, IService, slugify } from "@/data/services";
import { servicesMetadata } from "@/metadata/servicesMetadata";
import { Metadata } from "next";

export const metadata: Metadata = servicesMetadata;

export default async function Services() {
    return (
        <div className="flex flex-col gap-4 p-4 pb-8 mx-auto max-w-7xl sm:p-6 lg:p-8 md:pb-16">
            <h1 className="font-bold text-4xl">Hizmetlerimiz</h1>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {services && (services as IService[]).map((service: IService) => (
                    <Link
                        href={`hizmetler/${slugify(service.title)}`}
                        key={slugify(service.title)}
                        className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white justify-end shadow-lg"
                    >
                        <img
                            src={`/images/services/${slugify(service.title)}.jpg`}
                            alt={service.title}
                            className="rounded-lg mb-3"
                        />
                        <h3 className="font-bold text-xl line-clamp-2 w-full">{service.title}</h3>
                        <p className="font-medium text-base text-[#687279] line-clamp-3 w-full">{service.description}</p>
                        <button type="button" className="w-full inline-flex items-center justify-center px-5 py-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700">Devamını Gör</button>
                    </Link>
                ))}
            </div>
        </div>
    )
}