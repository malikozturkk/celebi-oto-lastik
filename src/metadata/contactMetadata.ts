import { Metadata } from 'next';

export const contactMetadata: Metadata = {
    title: "İletişim | Çelebi Oto Lastik - Pendik ve Maltepe Şubeleri",
    description: "Çelebi Oto Lastik Pendik ve Maltepe şubelerimize iletişim numaralarımız, konum bilgileri, e-posta adresimiz ve harita üzerinden kolayca ulaşabilirsiniz.",
    alternates: {
        canonical: 'https://celebiotolastik.com/iletisim',
    },
    keywords: [
        'çelebi oto lastik iletişim', 'pendik lastikçi iletişim', 'maltepe lastikçi iletişim', 'oto lastik telefon numarası',
        'oto lastik konum', 'lastikçi harita', 'oto lastik yol tarifi', 'lastik tamiri iletişim', 'akü değişimi iletişim',
        'oto yol yardım telefon', '7/24 lastik değişimi iletişim', 'jant tamiri adres', 'acil lastik değişimi iletişim'
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
        title: 'İletişim | Çelebi Oto Lastik',
        description: 'Çelebi Oto Lastik Pendik ve Maltepe şubelerine iletişim numaralarımız, adreslerimiz ve harita üzerinden kolayca ulaşabilirsiniz.',
        url: 'https://celebiotolastik.com/iletisim',
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
        title: 'İletişim | Çelebi Oto Lastik',
        description: 'Çelebi Oto Lastik Pendik ve Maltepe şubelerine telefon, e-posta veya harita üzerinden ulaşabilirsiniz.',
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
