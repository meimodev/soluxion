"use client"
import {useState} from "react";

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ = () => {
    const [open, setOpen] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpen(open === index ? null : index); // Toggle the answer
    };

    const faqs: FAQItem[] = [
        {
            question: "Bagaimana cara mendapatkan eBook keren ini?\n",
            answer: "Cukup klik tombol beli / pesan, ikuti langkah-langkah pembayaran yang diberikan, dan setelahnya kamu dapat langsung mengunduh file PDF eBook lengkap dengan bonusnya!"
        },
        {
            question: "Apakah eBook ini bisa dijual ulang?",
            answer: "Maaf, eBook ini tidak diperbolehkan untuk dijual kembali. Harap hormati ketentuan yang berlaku",
        },
        {
            question: "Apakah eBook ini tersedia di toko online?",
            answer: "eBook ini hanya tersedia untuk pembelian melalui situs web kami. Jadi, segera lakukan checkout agar tidak kehabisan!"
        },
        {
            question: "Apakah ada garansi sukses setelah membaca eBook ini?",
            answer: "eBook ini memberikan panduan lengkap untuk mengembangkan bisnismu. Meskipun kami tidak memberikan jaminan sukses secara langsung, kami memberikan kesempatan untuk memaksimalkan peluang suksesmu melalui langkah-langkah yang kami ajarkan."
        }
    ];

    return (
        <div className=" p-6">
            <h1 className="text-4xl font-semibold text-center mb-8">Pertanyaan Umum</h1>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b">
                        <button
                            className="w-full text-left py-3 px-4 text-lg font-medium text-gray-800 rounded-t-xl focus:outline-none hover:bg-gray-100"
                            onClick={() => toggle(index)}
                        >
              <span className="flex justify-between items-center">
                {faq.question}
                  <span className={`transform transition-transform duration-400 ease-in ${open === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </span>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-400 ease-in ${
                                open === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <p className="py-3 px-4 text-gray-600">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;