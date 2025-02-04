"use client"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const itemStyle = "text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
    return (
        <header className={`${open ? "pb-6" : ""} bg-white lg:pb-0`}>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" title="Logo" className="flex">
                            <Image width={200} height={40} className="w-auto h-8 lg:h-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="Çelebi Oto Lastik Logo" />
                        </Link>
                    </div>

                    <button onClick={() => setOpen(!open)} type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                        <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                        </svg>

                        <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                        <Link href="/" title="Anasayfa" className={itemStyle}> Anasayfa </Link>
                        <Link href="/hizmetler" title="Hizmetler" className={itemStyle}> Hizmetler </Link>
                        <Link href="/urunler" title="Ürünler" className={itemStyle}> Ürünler </Link>
                        <Link href="/hakkimizda" title="Hakkımızda" className={itemStyle}> Hakkımızda </Link>
                        <Link href="/iletisim" title="İletişim" className={itemStyle}> İletişim </Link>
                    </div>

                    <Link href="tel:05334333956" title="Hemen Ara" className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button"> Hemen Ara </Link>
                </nav>

                {open &&
                    <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
                        <div className="flow-root">
                            <div className="flex flex-col px-6 -my-2 space-y-1">
                                <Link href="/" title="Anasayfa" className={itemStyle}> Anasayfa </Link>
                                <Link href="/hizmetler" title="Hizmetler" className={itemStyle}> Hizmetler </Link>
                                <Link href="/urunler" title="Ürünler" className={itemStyle}> Ürünler </Link>
                                <Link href="/hakkimizda" title="Hakkımızda" className={itemStyle}> Hakkımızda </Link>
                                <Link href="/iletisim" title="İletişim" className={itemStyle}> İletişim </Link>
                            </div>
                        </div>

                        <div className="px-6 mt-6">
                            <Link href="tel:05334333956" title="Hemen Ara" className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700" role="button"> Hemen Ara </Link>
                        </div>
                    </nav>
                }
            </div>
        </header>

    )
}

export default Navbar