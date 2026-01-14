import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import kangarooCarrier from '../../assets/carrier/kangaroo-carrier.png';
import { submitCarrierApplication } from '../../services/carrierService';
import { Input } from '../atoms/Input';
import { Select } from '../atoms/Select';
import { Checkbox } from '../atoms/Checkbox';
import { FileUpload } from '../atoms/FileUpload';
import { Button } from '../atoms/Button';

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
                    <Input
                        type="text"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="İsim"
                        required
                    />

                    {/* Soy İsim */}
                    <Input
                        type="text"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Soy İsim"
                        required
                    />

                    {/* Şehir */}
                    <Input
                        type="text"
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Şehir"
                        required
                    />

                    {/* E-mail */}
                    <Input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="E-mail"
                        required
                    />

                    {/* Telefon Numarası */}
                    <Input
                        type="tel"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Telefon Numarası"
                        required
                    />

                    {/* Araç Türü */}
                    <Select
                        name="vehicleType"
                        value={formik.values.vehicleType}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
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
                    </Select>

                    {/* Trafiğe Çıkış Yılı */}
                    <Input
                        type="text"
                        name="vehicleYear"
                        value={formik.values.vehicleYear}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Trafiğe Çıkış Yılı"
                        required
                    />

                    {/* Araç Belgeri Yükle */}
                    <FileUpload
                        id="vehicleDocument"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(file) => void formik.setFieldValue('vehicleDocument', file)}
                        value={formik.values.vehicleDocument}
                        placeholder="Araç Belgeri Yükle"
                        helperText="Ruhsat/Ticari belgesi"
                    />

                    {/* Taşıyıcı Belgelerini Yükle */}
                    <FileUpload
                        id="carrierDocument"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(file) => void formik.setFieldValue('carrierDocument', file)}
                        value={formik.values.carrierDocument}
                        placeholder="Taşıyıcı Belgelerini Yükle"
                        helperText="Adli Sicil Belgesi/ Ehliyet"
                    />

                    {/* Kabul onay tiki */}
                    <Checkbox
                        id="acceptedTerms"
                        name="acceptedTerms"
                        checked={formik.values.acceptedTerms}
                        onChange={formik.handleChange}
                        label="Kabul onay tiki"
                        required
                    />

                    {/* Gönder Butonu */}
                    <div className="pt-4">
                        <Button
                            type="submit"
                            disabled={formik.isSubmitting}
                            className="w-full h-16 bg-[#333] hover:bg-[#2a2a2a] text-white font-bold text-2xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {formik.isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                        </Button>
                    </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
