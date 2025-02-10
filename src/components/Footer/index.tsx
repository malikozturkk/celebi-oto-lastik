import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <section className="py-10 bg-[#f9fafb] sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <Image width={200} height={40} className="w-auto h-12" src="/images/logo.svg" alt="" />

                        <p className="text-base leading-relaxed text-[#4b5563] mt-7">
                            2012 yılından bu yana oto lastik sektöründe edindiğimiz bilgi birikimi ve tecrübeyle müşterilerimize kaliteli hizmet sunuyoruz.
                        </p>

                        <ul className="flex items-center space-x-3 mt-9">
                            <li>
                                <Link href="https://x.com/celebiotolastik" target="_blank" title="Çelebi Oto Lastik - Twitter" className="flex items-center justify-center text-white transition-all duration-200 bg-[#1f2937] rounded-full w-7 h-7 hover:bg-red focus:bg-red">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px" fill="white"><path d="M 4.4042969 3 C 3.7572969 3 3.3780469 3.7287656 3.7480469 4.2597656 L 9.7363281 12.818359 L 3.7246094 19.845703 C 3.3356094 20.299703 3.6578594 21 4.2558594 21 L 4.9199219 21 C 5.2129219 21 5.4916406 20.871437 5.6816406 20.648438 L 10.919922 14.511719 L 14.863281 20.146484 C 15.238281 20.680484 15.849953 21 16.501953 21 L 19.835938 21 C 20.482937 21 20.862187 20.272188 20.492188 19.742188 L 14.173828 10.699219 L 19.900391 3.9902344 C 20.232391 3.6002344 19.955359 3 19.443359 3 L 18.597656 3 C 18.305656 3 18.027891 3.1276094 17.837891 3.3496094 L 12.996094 9.0097656 L 9.3945312 3.8554688 C 9.0205313 3.3194687 8.4098594 3 7.7558594 3 L 4.4042969 3 z" /></svg>
                                </Link>
                            </li>

                            <li>
                                <Link href="https://www.facebook.com/celebiotolastik45/" title="Çelebi Oto Lastik - Facebook" className="flex items-center justify-center text-white transition-all duration-200 bg-[#1f2937] rounded-full w-7 h-7 hover:bg-red focus:bg-red">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                    </svg>
                                </Link>
                            </li>

                            <li>
                                <Link href="https://www.instagram.com/celebiotolastik/" title="Çelebi Oto Lastik - Instagram" className="flex items-center justify-center text-white transition-all duration-200 bg-[#1f2937] rounded-full w-7 h-7 hover:bg-red focus:bg-red">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                        <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                        <path
                                            d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                        ></path>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-[#9ca3af] uppercase">Şirket</p>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <Link href="/hakkimizda" title="Hakkımızda" className="flex text-base text-black transition-all duration-200 hover:text-red focus:text-red"> Hakkımızda </Link>
                            </li>
                            <li>
                                <Link href="/iletisim" title="İletişim" className="flex text-base text-black transition-all duration-200 hover:text-red focus:text-red"> İletişim </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-[#9ca3af] uppercase">Sunduklarımız</p>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <Link href="/hizmetler" title="Hizmetler" className="flex text-base text-black transition-all duration-200 hover:text-red focus:text-red"> Hizmetler </Link>
                            </li>

                            <li>
                                <Link href="/urunler" title="Ürünler" className="flex text-base text-black transition-all duration-200 hover:text-red focus:text-red"> Ürünler </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                        <p className="text-sm font-semibold tracking-widest text-[#9ca3af] uppercase">Şubelerimiz</p>
                        <div className="flex flex-col gap-4 mt-3">
                            <div className="flex flex-col gap-2">
                                <p className="text-xs font-semibold tracking-widest text-red uppercase">Maltepe</p>
                                <div className="flex gap-2">
                                    <svg
                                        width={20}
                                        height={20}
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                                        <path
                                            fill="#e31e24"
                                            d="M1 5V1h6v4L4.5 7.5l4 4L11 9h4v6h-4C5.477 15 1 10.523 1 5"
                                        ></path>
                                    </svg>
                                    <Link href="tel:05334333956" className="flex text-sm text-black transition-all duration-200 hover:text-red focus:text-red">0533 433 39 56 </Link>
                                </div>

                                <div className="flex gap-2">
                                    <svg
                                        width={20}
                                        height={20}
                                        className="min-w-5"
                                        xmlns="http://www.w3.org/2000/svg" fill="#e31e24" viewBox="-4 0 32 32">
                                        <g>
                                            <g
                                                id="Page-1"
                                                fill="none"
                                                fillRule="evenodd"
                                                stroke="none"
                                                strokeWidth="1"
                                            >
                                                <g fill="#e31e24" transform="translate(-106 -413)">
                                                    <path
                                                        id="location"
                                                        d="M118 422a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 8a5 5 0 1 1 0-10 5 5 0 0 1 0 10m0-17c-6.627 0-12 5.373-12 12 0 5.018 10.005 20.011 12 20 1.964.011 12-15.05 12-20 0-6.627-5.373-12-12-12"
                                                    ></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <Link href="https://maps.app.goo.gl/LGGgweapckeGNDyh7" target="_blank" className="flex text-sm text-black transition-all duration-200 hover:text-red focus:text-red">Bağlarbaşı Mahallesi Atatürk Caddesi No 136/A Maltepe/İstanbul</Link>
                                </div>
                                <Link href="tel:05334333956" type="submit" className="inline-flex items-center justify-center px-5 py-3 font-semibold text-white transition-all duration-200 w-1/2 bg-red rounded-md hover:bg-hoverRed focus:bg-hoverRed">Hemen Ara</Link>
                            </div>

                            <div className="flex flex-col gap-2">
                                <p className="text-xs font-semibold tracking-widest text-red uppercase">Kaynarca</p>
                                <div className="flex gap-2">
                                    <svg
                                        width={20}
                                        height={20}
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                                        <path
                                            fill="#e31e24"
                                            d="M1 5V1h6v4L4.5 7.5l4 4L11 9h4v6h-4C5.477 15 1 10.523 1 5"
                                        ></path>
                                    </svg>
                                    <Link href="tel:05331601100" className="flex text-sm text-black transition-all duration-200 hover:text-red focus:text-red">0533 160 11 00</Link>
                                </div>

                                <div className="flex gap-2">
                                    <svg
                                        width={20}
                                        height={20}
                                        className="min-w-5"
                                        xmlns="http://www.w3.org/2000/svg" fill="#e31e24" viewBox="-4 0 32 32">
                                        <g>
                                            <g
                                                id="Page-1"
                                                fill="none"
                                                fillRule="evenodd"
                                                stroke="none"
                                                strokeWidth="1"
                                            >
                                                <g fill="#e31e24" transform="translate(-106 -413)">
                                                    <path
                                                        id="location"
                                                        d="M118 422a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 8a5 5 0 1 1 0-10 5 5 0 0 1 0 10m0-17c-6.627 0-12 5.373-12 12 0 5.018 10.005 20.011 12 20 1.964.011 12-15.05 12-20 0-6.627-5.373-12-12-12"
                                                    ></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <Link href="https://maps.app.goo.gl/C8qKaNwyayf6X43YA" target="_blank" className="flex text-sm text-black transition-all duration-200 hover:text-red focus:text-red">
                                        Kaynarca Mahallesi E-5 Yanyol Caddesi No 88 Pendik/İstanbul
                                    </Link>
                                </div>
                                <Link href="tel:05331601100" type="submit" className="inline-flex items-center justify-center px-5 py-3 font-semibold text-white transition-all duration-200 w-1/2 bg-red rounded-md hover:bg-hoverRed focus:bg-hoverRed">Hemen Ara</Link>
                            </div>

                        </div>
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-[#e5e7eb]" />

                <p className="text-sm text-center text-[#4b5563]">© Telif Hakkı {new Date().getFullYear()}, Tüm Hakları Saklıdır, Çelebi Oto Lastik</p>
            </div>
        </section >

    )
}

export default Footer