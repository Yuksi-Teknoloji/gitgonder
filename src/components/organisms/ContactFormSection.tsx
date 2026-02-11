import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { Input } from '../atoms/Input';
import { Textarea } from '../atoms/Textarea';
import { Button } from '../atoms/Button';
import instagramIcon from '../../assets/contact/instagram.svg';
import { submitSiteContact } from '../../services/siteContactService';

interface ContactFormValues {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    acceptedTerms: boolean;
}

export function ContactFormSection() {
    const { t } = useTranslation();

    const formik = useFormik<ContactFormValues>({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            acceptedTerms: false,
        },
        validate: (values) => {
            const errors: Partial<Record<keyof ContactFormValues, string>> = {};

            // Name validation: min 2, max 200
            if (!values.name) {
                errors.name = t('contact.form.validation.nameRequired');
            } else if (values.name.length < 2) {
                errors.name = t('contact.form.validation.nameMin');
            } else if (values.name.length > 200) {
                errors.name = t('contact.form.validation.nameMax');
            }

            // Email validation: required and valid format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!values.email) {
                errors.email = t('contact.form.validation.emailRequired');
            } else if (!emailRegex.test(values.email)) {
                errors.email = t('contact.form.validation.emailInvalid');
            }

            // Phone validation: min 5, max 50
            if (!values.phone) {
                errors.phone = t('contact.form.validation.phoneRequired');
            } else if (values.phone.length < 5) {
                errors.phone = t('contact.form.validation.phoneMin');
            } else if (values.phone.length > 50) {
                errors.phone = t('contact.form.validation.phoneMax');
            }

            // Subject validation: min 2, max 200
            if (!values.subject) {
                errors.subject = t('contact.form.validation.subjectRequired');
            } else if (values.subject.length < 2) {
                errors.subject = t('contact.form.validation.subjectMin');
            } else if (values.subject.length > 200) {
                errors.subject = t('contact.form.validation.subjectMax');
            }

            // Message validation: min 2, max 5000
            if (!values.message) {
                errors.message = t('contact.form.validation.messageRequired');
            } else if (values.message.length < 2) {
                errors.message = t('contact.form.validation.messageMin');
            } else if (values.message.length > 5000) {
                errors.message = t('contact.form.validation.messageMax');
            }

            return errors;
        },
        onSubmit: async (values, helpers) => {
            try {
                const response = await submitSiteContact({
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    subject: values.subject,
                    message: values.message,
                    terms_accepted: true,
                });

                if (response.success) {
                    toast.success(t('contact.form.success'));
                    helpers.resetForm();
                } else {
                    toast.error(t('contact.form.error'));
                }
            } catch (error: unknown) {
                console.error('Contact form error:', error);
                
                // Check if it's a CORS error
                if (error instanceof Error && 'isCorsError' in error && (error as Error & { isCorsError: boolean }).isCorsError) {
                    toast.error(
                        t('contact.form.error') + ' ' + 
                        'CORS Error: Please contact support or check your network connection.'
                    );
                } else {
                    toast.error(t('contact.form.error'));
                }
            }
        },
    });

    return (
        <section className="w-full bg-white pt-12 lg:pt-20 pb-8 lg:pb-0">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-stretch">
                    {/* Left - Content */}
                    <div className="w-full lg:w-[55%] flex items-start justify-center lg:justify-start">
                        <div className="w-full max-w-[800px]">
                            <h1
                                className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#032c95] leading-tight mb-6"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                {t('contact.form.title')}
                            </h1>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="w-full lg:w-[45%] flex flex-col gap-8">
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
                                    placeholder={t('contact.form.namePlaceholder')}
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
                                    placeholder={t('contact.form.emailPlaceholder')}
                                    error={!!(formik.touched.email && formik.errors.email)}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
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
                                    placeholder={t('contact.form.phonePlaceholder')}
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
                                    placeholder={t('contact.form.subjectPlaceholder')}
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
                                    placeholder={t('contact.form.messagePlaceholder')}
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
                                    {formik.isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                                </Button>
                            </div>
                        </form>

                        {/* Bottom contact information */}
                        <div className="max-w-[790px] text-[#333333] text-sm sm:text-base space-y-3">
                            <p
                                className="font-semibold"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                {t('contact.form.contactInfo')}{' '}
                                <a
                                    href="mailto:info@gitgönder.tr"
                                    className="text-[#032c95] underline"
                                >
                                    info@gitgönder.tr
                                </a>{' '}
                                {t('contact.form.contactInfo2')}
                            </p>
                            <p style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                                {t('contact.form.phoneLabel')}:
                                <span className="font-medium"> 0850 241 93 16</span>
                            </p>
                            {/* Instagram */}
                            <a
                                href="https://instagram.com/yuksi.tr"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-[#333333] hover:text-[#032c95] transition-colors"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                <img
                                    src={instagramIcon}
                                    alt="Instagram"
                                    className="w-6 h-6"
                                />
                                <span className="font-semibold">yuksi.tr</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

