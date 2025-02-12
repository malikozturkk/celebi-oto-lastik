import { Metadata } from 'next';

export const homeMetadata: Metadata = {
    title: "Çelebi Oto Lastik | 7/24 Lastik, Jant, Akü Değişimi ve Yol Yardım Hizmeti",
    description: 'Çelebi Oto Lastik ile Maltepe Bağlarbaşı ve Pendik Kaynarca şubelerimizde 7/24 lastik değişimi, jant değişimi/düzeltme, akü değişimi ve yol yardım hizmetlerinden faydalanın.',
    alternates: {
        canonical: 'https://celebiotolastik.com/',
    },
    keywords: [
        'oto lastik', 'lastik değişimi', 'jant değiştirme', 'jant düzeltme', 'akü değişimi', 'lastik oteli', 'mobil lastik hizmeti',
        '7/24 yol yardım', 'lastik tamiri', 'acil lastik değişimi', 'pendik lastik oteli', 'maltepe lastik değişimi', 'oto yol yardım',
        'jant tamiri', 'akü', 'lastik', 'jant', 'yol yardım', 'oto lastik tamiri', 'kaynarca lastik', 'pendik lastik',
        'bağlarbaşı lastik', 'kaynarca yol yardım', 'pendik yol yardım', 'bağlarbaşı yol yardım', 'maltepe yol yardım',
        'sıfır lastik', 'ikinci el lastik', 'sıfır jant', 'ikinci el jant', 'celebi oto lastik', 'celebi lastik maltepe', 'celebi lastik kaynarca',
        'celebi yol yardım kaynarca', 'celebi yol yardım maltepe', 'celebi yol yardım'
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
        title: 'Çelebi Oto Lastik | 7/24 Lastik ve Yol Yardım Hizmeti',
        description: 'Maltepe Bağlarbaşı ve Pendik Kaynarca şubelerimizde 7/24 oto lastik, jant düzeltme, akü değişimi ve yol yardım hizmeti.',
        url: 'https://celebiotolastik.com/',
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
        title: 'Çelebi Oto Lastik',
        description: 'Pendik ve Maltepe şubelerimizde 7/24 lastik değişimi, akü değişimi ve yol yardım hizmetleri.',
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