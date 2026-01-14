import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import kangarooCarrier from '../../assets/carrier/kangaroo-carrier.png';
import { submitCarrierApplication } from '../../services/carrierService';

interface FormValues {
    firstName: string;
    lastName: string;
    city: string;
    email: string;
    phone: string;
    vehicleType: string;
    vehicleYear: string;
    vehicleDocument: File | null;
    carrierDocument: File | null;
    acceptedTerms: boolean;
}

export function CarrierForm() {
    const formik = useFormik<FormValues>({
        initialValues: {
            firstName: '',
            lastName: '',
            city: '',
            email: '',
            phone: '',
            vehicleType: '',
            vehicleYear: '',
            vehicleDocument: null,
            carrierDocument: null,
            acceptedTerms: false,
        },
        validate: (values) => {
            const errors: Partial<Record<keyof FormValues, string>> = {};

            if (!values.firstName) errors.firstName = 'Zorunlu';
            if (!values.lastName) errors.lastName = 'Zorunlu';
            if (!values.city) errors.city = 'Zorunlu';
            if (!values.email) errors.email = 'Zorunlu';
            if (!values.phone) errors.phone = 'Zorunlu';
            if (!values.vehicleType) errors.vehicleType = 'Zorunlu';
            if (!values.vehicleYear) errors.vehicleYear = 'Zorunlu';
            if (values.vehicleYear && Number.isNaN(Number(values.vehicleYear))) errors.vehicleYear = 'Yıl sayı olmalı';
            if (!values.vehicleDocument) errors.vehicleDocument = 'Zorunlu';
            if (!values.carrierDocument) errors.carrierDocument = 'Zorunlu';
            if (!values.acceptedTerms) errors.acceptedTerms = 'Zorunlu';

            return errors;
        },
        onSubmit: async (values, helpers) => {
            try {
                await submitCarrierApplication({
                    first_name: values.firstName,
                    last_name: values.lastName,
                    city: values.city,
                    email: values.email,
                    phone_number: values.phone,
                    vehicle_type: values.vehicleType,
                    vehicle_registration_year: Number(values.vehicleYear),
                    terms_accepted: values.acceptedTerms,
                    vehicle_documents: values.vehicleDocument as File,
                    carrier_documents: values.carrierDocument as File,
                });

                toast.success('Başvurunuz başarıyla gönderildi.');
                helpers.resetForm();
            } catch (error) {
                console.error('Carrier application error:', error);
                toast.error('Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
            }
        },
    });

    return (
        <section className="w-full bg-white py-12 lg:py-20">
            <style>{`
                @keyframes driveIn {
                    0% {
                        transform: translateX(-100%) scale(1.3);
                        opacity: 0;
                    }
                    100% {
                        transform: translateX(-15%) scale(1.3);
                        opacity: 1;
                    }
                }
                .kangaroo-animate {
                    animation: driveIn 1.5s ease-out forwards;
                }
            `}</style>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Layout: %50 Kangaroo, %50 Form */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left Side - Kangaroo (%50) */}
                    <div className="w-full lg:w-[50%] flex items-center justify-center lg:justify-start order-2 lg:order-1 relative overflow-visible">
                        <div className="w-full h-full relative ml-4 lg:ml-8 xl:ml-10">
                            <img
                                src={kangarooCarrier}
                                alt="Kangaroo Carrier"
                                className="w-full h-full object-contain kangaroo-animate transform scale-[1.08] lg:scale-[1.15]"
                            />
                        </div>
                    </div>

                    {/* Right Side - Form (%50) */}
                    <div className="w-full lg:w-[50%] order-1 lg:order-2">
                        <div className="text-center lg:text-left mb-8 lg:mb-12">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[65px] font-bold text-[#FF5B04] leading-tight mb-4 sm:mb-6">
                                TAŞIYICI OL
                                <br />
                                SEN DE ARAMIZA KATIL!
                            </h1>
                            <p className="text-lg sm:text-xl lg:text-2xl text-[#FF5B04] font-medium">
                                Taşıyıcı olmak için formu doldur
                            </p>
                        </div>
                        <form onSubmit={formik.handleSubmit} className="max-w-[532px] mx-auto lg:mx-0 space-y-6">
                    {/* İsim */}
                    <div className="relative">
                        <input
                            type="text"
                            name="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="İsim"
                            className="w-full h-16 bg-[#FF5B04] rounded-[5px] px-6 text-white placeholder-white font-semibold text-base shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] focus:outline-none focus:ring-2 focus:ring-[#FF5B04]/50"
                            required
                        />
                    </div>

                    {/* Soy İsim */}
                    <div className="relative">
                        <input
                            type="text"
                            name="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Soy İsim"
                            className="w-full h-16 bg-[#FF5B04] rounded-[5px] px-6 text-white placeholder-white font-semibold text-base shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] focus:outline-none focus:ring-2 focus:ring-[#FF5B04]/50"
                            required
                        />
                    </div>

                    {/* Şehir */}
                    <div className="relative">
                        <input
                            type="text"
                            name="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Şehir"
                            className="w-full h-16 bg-[#FF5B04] rounded-[5px] px-6 text-white placeholder-white font-semibold text-base shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] focus:outline-none focus:ring-2 focus:ring-[#FF5B04]/50"
                            required
                        />
                    </div>

                    {/* E-mail */}
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="E-mail"
                            className="w-full h-16 bg-[#FF5B04] rounded-[5px] px-6 text-white placeholder-white font-semibold text-base shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] focus:outline-none focus:ring-2 focus:ring-[#FF5B04]/50"
                            required
                        />
                    </div>

                    {/* Telefon Numarası */}
                    <div className="relative">
                        <input
                            type="tel"
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Telefon Numarası"
                            className="w-full h-16 bg-[#FF5B04] rounded-[5px] px-6 text-white placeholder-white font-semibold text-base shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] focus:outline-none focus:ring-2 focus:ring-[#FF5B04]/50"
                            required
                        />
                    </div>

                    {/* Araç Türü */}
                    <div className="relative">
                        <select
                            name="vehicleType"
                            value={formik.values.vehicleType}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="w-full h-16 bg-[#FF5B04] rounded-[5px] px-6 pr-12 text-white font-semibold text-base shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] focus:outline-none focus:ring-2 focus:ring-[#FF5B04]/50 appearance-none cursor-pointer"
                            required
                        >
                            <option value="" disabled className="bg-white text-[#333]">
                                Araç Türü
                            </option>
                            <option value="motorcycle" className="bg-white text-[#333]">
                                Motosiklet
                            </option>
                            <option value="minivan" className="bg-white text-[#333]">
                                Minivan
                            </option>
                            <option value="panelvan" className="bg-white text-[#333]">
                                Panelvan
                            </option>
                            <option value="pickup" className="bg-white text-[#333]">
                                Kamyonet
                            </option>
                            <option value="truck" className="bg-white text-[#333]">
                                Kamyon
                            </option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* Trafiğe Çıkış Yılı */}
                    <div className="relative">
                        <input
                            type="text"
                            name="vehicleYear"
                            value={formik.values.vehicleYear}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Trafiğe Çıkış Yılı"
                            className="w-full h-16 bg-[#FF5B04] rounded-[5px] px-6 text-white placeholder-white font-semibold text-base shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] focus:outline-none focus:ring-2 focus:ring-[#FF5B04]/50"
                            required
                        />
                    </div>

                    {/* Araç Belgeri Yükle */}
                    <div className="space-y-2">
                        <div className="flex gap-3">
                            <div className="flex-1 relative">
                                <input
                                    type="file"
                                    id="vehicleDocument"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    onChange={(e) => {
                                        const file = e.currentTarget.files?.[0] || null;
                                        void formik.setFieldValue('vehicleDocument', file);
                                    }}
                                    className="hidden"
                                />
                                <label
                                    htmlFor="vehicleDocument"
                                    className="w-full h-16 bg-[#FF5B04] rounded-[5px] px-6 flex items-center text-white font-semibold text-base shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] cursor-pointer"
                                >
                                    <span className="flex-1 text-left">
                                        {formik.values.vehicleDocument?.name || 'Araç Belgeri Yükle'}
                                    </span>
                                </label>
                            </div>
                            <label
                                htmlFor="vehicleDocument"
                                className="w-[114px] h-16 bg-[#3a3a3a] rounded-[5px] text-white font-bold text-base shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] hover:bg-[#2a2a2a] transition-colors flex items-center justify-center cursor-pointer"
                            >
                                Yükle
                            </label>
                        </div>
                        <p className="text-xs text-white font-normal px-2">
                            Ruhsat/Ticari belgesi
                        </p>
                    </div>

                    {/* Taşıyıcı Belgelerini Yükle */}
                    <div className="space-y-2">
                        <div className="flex gap-3">
                            <div className="flex-1 relative">
                                <input
                                    type="file"
                                    id="carrierDocument"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    onChange={(e) => {
                                        const file = e.currentTarget.files?.[0] || null;
                                        void formik.setFieldValue('carrierDocument', file);
                                    }}
                                    className="hidden"
                                />
                                <label
                                    htmlFor="carrierDocument"
                                    className="w-full h-16 bg-[#FF5B04] rounded-[5px] px-6 flex items-center text-white font-semibold text-base shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] cursor-pointer"
                                >
                                    <span className="flex-1 text-left">
                                        {formik.values.carrierDocument?.name || 'Taşıyıcı Belgelerini Yükle'}
                                    </span>
                                </label>
                            </div>
                            <label
                                htmlFor="carrierDocument"
                                className="w-[114px] h-16 bg-[#3a3a3a] rounded-[5px] text-white font-bold text-base shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] hover:bg-[#2a2a2a] transition-colors flex items-center justify-center cursor-pointer"
                            >
                                Yükle
                            </label>
                        </div>
                        <p className="text-xs text-white font-normal px-2">
                            Adli Sicil Belgesi/ Ehliyet
                        </p>
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
                            required
                        />
                        <label
                            htmlFor="acceptedTerms"
                            className="text-[#FF5B04] font-semibold text-base cursor-pointer"
                        >
                            Kabul onay tiki
                        </label>
                    </div>

                    {/* Gönder Butonu */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={formik.isSubmitting}
                            className="w-full h-16 bg-[#333] rounded-[5px] text-white font-bold text-2xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] hover:bg-[#2a2a2a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {formik.isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                        </button>
                    </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
