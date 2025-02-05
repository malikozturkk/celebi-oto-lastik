export interface IService {
    title: string
    image: string
    description: string
}

export function slugify(title: string) {
    return title
        .toLowerCase()
        .trim()
        .replace(/ğ/g, "g")
        .replace(/ü/g, "u")
        .replace(/ş/g, "s")
        .replace(/ı/g, "i")
        .replace(/ö/g, "o")
        .replace(/ç/g, "c")
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

export function getServiceBySlug(slug: string): IService | undefined {
    return services.find(service => slugify(service.title) === slug);
}

export const services: IService[] = [
    {
        title: "7/24 Hizmet",
        image: "https://source.unsplash.com/random/800x600?service",
        description: "Günün her saati, haftanın her günü siz değerli müşterilerimize kesintisiz hizmet sunuyoruz. Acil lastik değişimi, yol yardım ve bakım hizmetlerimiz ile her an yanınızdayız. Nerede olursanız olun, uzman ekibimizle sorunlarınıza hızlı ve güvenilir çözümler üretiyoruz. Gecenin bir yarısı yolda mı kaldınız? Hiç endişelenmeyin, tek bir telefonla profesyonel ekibimiz en kısa sürede bulunduğunuz konuma ulaşır ve ihtiyacınız olan desteği sağlar.",
    },
    {
        title: "Lastik Oteli",
        image: "https://source.unsplash.com/random/800x600?tire-storage",
        description: "Mevsimlik lastik değişimlerinizde, kullanılmayan lastiklerinizi güvenle saklamak için lastik oteli hizmetimizden faydalanabilirsiniz. Lastikleriniz, ideal sıcaklık ve nem koşullarında muhafaza edilerek deforme olmaları engellenir. Profesyonel ekibimiz lastiklerinizi düzenli olarak kontrol eder, gerektiğinde bakım yapar ve bir sonraki sezona en iyi durumda kullanıma hazır hale getirir. Böylece hem lastik ömrünü uzatmış olursunuz hem de yerden tasarruf edersiniz.",
    },
    {
        title: "Lastik Değişimi",
        image: "https://source.unsplash.com/random/800x600?tire-change",
        description: "Aracınızın lastiklerini değiştirmek artık zahmetsiz! Uzman ekibimiz, en kaliteli ekipmanlarla lastik değişim işleminizi hızlı ve güvenilir bir şekilde gerçekleştirir. Mevsim değişimlerinde, aşınmış lastiklerde veya acil durumlarda yanınızdayız. Güvenli bir sürüş için lastiklerinizin diş derinliklerini, hava basıncını ve genel durumunu kontrol ederek gerekli yönlendirmeleri yapıyoruz. Lastik değişimi sırasında balans ayarı gibi ek kontroller de sağlanarak aracınızın performansı en üst seviyede tutulur.",
    },
    {
        title: "Jant Düzeltme",
        image: "https://source.unsplash.com/random/800x600?wheel-repair",
        description: "Eğilmiş, çatlamış veya hasar görmüş jantlar sürüş güvenliğinizi tehdit eder. Uzman teknisyenlerimiz, özel ekipmanlar kullanarak jantlarınızı orijinal formuna kavuşturur. Jant düzeltme işlemi sırasında, jantlarınızın genel yapısı detaylı bir şekilde incelenir ve uzun ömürlü bir kullanım sağlamak için titizlikle onarılır. Estetik açıdan da önem taşıyan bu işlem sayesinde aracınızın görünümü yenilenirken, güvenliğiniz de en üst seviyeye çıkar.",
    },
    {
        title: "Mobil Hizmet",
        image: "https://source.unsplash.com/random/800x600?mobile-service",
        description: "Lastik değişimi veya jant düzeltme gibi hizmetlere ihtiyacınız olduğunda artık servise gitmenize gerek yok! Mobil hizmet ekibimiz, bulunduğunuz yere gelerek gerekli işlemleri yerinde gerçekleştirir. Acil bir durumda yolda kaldığınızda veya iş yoğunluğunuz nedeniyle servise gitmeye vaktiniz olmadığında, mobil servisimiz sayesinde zaman kaybetmeden hizmet alabilirsiniz. İster evinizde, ister iş yerinizde, dilediğiniz noktada profesyonel destek sağlıyoruz.",
    }
]
