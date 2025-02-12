import { Metadata } from 'next';

export const productsMetadata: Metadata = {
    title: "Ürünlerimiz | Çelebi Oto Lastik - Lastik, Akü, Jant ve Jant & Lastik Takımları",
    description: "Çelebi Oto Lastik olarak kaliteli lastik, akü, jant ve jant & lastik takımları sunuyoruz. Uygun fiyatlarla güvenilir ürünler için hemen inceleyin.",
    alternates: {
        canonical: 'https://celebiotolastik.com/urunler',
    },
    keywords: [
        'oto lastik', 'otomobil lastikleri', 'yaz lastiği', 'kış lastiği', '4 mevsim lastik', 'akü fiyatları', 'oto akü',
        'jant modelleri', 'jant fiyatları', 'jant & lastik takımı', 'uygun fiyatlı lastik', 'Çelebi Oto Lastik ürünleri',
        'araba lastiği', 'lastik markaları', 'jant seçimi', 'akü seçimi', 'jant lastik kombinasyonu'
    ],
    authors: [
        { name: 'Çelebi Oto Lastik', url: 'https://celebiotolastik.com' }
    ],
    creator: 'Çelebi Oto Lastik',
    publisher: 'Çelebi Oto Lastik',
    applicationName: 'Çelebi Oto Lastik',
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'Çelebi Oto Lastik',
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
        title: 'Ürünlerimiz | Çelebi Oto Lastik',
        description: 'Lastik, akü, jant ve jant & lastik takımları kategorilerinde geniş ürün yelpazemizi keşfedin. En kaliteli oto lastik ürünleri burada!',
        url: 'https://celebiotolastik.com/urunler',
        siteName: 'Çelebi Oto Lastik',
        images: [
            {
                url: '/images/logo.svg',
                alt: 'Çelebi Oto Lastik Ürünler',
            },
        ],
        locale: 'tr_TR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ürünlerimiz | Çelebi Oto Lastik',
        description: 'Lastik, akü, jant ve jant & lastik takımları kategorilerinde geniş ürün yelpazemizi keşfedin. En kaliteli oto lastik ürünleri burada!',
        site: '@celebiotolastik',
        creator: '@celebiotolastik',
        images: ['/images/logo.svg'],
    },
    icons: {
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
