import { useState } from 'react';
import kangarooCarrier from '../../assets/carrier/kangaroo-carrier.png';

interface FormData {
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
    const [formData, setFormData] = useState<FormData>({
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
    });

    const [vehicleDocName, setVehicleDocName] = useState<string>('');
    const [carrierDocName, setCarrierDocName] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'vehicle' | 'carrier') => {
        const file = e.target.files?.[0];
        if (file) {
            if (type === 'vehicle') {
                setFormData(prev => ({ ...prev, vehicleDocument: file }));
                setVehicleDocName(file.name);
            } else {
                setFormData(prev => ({ ...prev, carrierDocument: file }));
                setCarrierDocName(file.name);
            }
        }
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            acceptedTerms: e.target.checked,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic will be added here
        console.log('Form submitted:', formData);
    };

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
                        <div className="w-full h-full relative -ml-8 lg:-ml-24 xl:-ml-32">
                            <img
                                src={kangarooCarrier}
                                alt="Kangaroo Carrier"
                                className="w-full h-full object-contain kangaroo-animate"
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
                        <form onSubmit={handleSubmit} className="max-w-[532px] mx-auto lg:mx-0 space-y-6">
                    {/* İsim */}
                    <div className="relative">
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
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
                            value={formData.lastName}
                            onChange={handleInputChange}
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
                            value={formData.city}
                            onChange={handleInputChange}
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
                            value={formData.email}
                            onChange={handleInputChange}
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
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Telefon Numarası"
                            className="w-full h-16 bg-[#FF5B04] rounded-[5px] px-6 text-white placeholder-white font-semibold text-base shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] focus:outline-none focus:ring-2 focus:ring-[#FF5B04]/50"
                            required
                        />
                    </div>

                    {/* Araç Türü */}
                    <div className="relative">
                        <select
                            name="vehicleType"
                            value={formData.vehicleType}
                            onChange={handleInputChange}
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
                            value={formData.vehicleYear}
                            onChange={handleInputChange}
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
                                    onChange={(e) => handleFileChange(e, 'vehicle')}
                                    className="hidden"
                                />
                                <label
                                    htmlFor="vehicleDocument"
                                    className="w-full h-16 bg-[#FF5B04] rounded-[5px] px-6 flex items-center text-white font-semibold text-base shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] cursor-pointer"
                                >
                                    <span className="flex-1 text-left">
                                        {vehicleDocName || 'Araç Belgeri Yükle'}
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
                                    onChange={(e) => handleFileChange(e, 'carrier')}
                                    className="hidden"
                                />
                                <label
                                    htmlFor="carrierDocument"
                                    className="w-full h-16 bg-[#FF5B04] rounded-[5px] px-6 flex items-center text-white font-semibold text-base shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] cursor-pointer"
                                >
                                    <span className="flex-1 text-left">
                                        {carrierDocName || 'Taşıyıcı Belgelerini Yükle'}
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
                            checked={formData.acceptedTerms}
                            onChange={handleCheckboxChange}
                            className="w-5 h-5 rounded-[5px] border-2 border-[#FF5B04] bg-[#ffc3a3] text-[#FF5B04] focus:ring-[#FF5B04] cursor-pointer"
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
                            className="w-full h-16 bg-[#333] rounded-[5px] text-white font-bold text-2xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] hover:bg-[#2a2a2a] transition-colors"
                        >
                            Gönder
                        </button>
                    </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
