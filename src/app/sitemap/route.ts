import { products } from "@/data/products";
import { slugify, services, IProduct, IService } from "@/data/services";

const baseUrl = "https://celebiotolastik.com";

export async function GET() {
    const routes = [
        `${baseUrl}/`,
        `${baseUrl}/hakkimizda`,
        `${baseUrl}/iletisim`,
        `${baseUrl}/urunler`,
        `${baseUrl}/hizmetler`,
        ...products.flatMap((product: IProduct) =>
            product.items.map((item: IService) => `${baseUrl}/urunler/${slugify(item.title)}`)
        ),
        ...services.map((service: IService) => `${baseUrl}/hizmetler/${slugify(service.title)}`),
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${routes
            .map(
                (route) => `
                <url>
                    <loc>${route}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>monthly</changefreq>
                    <priority>0.8</priority>
                </url>
            `
            )
            .join("")}
    </urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}
