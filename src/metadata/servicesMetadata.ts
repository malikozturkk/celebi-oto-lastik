import { Metadata } from 'next';

export const servicesMetadata: Metadata = {
    title: "Hizmetlerimiz | Çelebi Oto Lastik - 7/24 Lastik, Jant, Akü ve Yol Yardım",
    description: "Çelebi Oto Lastik olarak 7/24 lastik değişimi, jant düzeltme, akü değişimi, lastik oteli ve mobil hizmetler sunuyoruz. Pendik ve Maltepe şubelerimizde profesyonel hizmet alın.",
    alternates: {
        canonical: 'https://celebiotolastik.com/hizmetler',
    },
    keywords: [
        'çelebi oto lastik hizmetleri', '7/24 lastik hizmeti', 'lastik oteli', 'lastik değişimi', 'jant düzeltme', 'mobil lastik hizmeti',
        'pendik lastik hizmeti', 'maltepe lastik hizmeti', 'oto lastik tamiri', 'oto yol yardım', 'akü değişimi', 'jant tamiri',
        'lastik tamiri', 'acil lastik değişimi', 'pendik oto lastik', 'maltepe oto lastik', 'mobil lastik değişimi'
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
        title: 'Hizmetlerimiz | Çelebi Oto Lastik',
        description: '7/24 oto lastik değişimi, jant düzeltme, akü değişimi, lastik oteli ve mobil lastik hizmetleri sunuyoruz. Çelebi Oto Lastik profesyonel desteğiyle hizmetinizde.',
        url: 'https://celebiotolastik.com/hizmetler',
        siteName: 'Çelebi Oto Lastik',
        images: [
            {
                url: '/images/logo.svg',
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
        images: ['/images/logo.svg'],
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
