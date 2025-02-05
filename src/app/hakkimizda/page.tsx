import Image from "next/image";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import React from "react";

export default function About() {
    return (
        <div className="px-4 pb-8 mx-auto max-w-7xl sm:px-6 lg:px-8 md:pb-16">
            <Image src="/images/about.jpg" width={1200} height={400} alt="Çelebi Oto Lastik Hakkında" />
            <div className="mt-9 flex flex-col gap-4 text-lg text-[#4E4E4E] font-medium">
                <h1 className="font-bold text-4xl text-black">Hakkımızda</h1>
                <p className="mt-4">2012 yılından bu yana otomotiv sektöründe güvenilir hizmet anlayışıyla faaliyet gösteren Çelebi Oto Lastik, müşterilerimize en kaliteli lastik ve jant çözümlerini sunmayı ilke edinmiştir. İlk olarak İstanbul’un Pendik ilçesinde Kaynarca Mahallesi'nde hizmete başlayan işletmemiz, 2017 yılında Maltepe şubemizi açarak büyüme yolunda önemli bir adım atmıştır. Her iki şubemizle de geniş bir hizmet yelpazesi sunarak, araç sahiplerinin lastik ve jant ihtiyaçlarına profesyonel çözümler üretmekteyiz.</p>
                <p>Müşteri memnuniyetini en üst seviyede tutmayı hedefleyen Çelebi Oto Lastik, sektördeki yenilikleri yakından takip ederek hizmet kalitesini sürekli olarak artırmaktadır. Alanında uzman ve deneyimli ekibimizle birlikte, her aracın ihtiyacına özel çözümler sunarak güvenli ve konforlu sürüş deneyimi sağlamaktayız.</p>
                <h1 className="font-bold text-4xl text-black mt-4">Hizmetlerimiz</h1>
                <ul className="mt-4 flex flex-col gap-3">
                    <li><p><strong>Sıfır ve İkinci El Lastik Satışı:</strong> Araç tipinize ve sürüş koşullarınıza en uygun lastikleri geniş ürün yelpazemiz arasından seçerek sizlere sunuyoruz. Bütçenize uygun sıfır ve ikinci el lastik alternatiflerimizle güvenli sürüşe katkıda bulunuyoruz.</p></li>
                    <li><p><strong>Jant Değiştirme ve Düzeltme:</strong> Hasar görmüş veya deformasyona uğramış jantlarınızı son teknoloji ekipmanlarımızla onarıyor, ihtiyacınıza uygun yeni jant seçenekleri sunuyoruz.</p></li>
                    <li><p><strong>Akü Değişimi:</strong> Aracınızın enerji ihtiyacını karşılayan akünüzün performansını kontrol ederek, gerektiğinde kaliteli ve garantili akü seçenekleriyle değişim hizmeti sağlıyoruz.</p></li>
                    <li><p><strong>Lastik Oteli (Depolama Hizmeti):</strong> Mevsimsel lastik değişimlerinizi güvenle yapabilmeniz için, lastiklerinizi uygun koşullarda saklayabileceğiniz lastik oteli hizmeti sunuyoruz. Böylece lastiklerinizin ömrünü uzatarak güvenliğinizi sağlıyoruz.</p></li>
                    <li><p><strong>Mobil Yol Yardım Hizmeti:</strong> Yolda kaldığınızda veya acil lastik değişimi ihtiyacınız olduğunda, mobil hizmet aracımızla bulunduğunuz yere gelerek size hızlı ve etkili çözümler sunuyoruz.</p></li>
                </ul>
                <h1 className="font-bold text-4xl text-black mt-4">Neden Biz?</h1>
                <ul className="mt-4 flex flex-col gap-3">
                    <li><p><strong>Deneyim ve Güven:</strong> 2012 yılından bu yana oto lastik sektöründe edindiğimiz bilgi birikimi ve tecrübeyle müşterilerimize kaliteli hizmet sunuyoruz.</p></li>
                    <li><p><strong>Geniş Ürün Yelpazesi:</strong> Farklı marka ve modellerde lastik ve jant seçenekleriyle her bütçeye ve ihtiyaca uygun çözümler sağlıyoruz.</p></li>
                    <li><p><strong>Uzman Kadro:</strong> Alanında uzman teknisyenlerimizle profesyonel ve güvenilir hizmet sunuyoruz.</p></li>
                    <li><p><strong>Teknolojik Ekipmanlar:</strong> En yeni teknolojiye sahip ekipmanlarımızla jant düzeltme, lastik montajı ve balans ayarı gibi işlemleri titizlikle gerçekleştiriyoruz.</p></li>
                    <li><p><strong>Hızlı ve Etkili Çözümler:</strong> Hem şubelerimizde hem de mobil hizmet araçlarımızla müşterilerimize hızlı ve etkili çözümler sunarak yolculuklarının güvenli devam etmesini sağlıyoruz.</p></li>
                </ul>
                <p>Müşterilerimizin güvenliği ve memnuniyeti bizim için her şeyden önemlidir. İstanbul Maltepe ve Kaynarca’daki şubelerimizde sizleri ağırlamaktan mutluluk duyarız. Kaliteli hizmet anlayışımızla, aracınız için en iyi çözümleri sunmak adına her zaman buradayız!</p>
            </div>
            <div className="flex flex-col gap-4 mt-8">
                <h1 className="font-bold text-2xl">Kaynarca Şubemiz</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    <Zoom>
                        <img
                            src="/images/kaynarca/1.jpg"
                            alt="Şubemiz - Kaynarca Şube"
                            className="rounded-lg duration-300 hover:scale-110"
                        />
                    </Zoom>
                    <Zoom>
                        <img
                            src="/images/kaynarca/2.jpg"
                            alt="Yol Yardım - Kaynarca Şube"
                            className="rounded-lg duration-300 hover:scale-110"
                        />
                    </Zoom>
                    <Zoom>
                        <img
                            src="/images/kaynarca/3.jpg"
                            alt="Yol Yardım - Kaynarca Şube"
                            className="rounded-lg duration-300 hover:scale-110"
                        />
                    </Zoom>
                    <Zoom>
                        <img
                            src="/images/kaynarca/4.jpg"
                            alt="Yol Yardım - Kaynarca Şube"
                            className="rounded-lg duration-300 hover:scale-110"
                        />
                    </Zoom>
                    <Zoom>
                        <img
                            src="/images/kaynarca/5.jpg"
                            alt="Yol Yardım - Kaynarca Şube"
                            className="rounded-lg duration-300 hover:scale-110"
                        />
                    </Zoom>
                </div>
            </div>

            <div className="flex flex-col gap-4 mt-8">
                <h1 className="font-bold text-2xl">Maltepe Şubemiz</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    <Zoom>
                        <img
                            src="/images/maltepe/1.jpg"
                            alt="Hakkımızda"
                            className="rounded-lg duration-300 hover:scale-110"
                        />
                    </Zoom>
                    <Zoom>
                        <img
                            src="/images/maltepe/2.jpg"
                            alt="Hakkımızda"
                            className="rounded-lg duration-300 hover:scale-110"
                        />
                    </Zoom>
                </div>
            </div>
        </div>
    )
}