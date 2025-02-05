import { Metadata } from 'next';

export const homeMetadata: Metadata = {
    title: "Çelebi Oto Lastik | 7/24 Lastik, Jant, Akü Değişimi ve Yol Yardım Hizmeti",
    description: 'Çelebi Oto Lastik ile Maltepe Bağlarbaşı ve Pendik Kaynarca şubelerimizde 7/24 lastik değişimi, jant değişimi/düzeltme, akü değişimi ve yol yardım hizmetlerinden faydalanın.',
    alternates: {
        canonical: 'https://www.celebiotolastik.com/',
    },
    keywords: [
        'oto lastik', 'lastik değişimi', 'jant değiştirme', 'jant düzeltme', 'akü değişimi', 'lastik oteli', 'mobil lastik hizmeti',
        'pendik kaynarca lastikçi', 'maltepe bağlarbaşı lastikçi', '7/24 yol yardım', 'lastik tamiri',
        'acil lastik değişimi', 'pendik lastik oteli', 'maltepe lastik değişimi', 'oto yol yardım',
        'jant tamiri', 'akü', 'lastik', 'jant', 'yol yardım', 'oto lastik tamiri', 'kaynarca lastik', 'pendik lastik',
        'bağlarbaşı lastik', 'pendik lastik', 'kaynarca yol yardım', 'pendik yol yardım', 'bağlarbaşı yol yardım', 'maltepe yol yardım',
        'sıfır lastik', 'ikinci el lastik', 'sıfır jant', 'ikici el jant', 'celebi oto lastik', 'celebi lastik maltepe', 'celebi lastik kaynarca',
        'celebi yol yardım kaynarca', 'celebi yol yardım maltepe', 'celebi yol yardım'
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





    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#000000' },
    ],
    openGraph: {
        title: 'Çelebi Oto Lastik | 7/24 Lastik ve Yol Yardım Hizmeti',
        description: 'Maltepe Bağlarbaşı ve Pendik Kaynarca şubelerimizde 7/24 oto lastik, jant düzeltme, akü değişimi ve yol yardım hizmeti.',
        url: 'https://www.celebiotolastik.com',
        siteName: 'Çelebi Oto Lastik',
        images: [
            {
                url: 'https://www.celebiotolastik.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Çelebi Oto Lastik Açık Grafik Görseli',
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
        images: ['https://www.celebiotolastik.com/twitter-card.jpg'],
    },
    manifest: '/site.webmanifest',
    icons: {
        icon: '/favicon.ico',
        shortcut: '/shortcut-icon.png',
        apple: '/apple-touch-icon.png',
        other: [
            {
                rel: 'mask-icon',
                url: '/safari-pinned-tab.svg',
                color: '#5bbad5',
            },
        ],
    },
    other: {
        'msapplication-TileColor': '#2b5797',
        'msapplication-config': '/browserconfig.xml',
        'viewport': 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
        'searchAction': JSON.stringify({
            target: 'https://www.celebiotolastik.com/search?q={search_term_string}',
            queryInput: 'required name=search_term_string',
        }),
    },
};