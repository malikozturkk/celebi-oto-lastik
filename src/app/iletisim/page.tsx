"use client"
import WorkingHours from "@/components/WorkingHours";
import Link from "next/link";
import React from "react";

export default function Contact() {
    const [showInfo, setShowInfo] = React.useState({ maltepe: true, kaynarca: true })
    return (
        <div className="flex flex-col gap-16">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-full md:w-1/3 p-6">
                    <div className="flex flex-col border-b border-[#e5e5e5] gap-6 pb-4">
                        <h3 className="text-blue-600 text-2xl font-bold">MALTEPE ÇELEBİ OTO LASTİK</h3>
                        <div className="flex items-center justify-center gap-6">
                            <Link href="tel:05334333956" className="flex flex-col gap-2 items-center justify-center">
                                <span className="bg-blue-600 p-2.5 rounded-full flex items-center justify-center">
                                    <svg
                                        width={20}
                                        height={20}
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                                        <path
                                            fill="#fff"
                                            d="M1 5V1h6v4L4.5 7.5l4 4L11 9h4v6h-4C5.477 15 1 10.523 1 5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="text-xs">Ara</p>
                            </Link>
                            <Link target="_blank" href="mailto:celebilastik@gmail.com" className="flex flex-col gap-2 items-center justify-center">
                                <span className="bg-blue-600 p-2.5 rounded-full flex items-center justify-center">
                                    <svg
                                        className="min-w-5"
                                        width={20}
                                        height={20}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#fff"
                                        stroke="#fff"
                                        viewBox="0 0 1920 1920"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441zM1919.932 226v52.627l-959.943 832.44L.045 278.628V226z"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="text-xs">Email</p>
                            </Link>
                            <Link target="_blank" href="https://www.google.com/maps/dir//%C3%87elebi+Lastik+Otomotiv+Tur.+San.+ve+Tic.+Ltd.+%C5%9Eti,+Ba%C4%9Flarba%C5%9F%C4%B1,+Atat%C3%BCrk+Caddesi,+Maltepe%2F%C4%B0stanbul/@40.9825372,29.1407879,13z/data=!4m9!4m8!1m1!4e2!1m5!1m1!1s0x14cac7a4829d6c73:0x50bd5a804d2afa1d!2m2!1d29.1369721!2d40.9326779?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D" className="flex flex-col gap-2 items-center justify-center">
                                <span className="bg-blue-600 p-2.5 rounded-full flex items-center justify-center">
                                    <svg
                                        width={20}
                                        height={20}
                                        className="min-w-5"
                                        xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="-4 0 32 32">
                                        <g>
                                            <g
                                                id="Page-1"
                                                fill="none"
                                                fillRule="evenodd"
                                                stroke="none"
                                                strokeWidth="1"
                                            >
                                                <g fill="#fff" transform="translate(-106 -413)">
                                                    <path
                                                        id="location"
                                                        d="M118 422a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 8a5 5 0 1 1 0-10 5 5 0 0 1 0 10m0-17c-6.627 0-12 5.373-12 12 0 5.018 10.005 20.011 12 20 1.964.011 12-15.05 12-20 0-6.627-5.373-12-12-12"
                                                    ></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                                <p className="text-xs">Yol Tarifi</p>
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <button className="py-4 w-full flex justify-between items-center" onClick={() => setShowInfo({ maltepe: !showInfo.maltepe, kaynarca: showInfo.kaynarca })}>
                            <h4 className="text-blue-600 text-lg font-bold">Bilgi</h4>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`${showInfo.maltepe ? "rotate-90" : "rotate-0"} transform duration-300`}
                                fill="#2563EB"
                                width={16}
                                height={16}
                                stroke="#2563EB"
                                viewBox="0 0 1024 1024"
                            >
                                <path
                                    d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
                                ></path>
                            </svg>
                        </button>
                        {showInfo.maltepe &&
                            <div className="pt-2 pb-6">
                                <div className="flex flex-col gap-8">
                                    <div className="flex gap-4">
                                        <svg
                                            width={20}
                                            height={20}
                                            className="min-w-5"
                                            xmlns="http://www.w3.org/2000/svg" fill="#2563EB" viewBox="-4 0 32 32">
                                            <g>
                                                <g
                                                    fill="none"
                                                    fillRule="evenodd"
                                                    stroke="none"
                                                    strokeWidth="1"
                                                >
                                                    <g fill="#2563EB" transform="translate(-106 -413)">
                                                        <path
                                                            id="location"
                                                            d="M118 422a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 8a5 5 0 1 1 0-10 5 5 0 0 1 0 10m0-17c-6.627 0-12 5.373-12 12 0 5.018 10.005 20.011 12 20 1.964.011 12-15.05 12-20 0-6.627-5.373-12-12-12"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <div className="flex flex-col gap-3 w-full">
                                            <p className="text-base font-bold leading-4">Adres</p>
                                            <Link href="https://maps.app.goo.gl/LGGgweapckeGNDyh7" target="_blank" className="flex leading-5 text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Bağlarbaşı Mahallesi Atatürk Caddesi No 136/A Maltepe/İstanbul</Link>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <svg
                                            width={20}
                                            height={20}
                                            className="min-w-5"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                                            <path
                                                fill="#2563EB"
                                                d="M1 5V1h6v4L4.5 7.5l4 4L11 9h4v6h-4C5.477 15 1 10.523 1 5"
                                            ></path>
                                        </svg>
                                        <div className="flex flex-col gap-3 w-full">
                                            <p className="text-base font-bold leading-4">Telefon</p>
                                            <Link href="tel:05334333956" target="_blank" className="flex text-base leading-5 text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">0533 433 39 56</Link>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <svg
                                            width={20}
                                            height={20}
                                            className="min-w-5"
                                            xmlns="http://www.w3.org/2000/svg" fill="#2563EB" viewBox="-4 0 32 32">
                                            <g>
                                                <g
                                                    id="Page-1"
                                                    fill="none"
                                                    fillRule="evenodd"
                                                    stroke="none"
                                                    strokeWidth="1"
                                                >
                                                    <g fill="#2563EB" transform="translate(-106 -413)">
                                                        <path
                                                            id="location"
                                                            d="M118 422a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 8a5 5 0 1 1 0-10 5 5 0 0 1 0 10m0-17c-6.627 0-12 5.373-12 12 0 5.018 10.005 20.011 12 20 1.964.011 12-15.05 12-20 0-6.627-5.373-12-12-12"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <div className="flex flex-col gap-3 w-full">
                                            <p className="text-base font-bold leading-4">Çalışma Saatleri</p>
                                            <WorkingHours hours={[
                                                { day: "Pazartesi", hours: "08:00-19:30" },
                                                { day: "Salı", hours: "08:00-19:30" },
                                                { day: "Çarşamba", hours: "08:00-19:30" },
                                                { day: "Perşembe", hours: "08:00-19:30" },
                                                { day: "Cuma", hours: "08:00-19:30" },
                                                { day: "Cumartesi", hours: "08:00-19:30" },
                                                { day: "Pazar", hours: "Kapalı" },
                                            ]} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className="w-full md:w-2/3">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d188.38920091535076!2d29.1369918!3d40.9326872!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7a4829d6c73%3A0x50bd5a804d2afa1d!2s%C3%87elebi%20Lastik%20Otomotiv%20Tur.%20San.%20ve%20Tic.%20Ltd.%20%C5%9Eti!5e0!3m2!1str!2str!4v1738610327951!5m2!1str!2str"
                        className="border-0 w-full h-full min-h-96 md:min-h-[765px]"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-full md:w-1/3 p-6">
                    <div className="flex flex-col border-b border-[#e5e5e5] gap-6 pb-4">
                        <h3 className="text-blue-600 text-2xl font-bold">KAYNARCA ÇELEBİ OTO LASTİK</h3>
                        <div className="flex items-center justify-center gap-6">
                            <Link href="tel:05331601100" className="flex flex-col gap-2 items-center justify-center">
                                <span className="bg-blue-600 p-2.5 rounded-full flex items-center justify-center">
                                    <svg
                                        width={20}
                                        height={20}
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                                        <path
                                            fill="#fff"
                                            d="M1 5V1h6v4L4.5 7.5l4 4L11 9h4v6h-4C5.477 15 1 10.523 1 5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="text-xs">Ara</p>
                            </Link>
                            <Link target="_blank" href="mailto:celebilastik@gmail.com" className="flex flex-col gap-2 items-center justify-center">
                                <span className="bg-blue-600 p-2.5 rounded-full flex items-center justify-center">
                                    <svg
                                        className="min-w-5"
                                        width={20}
                                        height={20}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#fff"
                                        stroke="#fff"
                                        viewBox="0 0 1920 1920"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441zM1919.932 226v52.627l-959.943 832.44L.045 278.628V226z"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="text-xs">Email</p>
                            </Link>
                            <Link target="_blank" href="https://www.google.com/maps/dir/40.9825372,29.1407879/%C3%87elebi+Lastik+Otomotiv+-+Kaynarca,+Kaynarca,+D-100+Yanyolu,+Pendik%2F%C4%B0stanbul/@40.9313351,29.1474552,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14cadc9e7355e73f:0x500feb4d8ac2768b!2m2!1d29.2607681!2d40.8781706?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D" className="flex flex-col gap-2 items-center justify-center">
                                <span className="bg-blue-600 p-2.5 rounded-full flex items-center justify-center">
                                    <svg
                                        width={20}
                                        height={20}
                                        className="min-w-5"
                                        xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="-4 0 32 32">
                                        <g>
                                            <g
                                                id="Page-1"
                                                fill="none"
                                                fillRule="evenodd"
                                                stroke="none"
                                                strokeWidth="1"
                                            >
                                                <g fill="#fff" transform="translate(-106 -413)">
                                                    <path
                                                        id="location"
                                                        d="M118 422a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 8a5 5 0 1 1 0-10 5 5 0 0 1 0 10m0-17c-6.627 0-12 5.373-12 12 0 5.018 10.005 20.011 12 20 1.964.011 12-15.05 12-20 0-6.627-5.373-12-12-12"
                                                    ></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                                <p className="text-xs">Yol Tarifi</p>
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <button className="py-4 w-full flex justify-between items-center" onClick={() => setShowInfo({ maltepe: showInfo.maltepe, kaynarca: !showInfo.kaynarca })}>
                            <h4 className="text-blue-600 text-lg font-bold">Bilgi</h4>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`${showInfo.kaynarca ? "rotate-90" : "rotate-0"} transform duration-300`}
                                fill="#2563EB"
                                width={16}
                                height={16}
                                stroke="#2563EB"
                                viewBox="0 0 1024 1024"
                            >
                                <path
                                    d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
                                ></path>
                            </svg>
                        </button>
                        {showInfo.kaynarca &&
                            <div className="pt-2 pb-6">
                                <div className="flex flex-col gap-8">
                                    <div className="flex gap-4">
                                        <svg
                                            width={20}
                                            height={20}
                                            className="min-w-5"
                                            xmlns="http://www.w3.org/2000/svg" fill="#2563EB" viewBox="-4 0 32 32">
                                            <g>
                                                <g
                                                    fill="none"
                                                    fillRule="evenodd"
                                                    stroke="none"
                                                    strokeWidth="1"
                                                >
                                                    <g fill="#2563EB" transform="translate(-106 -413)">
                                                        <path
                                                            id="location"
                                                            d="M118 422a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 8a5 5 0 1 1 0-10 5 5 0 0 1 0 10m0-17c-6.627 0-12 5.373-12 12 0 5.018 10.005 20.011 12 20 1.964.011 12-15.05 12-20 0-6.627-5.373-12-12-12"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <div className="flex flex-col gap-3 w-full">
                                            <p className="text-base font-bold leading-4">Adres</p>
                                            <Link href="https://maps.app.goo.gl/C8qKaNwyayf6X43YA" target="_blank" className="flex leading-5 text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Kaynarca Mahallesi E-5 Yanyol Caddesi No 88 Pendik/İstanbul</Link>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <svg
                                            width={20}
                                            height={20}
                                            className="min-w-5"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                                            <path
                                                fill="#2563EB"
                                                d="M1 5V1h6v4L4.5 7.5l4 4L11 9h4v6h-4C5.477 15 1 10.523 1 5"
                                            ></path>
                                        </svg>
                                        <div className="flex flex-col gap-3 w-full">
                                            <p className="text-base font-bold leading-4">Telefon</p>
                                            <Link href="tel:05331601100" target="_blank" className="flex text-base leading-5 text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">0533 160 11 00</Link>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <svg
                                            width={20}
                                            height={20}
                                            className="min-w-5"
                                            xmlns="http://www.w3.org/2000/svg" fill="#2563EB" viewBox="-4 0 32 32">
                                            <g>
                                                <g
                                                    id="Page-1"
                                                    fill="none"
                                                    fillRule="evenodd"
                                                    stroke="none"
                                                    strokeWidth="1"
                                                >
                                                    <g fill="#2563EB" transform="translate(-106 -413)">
                                                        <path
                                                            id="location"
                                                            d="M118 422a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 8a5 5 0 1 1 0-10 5 5 0 0 1 0 10m0-17c-6.627 0-12 5.373-12 12 0 5.018 10.005 20.011 12 20 1.964.011 12-15.05 12-20 0-6.627-5.373-12-12-12"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <div className="flex flex-col gap-3 w-full">
                                            <p className="text-base font-bold leading-4">Çalışma Saatleri</p>
                                            <WorkingHours hours={[
                                                { day: "Pazartesi", hours: "7/24" },
                                                { day: "Salı", hours: "7/24" },
                                                { day: "Çarşamba", hours: "7/24" },
                                                { day: "Perşembe", hours: "7/24" },
                                                { day: "Cuma", hours: "7/24" },
                                                { day: "Cumartesi", hours: "7/24" },
                                                { day: "Pazar", hours: "7/24" },
                                            ]} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className="w-full md:w-2/3">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.7130729877504!2d29.25819317607886!3d40.87817057136916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadc9e7355e73f%3A0x500feb4d8ac2768b!2s%C3%87elebi%20Lastik%20Otomotiv%20-%20Kaynarca!5e0!3m2!1str!2str!4v1738620111943!5m2!1str!2str"
                        className="border-0 w-full h-full min-h-96 md:min-h-[765px]"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </div>
        </div>
    )
}