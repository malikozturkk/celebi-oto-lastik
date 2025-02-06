import { Metadata } from 'next';

export const servicesMetadata: Metadata = {
    title: "Hizmetlerimiz | Çelebi Oto Lastik - 7/24 Lastik, Jant, Akü ve Yol Yardım",
    description: "Çelebi Oto Lastik olarak 7/24 lastik değişimi, jant düzeltme, akü değişimi, lastik oteli ve mobil hizmetler sunuyoruz. Kaynarca ve Maltepe şubelerimizde profesyonel hizmet alın.",
    alternates: {
        canonical: 'https://www.celebiotolastik.com/hizmetler',
    },
    keywords: [
        'çelebi oto lastik hizmetleri', '7/24 lastik hizmeti', 'lastik oteli', 'lastik değişimi', 'jant düzeltme', 'mobil lastik hizmeti',
        'pendik lastik hizmeti', 'maltepe lastik hizmeti', 'oto lastik tamiri', 'oto yol yardım', 'akü değişimi', 'jant tamiri',
        'lastik tamiri', 'acil lastik değişimi', 'kaynarca oto lastik', 'maltepe oto lastik', 'mobil lastik değişimi'
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
        title: 'Hizmetlerimiz | Çelebi Oto Lastik',
        description: '7/24 oto lastik değişimi, jant düzeltme, akü değişimi, lastik oteli ve mobil lastik hizmetleri sunuyoruz. Çelebi Oto Lastik profesyonel desteğiyle hizmetinizde.',
        url: 'https://www.celebiotolastik.com/hizmetler',
        siteName: 'Çelebi Oto Lastik',
        images: [
            {
                url: 'https://www.celebiotolastik.com/og-image.jpg', //TODO: Logo görseli
                alt: 'Çelebi Oto Lastik',
            },
        ],
        locale: 'tr_TR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Hizmetlerimiz | Çelebi Oto Lastik',
        description: 'Çelebi Oto Lastik olarak 7/24 oto lastik değişimi, jant düzeltme, akü değişimi, lastik oteli ve mobil hizmetler sunuyoruz.',
        site: '@celebiotolastik',
        creator: '@celebiotolastik',
        images: ['https://www.celebiotolastik.com/og-image.jpg'], //TODO: Logo görseli
    },
    icons: {
        icon: '/favicon.ico',  //TODO: Logo görseli
        shortcut: '/shortcut-icon.png',  //TODO: Logo görseli
        apple: '/apple-touch-icon.png',  //TODO: Logo görseli
    },
    other: {
        'viewport': 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
        'searchAction': JSON.stringify({
            target: 'https://www.celebiotolastik.com/search?q={search_term_string}',
            queryInput: 'required name=search_term_string',
        }),
    },
};
