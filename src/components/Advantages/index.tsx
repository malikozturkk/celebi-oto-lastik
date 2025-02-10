const advantages = [
    {
        title: "Kredi Kartına Taksit",
        description: "12 Ay'a kadar kredi kartına taksit",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 6C2 4.9 2.9 4 4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6ZM4 8V18H20V8H4ZM20 10H4V12H20V10Z" />
            </svg>
        )
    },
    {
        title: "Ücretsiz Montaj",
        description: "Sıfır Ürünlerimizde Montaj servislerimizde sökme, takma ve balans hizmetleri ücretsizdir",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 21H15V19H9V21ZM4 17H20V15H4V17ZM2 13H22V11H2V13ZM4 9H20V7H4V9ZM9 5H15V3H9V5Z" />
            </svg>
        )
    },
    {
        title: "+2 Yıl Garanti",
        description: "Sıfır Lastiklerimiz 2 yıl boyunca garantimiz altında",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L3 6V11C3 16.25 7.03 20.92 12 22C16.97 20.92 21 16.25 21 11V6L12 2ZM12 4.41L19 7.5V11C19 15.5 15.69 19.43 12 20.5C8.31 19.43 5 15.5 5 11V7.5L12 4.41ZM11 14V9H13V14H11ZM11 16H13V18H11V16Z" />
            </svg>
        )
    },
    {
        title: "Müşteri Memnuniyeti",
        description: "%100 memnuniyeti",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM9 10H11V8H9V10ZM13 10H15V8H13V10ZM9.07 14C9.56 15.17 10.69 16 12 16C13.31 16 14.44 15.17 14.93 14H9.07Z" />
            </svg>
        )
    }
];

export default function Advantages() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, index) => (
                <div key={index} className="p-6 text-center shadow-lg rounded-2xl border border-red bg-white">
                    <div className="flex justify-center mb-4">{adv.icon}</div>
                    <h3 className="text-xl font-semibold">{adv.title}</h3>
                    {adv.description && <p className="text-[#4b5563] mt-2">{adv.description}</p>}
                </div>
            ))}
        </div>
    );
}