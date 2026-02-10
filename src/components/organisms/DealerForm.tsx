import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { Input } from '../atoms/Input';
import { Textarea } from '../atoms/Textarea';
import { Button } from '../atoms/Button';
import { Select } from '../atoms/Select';
import bayiImage from '../../assets/basvuru/bayi.png';
import { submitDealerForm } from '../../services/dealerFormService';
import type { StateItem } from '../../services/locationService.ts';
import { fetchStates } from '../../services/locationService.ts';

interface DealerFormValues {
    name: string;
    city: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export function DealerForm() {
    const { t } = useTranslation();
    const [cities, setCities] = useState<string[]>([]);
    const [loadingCities, setLoadingCities] = useState(false);
    const [cityFetchError, setCityFetchError] = useState<string | null>(null);

    useEffect(() => {
        const loadCities = async () => {
            setLoadingCities(true);
            setCityFetchError(null);
            try {
                const states = await fetchStates();
                const uniqueNames: string[] = [];
                states.forEach((state: StateItem) => {
                    const name = state.name;
                    if (name && typeof name === 'string' && !uniqueNames.includes(name)) {
                        uniqueNames.push(name);
                    }
                });
                setCities(uniqueNames);
            } catch (error) {
                console.error('Dealer cities fetch error:', error);
                setCityFetchError(t('common.error'));
            } finally {
                setLoadingCities(false);
            }
        };

        loadCities();
    }, [t]);

    const formik = useFormik<DealerFormValues>({
        initialValues: {
            name: '',
            city: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        },
        validate: (values) => {
            const errors: Partial<Record<keyof DealerFormValues, string>> = {};

            // Name validation
            if (!values.name) {
                errors.name = t('dealer.form.validation.nameRequired');
            } else if (values.name.length < 2) {
                errors.name = t('dealer.form.validation.nameMin');
            } else if (values.name.length > 200) {
                errors.name = t('dealer.form.validation.nameMax');
            }

            // City validation
            if (!values.city) {
                errors.city = t('dealer.form.validation.cityRequired');
            } else if (values.city.length < 2) {
                errors.city = t('dealer.form.validation.cityMin');
            } else if (values.city.length > 100) {
                errors.city = t('dealer.form.validation.cityMax');
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!values.email) {
                errors.email = t('dealer.form.validation.emailRequired');
            } else if (!emailRegex.test(values.email)) {
                errors.email = t('dealer.form.validation.emailInvalid');
            }

            // Phone validation
            if (!values.phone) {
                errors.phone = t('dealer.form.validation.phoneRequired');
            } else if (values.phone.length < 5) {
                errors.phone = t('dealer.form.validation.phoneMin');
            } else if (values.phone.length > 50) {
                errors.phone = t('dealer.form.validation.phoneMax');
            }

            // Subject validation
            if (!values.subject) {
                errors.subject = t('dealer.form.validation.subjectRequired');
            } else if (values.subject.length < 2) {
                errors.subject = t('dealer.form.validation.subjectMin');
            } else if (values.subject.length > 200) {
                errors.subject = t('dealer.form.validation.subjectMax');
            }

            // Message validation
            if (!values.message) {
                errors.message = t('dealer.form.validation.messageRequired');
            } else if (values.message.length < 2) {
                errors.message = t('dealer.form.validation.messageMin');
            } else if (values.message.length > 5000) {
                errors.message = t('dealer.form.validation.messageMax');
            }

            return errors;
        },
        onSubmit: async (values, helpers) => {
            try {
                const response = await submitDealerForm({
                    name: values.name,
                    city: values.city,
                    email: values.email,
                    phone: values.phone,
                    subject: values.subject,
                    message: values.message,
                });

                if (response.success) {
                    toast.success(t('dealer.form.success'));
                    helpers.resetForm();
                } else {
                    toast.error(t('dealer.form.error'));
                }
            } catch (error: unknown) {
                console.error('Dealer form error:', error);
                
                // Check if it's a CORS error
                if (error instanceof Error && 'isCorsError' in error && (error as Error & { isCorsError: boolean }).isCorsError) {
                    toast.error(
                        t('dealer.form.error') + ' ' + 
                        'CORS Error: Please contact support or check your network connection.'
                    );
                } else {
                    toast.error(t('dealer.form.error'));
                }
            }
        },
    });

    return (
        <section className="w-full bg-white pt-12 lg:pt-20 pb-8 lg:pb-0">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-stretch">
                    {/* Left - Bayi Image */}
                    <div className="w-full lg:w-[55%] flex items-start justify-center lg:justify-start">
                        <div className="relative w-full max-w-[800px] lg:max-w-none lg:translate-x-[-40px]">
                            <img
                                src={bayiImage}
                                alt="Gitgönder Bayi"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Right - Form & content */}
                    <div className="w-full lg:w-[45%] flex flex-col gap-8">
                        <div className="text-center lg:text-left">
                            <h1
                                className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#032c95] leading-tight mb-6"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                {t('dealer.form.title')}
                            </h1>

                            <form
                                onSubmit={formik.handleSubmit}
                                className="max-w-[532px] mx-auto lg:mx-0 space-y-4"
                            >
                                {/* İsim/Soy İsim */}
                                <div>
                                    <Input
                                        type="text"
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder={t('dealer.form.namePlaceholder')}
                                        error={!!(formik.touched.name && formik.errors.name)}
                                    />
                                    {formik.touched.name && formik.errors.name && (
                                        <p className="mt-1 text-sm text-red-500">{formik.errors.name}</p>
                                    )}
                                </div>

                                {/* E-mail */}
                                <div>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder={t('dealer.form.emailPlaceholder')}
                                        error={!!(formik.touched.email && formik.errors.email)}
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
                                    )}
                                </div>

                                {/* Şehir */}
                                <div>
                                    <Select
                                        variant="primary"
                                        name="city"
                                        value={formik.values.city}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        disabled={loadingCities || !!cityFetchError}
                                        error={!!(formik.touched.city && formik.errors.city)}
                                        className=""
                                    >
                                        <option value="">
                                            {loadingCities
                                                ? t('common.loading')
                                                : cityFetchError || t('dealer.form.cityPlaceholder')}
                                        </option>
                                        {cities.map((city) => (
                                            <option key={city} value={city}>
                                                {city}
                                            </option>
                                        ))}
                                    </Select>
                                    {cityFetchError && (
                                        <p className="mt-1 text-sm text-red-500">{cityFetchError}</p>
                                    )}
                                    {formik.touched.city && formik.errors.city && (
                                        <p className="mt-1 text-sm text-red-500">{formik.errors.city}</p>
                                    )}
                                </div>

                                {/* Telefon Numarası */}
                                <div>
                                    <Input
                                        type="tel"
                                        name="phone"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder={t('dealer.form.phonePlaceholder')}
                                        error={!!(formik.touched.phone && formik.errors.phone)}
                                    />
                                    {formik.touched.phone && formik.errors.phone && (
                                        <p className="mt-1 text-sm text-red-500">{formik.errors.phone}</p>
                                    )}
                                </div>

                                {/* Mesajınızın Konusu */}
                                <div>
                                    <Input
                                        type="text"
                                        name="subject"
                                        value={formik.values.subject}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder={t('dealer.form.subjectPlaceholder')}
                                        error={!!(formik.touched.subject && formik.errors.subject)}
                                    />
                                    {formik.touched.subject && formik.errors.subject && (
                                        <p className="mt-1 text-sm text-red-500">{formik.errors.subject}</p>
                                    )}
                                </div>

                                {/* Mesaj */}
                                <div>
                                    <Textarea
                                        name="message"
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder={t('dealer.form.messagePlaceholder')}
                                        className="h-[182px]"
                                        error={!!(formik.touched.message && formik.errors.message)}
                                    />
                                    {formik.touched.message && formik.errors.message && (
                                        <p className="mt-1 text-sm text-red-500">{formik.errors.message}</p>
                                    )}
                                </div>

                                {/* Gönder Butonu */}
                                <div className="pt-2">
                                    <Button
                                        type="submit"
                                        disabled={formik.isSubmitting}
                                        className="w-full h-16 bg-[#333333] hover:bg-[#2a2a2a] text-white font-bold text-xl sm:text-2xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {formik.isSubmitting ? t('dealer.form.submitting') : t('dealer.form.submit')}
                                    </Button>
                                </div>
                            </form>
                        </div>

                        {/* Bottom contact information */}
                        <div className="max-w-[790px] text-[#333333] text-sm sm:text-base space-y-3">
                            <p
                                className="font-semibold"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                {t('dealer.form.contactInfo')}{' '}
                                <a
                                    href="mailto:info@gitgönder.tr"
                                    className="text-[#032c95] underline"
                                >
                                    info@gitgönder.tr
                                </a>{' '}
                                {t('dealer.form.contactInfo2')}
                            </p>
                            <p style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                                {t('dealer.form.phoneLabel')}:
                                <span className="font-medium"> 0850 241 93 16</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
