import { Metadata } from 'next';

export const homeMetadata: Metadata = {
    // Temel Bilgiler
    title: {
        default: 'Anasayfa | My Awesome App',
        template: '%s | My Awesome App', // Sayfa başlığına dinamik ekleme yapar
    },
    description: 'My Awesome App ile en iyi kullanıcı deneyimini keşfedin.',

    // Yönlendirme ve Dil Ayarları
    alternates: {
        canonical: 'https://www.myawesomeapp.com/',
        languages: {
            'tr': 'https://www.myawesomeapp.com/tr',
        },
    },

    // Anahtar Kelimeler (SEO)
    keywords: ['My Awesome App', 'teknoloji', 'inovasyon', 'web uygulaması'],

    // Yazar ve Yayıncı Bilgileri
    authors: [
        { name: 'John Doe', url: 'https://www.johndoe.dev' },
        { name: 'Jane Smith', url: 'https://www.janesmith.dev' },
    ],
    creator: 'My Awesome App Team',
    publisher: 'My Awesome App Ltd.',

    // Tema Rengi ve Görünüm
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#000000' },
    ],
    colorScheme: 'light dark', // Karanlık ve aydınlık tema desteği

    // Açık Grafik (Open Graph) - Sosyal Medya Paylaşımı için
    openGraph: {
        title: 'My Awesome App - Dünyanın En İyi Uygulaması',
        description: 'Tek bir tıkla dünyayı keşfedin.',
        url: 'https://www.myawesomeapp.com',
        siteName: 'My Awesome App',
        images: [
            {
                url: 'https://www.myawesomeapp.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'My Awesome App Açık Grafik Görseli',
            },
        ],
        locale: 'tr_TR',
        type: 'website',
    },

    // Twitter Kartları
    twitter: {
        card: 'summary_large_image', // Büyük görselli kart
        title: 'My Awesome App',
        description: 'Tek bir tıkla dünyayı keşfedin.',
        site: '@myawesomeapp',
        creator: '@johndoe',
        images: ['https://www.myawesomeapp.com/twitter-card.jpg'],
    },

    // Uygulama Ayarları (PWA / Mobil)
    applicationName: 'My Awesome App',
    appleWebApp: {
        capable: true,
        statusBarStyle: 'black-translucent',
        title: 'My Awesome App',
    },

    // Manifest Dosyası (PWA için)
    manifest: '/site.webmanifest',

    // İkonlar
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

    // Arama Motoru İndeksleme Ayarları
    robots: {
        index: true,         // Google gibi arama motorları dizine ekleyebilir
        follow: true,        // Linkleri takip etmesine izin verilir
        nocache: false,      // Sayfanın önbelleğe alınmasına izin verilir
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,     // Snippet uzunluğu sınırsız
            "max-image-preview": 'large',
            "max-video-preview": -1,
        },
    },

    other: {
        'msapplication-TileColor': '#2b5797',
        'msapplication-config': '/browserconfig.xml',
        'viewport': 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
        'searchAction': JSON.stringify({
            target: 'https://www.myawesomeapp.com/search?q={search_term_string}',
            queryInput: 'required name=search_term_string',
        }),
    },
};
