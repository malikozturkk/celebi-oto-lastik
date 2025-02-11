"use client"
import Link from "next/link"
import React from "react"

const Whatsapp = () => {
    const [open, setOpen] = React.useState(false)
    return (
        <div className="fixed bottom-6 right-5 flex flex-col items-end justify-center gap-2 z-50">
            {open &&
                <div className="bg-red text-white rounded-md p-6 flex flex-col gap-5">
                    <p className="text-base font-semibold tracking-widest text-white uppercase">Acil Yol Yardım</p>
                    <div className="flex flex-col gap-1">
                        <p className="text-xs font-semibold tracking-widest uppercase">Maltepe Şubemiz</p>
                        <Link href="https://wa.me/905334333956" target="_blank" className="inline-flex items-center justify-center px-5 py-3 font-semibold text-red bg-white transition-all duration-200 rounded-md gap-1">
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
                            Konum Gönderin
                        </Link>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-xs font-semibold tracking-widest uppercase">Pendik Şubemiz</p>
                        <Link href="https://wa.me/905331601100" target="_blank" className="inline-flex items-center justify-center px-5 py-3 font-semibold text-red bg-white transition-all duration-200 rounded-md gap-1">
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
                            Konum Gönderin
                        </Link>
                    </div>
                </div>
            }
            <button className="rounded-full bg-[#00d757] p-4" onClick={() => setOpen(!open)}>
                {open ?
                    <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z" fill="white"></path> <path fillRule="evenodd" clipRule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="white"></path> </g></svg>
                    :
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlSpace="preserve"
                        width={24}
                        height={24}
                        fill="#fff"
                        stroke="#fff"
                        version="1.1"
                        viewBox="0 0 308 308"
                    >
                        <g id="SVGRepo_iconCarrier">
                            <g id="XMLID_468_">
                                <path d="M227.904 176.981c-.6-.288-23.054-11.345-27.044-12.781-1.629-.585-3.374-1.156-5.23-1.156-3.032 0-5.579 1.511-7.563 4.479-2.243 3.334-9.033 11.271-11.131 13.642-.274.313-.648.687-.872.687-.201 0-3.676-1.431-4.728-1.888-24.087-10.463-42.37-35.624-44.877-39.867-.358-.61-.373-.887-.376-.887.088-.323.898-1.135 1.316-1.554 1.223-1.21 2.548-2.805 3.83-4.348a141 141 0 0 1 1.812-2.153c1.86-2.164 2.688-3.844 3.648-5.79l.503-1.011c2.344-4.657.342-8.587-.305-9.856-.531-1.062-10.012-23.944-11.02-26.348-2.424-5.801-5.627-8.502-10.078-8.502-.413 0 0 0-1.732.073-2.109.089-13.594 1.601-18.672 4.802C90 87.918 80.89 98.74 80.89 117.772c0 17.129 10.87 33.302 15.537 39.453.116.155.329.47.638.922 17.873 26.102 40.154 45.446 62.741 54.469 21.745 8.686 32.042 9.69 37.896 9.69h.001c2.46 0 4.429-.193 6.166-.364l1.102-.105c7.512-.666 24.02-9.22 27.775-19.655 2.958-8.219 3.738-17.199 1.77-20.458-1.348-2.216-3.671-3.331-6.612-4.743z"></path>
                                <path
                                    id="XMLID_470_"
                                    d="M156.734 0C73.318 0 5.454 67.354 5.454 150.143c0 26.777 7.166 52.988 20.741 75.928L.212 302.716a3.998 3.998 0 0 0 4.999 5.096l79.92-25.396c21.87 11.685 46.588 17.853 71.604 17.853C240.143 300.27 308 232.923 308 150.143 308 67.354 240.143 0 156.734 0zm0 268.994c-23.539 0-46.338-6.797-65.936-19.657a4 4 0 0 0-3.406-.467l-40.035 12.726 12.924-38.129a4 4 0 0 0-.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 0-65.543 53.754-118.867 119.826-118.867 66.064 0 119.812 53.324 119.812 118.867.001 65.535-53.746 118.851-119.811 118.851z"
                                ></path>
                            </g>
                        </g>
                    </svg>
                }
            </button>
        </div>
    )
}

export default Whatsapp