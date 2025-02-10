import Link from "next/link"

const Header = () => {
    return (
        <div className="hidden bg-red text-white md:block">
            <header className="p-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex justify-between">
                <div className="flex gap-2">
                    <div className="border-r border-white flex items-center gap-2">
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#fff" d="M1 5V1h6v4L4.5 7.5l4 4L11 9h4v6h-4C5.477 15 1 10.523 1 5"></path></svg>
                        <Link className="flex text-sm transition-all duration-200 hover:text-[#d1d5db] focus:text-[#d1d5db] pr-2" href="tel:05334333956">0533 433 39 56 </Link>
                    </div>
                    <div className="flex items-center gap-2">
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
                        <Link className="flex text-sm transition-all duration-200 hover:text-[#d1d5db] focus:text-[#d1d5db]" href="https://maps.app.goo.gl/LGGgweapckeGNDyh7">Maltepe/İstanbul </Link>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="border-r border-white flex items-center gap-2">
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#fff" d="M1 5V1h6v4L4.5 7.5l4 4L11 9h4v6h-4C5.477 15 1 10.523 1 5"></path></svg>
                        <Link className="flex text-sm transition-all duration-200 hover:text-[#d1d5db] focus:text-[#d1d5db] pr-2" href="tel:05331601100">0533 160 11 00 </Link>
                    </div>
                    <div className="flex items-center gap-2">
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
                        <Link className="flex text-sm transition-all duration-200 hover:text-[#d1d5db] focus:text-[#d1d5db]" href="https://maps.app.goo.gl/C8qKaNwyayf6X43YA">Kaynarca/İstanbul </Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header