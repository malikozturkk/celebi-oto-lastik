import { Metadata } from 'next';

export const aboutMetadata: Metadata = {
    title: "Hakkımızda | Çelebi Oto Lastik - Güvenilir ve Profesyonel Hizmet",
    description: "Çelebi Oto Lastik olarak, Pendik Kaynarca ve Maltepe Bağlarbaşı şubelerimizde güvenilir ve profesyonel lastik değişimi, jant düzeltme, akü değişimi ve yol yardım hizmetleri sunuyoruz.",
    alternates: {
        canonical: 'https://www.celebiotolastik.com/hakkimizda',
    },
    keywords: [
        'çelebi oto lastik', 'hakkımızda', 'oto lastik hizmetleri', 'profesyonel lastik değişimi', 'lastik tamiri', 'jant düzeltme',
        'akü değişimi', 'oto yol yardım', 'lastik oteli', 'pendik lastik hizmetleri', 'maltepe lastik hizmetleri',
        'güvenilir oto lastik', '7/24 lastik değişimi', 'lastik bakım hizmetleri', 'uzman lastik servisi'
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
        title: 'Hakkımızda | Çelebi Oto Lastik',
        description: 'Çelebi Oto Lastik, güvenilir ve profesyonel hizmet anlayışıyla lastik değişimi, jant düzeltme, akü değişimi ve yol yardım hizmetleri sunmaktadır.',
        url: 'https://www.celebiotolastik.com/hakkimizda',
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
        title: 'Hakkımızda | Çelebi Oto Lastik',
        description: 'Çelebi Oto Lastik olarak, güvenilir ve profesyonel lastik değişimi, jant düzeltme, akü değişimi ve yol yardım hizmetleri sunuyoruz.',
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
