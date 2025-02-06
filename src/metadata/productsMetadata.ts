import { Metadata } from 'next';

export const productsMetadata: Metadata = {
    title: "Ürünlerimiz | Çelebi Oto Lastik - Lastik, Akü, Jant ve Jant & Lastik Takımları",
    description: "Çelebi Oto Lastik olarak kaliteli lastik, akü, jant ve jant & lastik takımları sunuyoruz. Uygun fiyatlarla güvenilir ürünler için hemen inceleyin.",
    alternates: {
        canonical: 'https://www.celebiotolastik.com/urunler',
    },
    keywords: [
        'oto lastik', 'otomobil lastikleri', 'yaz lastiği', 'kış lastiği', '4 mevsim lastik', 'akü fiyatları', 'oto akü',
        'jant modelleri', 'jant fiyatları', 'jant & lastik takımı', 'uygun fiyatlı lastik', 'Çelebi Oto Lastik ürünleri',
        'araba lastiği', 'lastik markaları', 'jant seçimi', 'akü seçimi', 'jant lastik kombinasyonu'
    ],
    authors: [
        { name: 'Çelebi Oto Lastik', url: 'https://www.celebiotolastik.com' }
    ],
    creator: 'Çelebi Oto Lastik',
    publisher: 'Çelebi Oto Lastik',
    colorScheme: 'light dark',
    applicationName: 'Çelebi Oto Lastik',
    appleWebApp: {
        capable: true,
        statusBarStyle: 'black-translucent',
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
        url: 'https://www.celebiotolastik.com/urunler',
        siteName: 'Çelebi Oto Lastik',
        images: [
            {
                url: 'https://www.celebiotolastik.com/og-products.jpg', //TODO: Ürünler sayfası görseli
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
        images: ['https://www.celebiotolastik.com/og-products.jpg'], //TODO: Ürünler sayfası görseli
    },
    icons: {
        icon: '/favicon.ico',  //TODO: Site logosu
        shortcut: '/shortcut-icon.png',  //TODO: Site logosu
        apple: '/apple-touch-icon.png',  //TODO: Site logosu
    },
    other: {
        'viewport': 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
        'searchAction': JSON.stringify({
            target: 'https://www.celebiotolastik.com/search?q={search_term_string}',
            queryInput: 'required name=search_term_string',
        }),
    },
};
