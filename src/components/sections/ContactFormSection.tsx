import { useFormik } from 'formik';
import toast from 'react-hot-toast';

// Figma mascot/hero image for the iletişim sayfası
const figmaContactHero =
    'https://www.figma.com/api/mcp/asset/d3738739-580e-4061-9ae2-5fbe4e8623ee';

// Figma Instagram icon for iletişim sayfası
const figmaInstagramIcon =
    'https://www.figma.com/api/mcp/asset/edab0a76-c70c-4526-9bf3-5b264dc1d7df';

interface ContactFormValues {
    firstName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    acceptedTerms: boolean;
}

export function ContactFormSection() {
    const formik = useFormik<ContactFormValues>({
        initialValues: {
            firstName: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            acceptedTerms: false,
        },
        validate: (values) => {
            const errors: Partial<Record<keyof ContactFormValues, string>> = {};

            if (!values.firstName) errors.firstName = 'Zorunlu';
            if (!values.email) errors.email = 'Zorunlu';
            if (!values.phone) errors.phone = 'Zorunlu';
            if (!values.subject) errors.subject = 'Zorunlu';
            if (!values.message) errors.message = 'Zorunlu';
            if (!values.acceptedTerms) errors.acceptedTerms = 'Zorunlu';

            return errors;
        },
        onSubmit: async (values, helpers) => {
            try {
                // TODO: Wire this up to a real API when available
                console.log('Contact form submitted:', values);
                toast.success('Mesajınız başarıyla gönderildi.');
                helpers.resetForm();
            } catch (error) {
                console.error('Contact form error:', error);
                toast.error('Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
            }
        },
    });

    return (
        <section className="w-full bg-white pt-12 lg:pt-20 pb-8 lg:pb-0">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-stretch">
                    {/* Left - Mascot image (from Figma) */}
                    <div className="w-full lg:w-[55%] flex items-center justify-center lg:justify-start">
                        <div className="relative w-full max-w-[800px] lg:max-w-none lg:translate-x-[-40px] transform translate-y-8 lg:translate-y-13">
                            <img
                                src={figmaContactHero}
                                alt="Yüksi maskotu kutu taşırken"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Right - Form & content */}
                    <div className="w-full lg:w-[45%] flex flex-col gap-8">
                        <div className="text-center lg:text-left">
                            <h1
                                className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#FF5B04] leading-tight mb-6"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                Bizimle iletişime geçin!
                            </h1>

                            <form
                                onSubmit={formik.handleSubmit}
                                className="max-w-[532px] mx-auto lg:mx-0 space-y-4"
                            >
                                {/* Soy İsim (single name field per design) */}
                                <div>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Soy İsim"
                                        className="w-full h-16 bg-[#FF5B04] rounded-[5px] px-6 text-white placeholder-white font-semibold text-base shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] focus:outline-none focus:ring-2 focus:ring-[#FF5B04]/50"
                                    />
                                </div>

                                {/* E-mail */}
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="E-mail"
                                        className="w-full h-16 bg-[#FF5B04] rounded-[5px] px-6 text-white placeholder-white font-semibold text-base shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] focus:outline-none focus:ring-2 focus:ring-[#FF5B04]/50"
                                    />
                                </div>

                                {/* Telefon Numarası */}
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Telefon Numarası"
                                        className="w-full h-16 bg-[#FF5B04] rounded-[5px] px-6 text-white placeholder-white font-semibold text-base shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] focus:outline-none focus:ring-2 focus:ring-[#FF5B04]/50"
                                    />
                                </div>

                                {/* Mesajınızın Konusu */}
                                <div>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formik.values.subject}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Mesajınızın Konusu"
                                        className="w-full h-16 bg-[#FF5B04] rounded-[5px] px-6 text-white placeholder-white font-semibold text-base shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] focus:outline-none focus:ring-2 focus:ring-[#FF5B04]/50"
                                    />
                                </div>

                                {/* Mesaj */}
                                <div>
                                    <textarea
                                        name="message"
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Mesaj"
                                        className="w-full h-[182px] bg-[#FF5B04] rounded-[5px] px-6 py-4 text-white placeholder-white font-semibold text-base shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] focus:outline-none focus:ring-2 focus:ring-[#FF5B04]/50 resize-none"
                                    />
                                </div>

                                {/* Kabul onay tiki */}
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        id="acceptedTerms"
                                        name="acceptedTerms"
                                        checked={formik.values.acceptedTerms}
                                        onChange={formik.handleChange}
                                        className="w-5 h-5 rounded-[5px] border-2 border-[#FF5B04] bg-[#ffc3a3] text-[#FF5B04] focus:ring-[#FF5B04] cursor-pointer"
                                        style={{ accentColor: '#FF5B04' }}
                                    />
                                    <label
                                        htmlFor="acceptedTerms"
                                        className="text-[#FF5B04] font-semibold text-base cursor-pointer"
                                    >
                                        Kabul onay tiki
                                    </label>
                                </div>

                                {/* Gönder Butonu */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={formik.isSubmitting}
                                        className="w-full h-16 bg-[#333333] rounded-[5px] text-white font-bold text-xl sm:text-2xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] hover:bg-[#2a2a2a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {formik.isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Bottom contact information */}
                        <div className="max-w-[790px] text-[#333333] text-sm sm:text-base space-y-3">
                            <p
                                className="font-semibold"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                Görüşlerinizi bizimle{' '}
                                <a
                                    href="mailto:info@yuksi.com.tr"
                                    className="text-[#FF5B04] underline"
                                >
                                    info@yuksi.com.tr
                                </a>{' '}
                                üzerinden ya da iletişim formu ile görüşlerinizi bizimle paylaşabilirsiniz
                            </p>
                            <p style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                                İletişim Numarası:
                                <span className="font-medium"> 0850 241 93 16</span>
                            </p>
                            <p
                                className="font-semibold"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                Ahmet Vefik Paşa OSB Mah. Bursa caddesi No:73 Kestel/BURSA
                            </p>
                        </div>
                    </div>
                </div>

                {/* Instagram block (yuksi.tr) */}
                <div className="mt-2 lg:mt-4 flex justify-center lg:justify-end">
                    <a
                        href="https://instagram.com/yuksi.tr"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 text-[#333333]"
                        style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                    >
                        <img
                            src={figmaInstagramIcon}
                            alt="Instagram"
                            className="w-8 h-8"
                        />
                        <span className="font-semibold text-[16px] lg:text-[24px]">yuksi.tr</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

