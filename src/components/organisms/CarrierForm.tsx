import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import kangarooCarrier from '../../assets/carrier/kangaroo-carrier.png';
import { submitCarrierApplication } from '../../services/carrierService';
import { Input } from '../atoms/Input';
import { Select } from '../atoms/Select';
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
    const { t } = useTranslation();

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

            if (!values.firstName) errors.firstName = t('carrier.form.validation.required');
            if (!values.lastName) errors.lastName = t('carrier.form.validation.required');
            if (!values.city) errors.city = t('carrier.form.validation.required');
            if (!values.email) errors.email = t('carrier.form.validation.required');
            if (!values.phone) errors.phone = t('carrier.form.validation.required');
            if (!values.vehicleType) errors.vehicleType = t('carrier.form.validation.required');
            if (!values.vehicleYear) errors.vehicleYear = t('carrier.form.validation.required');
            if (values.vehicleYear && Number.isNaN(Number(values.vehicleYear))) errors.vehicleYear = t('carrier.form.validation.yearNumber');
            if (!values.vehicleDocument) errors.vehicleDocument = t('carrier.form.validation.required');
            if (!values.carrierDocument) errors.carrierDocument = t('carrier.form.validation.required');

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
                    terms_accepted: true,
                    vehicle_documents: values.vehicleDocument as File,
                    carrier_documents: values.carrierDocument as File,
                });

                toast.success(t('carrier.form.success'));
                helpers.resetForm();
            } catch (error: unknown) {
                console.error('Carrier application error:', error);
                
                // Check if it's a CORS error
                if (error instanceof Error && 'isCorsError' in error && (error as Error & { isCorsError: boolean }).isCorsError) {
                    toast.error(
                        t('carrier.form.error') + ' ' + 
                        'CORS Error: Please contact support or check your network connection.'
                    );
                } else {
                    toast.error(t('carrier.form.error'));
                }
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
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[65px] font-bold text-[#032c95] leading-tight mb-4 sm:mb-6">
                                {t('carrier.form.title')}
                                <br />
                                {t('carrier.form.title2')}
                            </h1>
                            <p className="text-lg sm:text-xl lg:text-2xl text-[#032c95] font-medium">
                                {t('carrier.form.subtitle')}
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
                                placeholder={t('carrier.form.firstName')}
                                required
                            />

                            {/* Soy İsim */}
                            <Input
                                type="text"
                                name="lastName"
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder={t('carrier.form.lastName')}
                                required
                            />

                            {/* Şehir */}
                            <Input
                                type="text"
                                name="city"
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder={t('carrier.form.city')}
                                required
                            />

                            {/* E-mail */}
                            <Input
                                type="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder={t('carrier.form.email')}
                                required
                            />

                            {/* Telefon Numarası */}
                            <Input
                                type="tel"
                                name="phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder={t('carrier.form.phone')}
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
                                    {t('carrier.form.vehicleType')}
                                </option>
                                <option value="motorcycle" className="bg-white text-[#333]">
                                    {t('carrier.form.vehicles.motorcycle')}
                                </option>
                                <option value="minivan" className="bg-white text-[#333]">
                                    {t('carrier.form.vehicles.minivan')}
                                </option>
                                <option value="panelvan" className="bg-white text-[#333]">
                                    {t('carrier.form.vehicles.panelvan')}
                                </option>
                                <option value="pickup" className="bg-white text-[#333]">
                                    {t('carrier.form.vehicles.pickup')}
                                </option>
                                <option value="truck" className="bg-white text-[#333]">
                                    {t('carrier.form.vehicles.truck')}
                                </option>
                            </Select>

                            {/* Trafiğe Çıkış Yılı */}
                            <Input
                                type="text"
                                name="vehicleYear"
                                value={formik.values.vehicleYear}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder={t('carrier.form.vehicleYear')}
                                required
                            />

                            {/* Araç Belgeri Yükle */}
                            <FileUpload
                                id="vehicleDocument"
                                accept=".pdf,.jpg,.jpeg,.png"
                                onChange={(file) => void formik.setFieldValue('vehicleDocument', file)}
                                value={formik.values.vehicleDocument}
                                placeholder={t('carrier.form.vehicleDocument')}
                                helperText={t('carrier.form.vehicleDocumentHelper')}
                            />

                            {/* Taşıyıcı Belgelerini Yükle */}
                            <FileUpload
                                id="carrierDocument"
                                accept=".pdf,.jpg,.jpeg,.png"
                                onChange={(file) => void formik.setFieldValue('carrierDocument', file)}
                                value={formik.values.carrierDocument}
                                placeholder={t('carrier.form.carrierDocument')}
                                helperText={t('carrier.form.carrierDocumentHelper')}
                            />

                            {/* Gönder Butonu */}
                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    disabled={formik.isSubmitting}
                                    className="w-full h-16 bg-[#333] hover:bg-[#2a2a2a] text-white font-bold text-2xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {formik.isSubmitting ? t('carrier.form.submitting') : t('carrier.form.submit')}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
