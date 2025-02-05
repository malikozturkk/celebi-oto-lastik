import { Metadata } from 'next';

export const contactMetadata: Metadata = {
    title: "İletişim | Çelebi Oto Lastik - Kaynarca ve Maltepe Şubeleri",
    description: "Çelebi Oto Lastik Kaynarca ve Maltepe şubelerimize iletişim numaralarımız, konum bilgileri, e-posta adresimiz ve harita üzerinden kolayca ulaşabilirsiniz.",
    alternates: {
        canonical: 'https://www.celebiotolastik.com/iletisim',
    },
    keywords: [
        'çelebi oto lastik iletişim', 'kaynarca lastikçi iletişim', 'maltepe lastikçi iletişim', 'oto lastik telefon numarası',
        'oto lastik konum', 'lastikçi harita', 'oto lastik yol tarifi', 'lastik tamiri iletişim', 'akü değişimi iletişim',
        'oto yol yardım telefon', '7/24 lastik değişimi iletişim', 'jant tamiri adres', 'acil lastik değişimi iletişim'
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
        title: 'İletişim | Çelebi Oto Lastik',
        description: 'Çelebi Oto Lastik Kaynarca ve Maltepe şubelerine iletişim numaralarımız, adreslerimiz ve harita üzerinden kolayca ulaşabilirsiniz.',
        url: 'https://www.celebiotolastik.com/iletisim',
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
        title: 'İletişim | Çelebi Oto Lastik',
        description: 'Çelebi Oto Lastik Kaynarca ve Maltepe şubelerine telefon, e-posta veya harita üzerinden ulaşabilirsiniz.',
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
