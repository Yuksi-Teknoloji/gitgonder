import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import arrowRightIcon from '../../assets/icons/arrow-right.svg';
import { submitHelpRequest } from '../../services/helpService';

interface HelpFormValues {
    name: string;
    email: string;
    message: string;
}

export function HelpHero() {
    const { t } = useTranslation();

    const formik = useFormik<HelpFormValues>({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate: (values) => {
            const errors: Partial<Record<keyof HelpFormValues, string>> = {};

            // Name validation
            if (!values.name) {
                errors.name = t('help.hero.validation.nameRequired');
            } else if (values.name.length < 2) {
                errors.name = t('help.hero.validation.nameMin');
            } else if (values.name.length > 200) {
                errors.name = t('help.hero.validation.nameMax');
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!values.email) {
                errors.email = t('help.hero.validation.emailRequired');
            } else if (!emailRegex.test(values.email)) {
                errors.email = t('help.hero.validation.emailInvalid');
            }

            // Message validation
            if (!values.message) {
                errors.message = t('help.hero.validation.messageRequired');
            } else if (values.message.length < 2) {
                errors.message = t('help.hero.validation.messageMin');
            } else if (values.message.length > 5000) {
                errors.message = t('help.hero.validation.messageMax');
            }

            return errors;
        },
        onSubmit: async (values, helpers) => {
            try {
                const response = await submitHelpRequest({
                    name: values.name,
                    email: values.email,
                    message: values.message,
                });

                if (response.success) {
                    toast.success(t('help.hero.success'));
                    helpers.resetForm();
                } else {
                    toast.error(t('help.hero.error'));
                }
            } catch (error: unknown) {
                console.error('Help form error:', error);
                
                // Check if it's a CORS error
                if (error instanceof Error && 'isCorsError' in error && (error as Error & { isCorsError: boolean }).isCorsError) {
                    toast.error(
                        t('help.hero.error') + ' ' + 
                        'CORS Error: Please contact support or check your network connection.'
                    );
                } else {
                    toast.error(t('help.hero.error'));
                }
            }
        },
    });

    return (
        <section className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[822px] overflow-hidden">
            {/* Content Container */}
            <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] py-6 sm:py-8 md:py-10 lg:py-12 xl:py-20">
                <div className="relative w-full max-w-[1920px] mx-auto min-h-[600px] lg:min-h-[700px] xl:min-h-[822px]">
                    {/* Center/Right Side - Title and Form */}
                    <div className="w-full lg:max-w-[550px] xl:max-w-[917px] 2xl:max-w-[1000px] mx-auto lg:mx-0 flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                        {/* Main Title */}
                        <h1
                            className="text-[#032c95] text-[28px] sm:text-[36px] md:text-[45px] lg:text-[52px] xl:text-[65px] 2xl:text-[70px] font-bold leading-tight sm:leading-normal whitespace-pre-wrap mt-4 sm:mt-6 lg:mt-0"
                            style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                        >
                            <p className="mb-0">{t('help.hero.titleLine1')}</p>
                            <p>{t('help.hero.titleLine2')}</p>
                        </h1>

                        {/* Contact Form */}
                        <form onSubmit={formik.handleSubmit} className="mt-4 sm:mt-6 lg:mt-8 flex flex-col gap-4 sm:gap-5">
                            {/* Form Title */}
                            <p
                                className="text-[#333] text-[20px] sm:text-[24px] lg:text-[28px] font-medium"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                {t('help.hero.formTitle')}
                            </p>

                            {/* Message Input */}
                            <div className="w-full sm:w-full lg:w-[calc(384px*2+20px)] xl:w-[calc(384px*2+20px)]">
                                <div className={`bg-gray-100 rounded-[10px] shadow-[0px_4px_18.3px_0px_rgba(0,0,0,0.1)] p-4 ${formik.touched.message && formik.errors.message ? 'ring-2 ring-red-400' : ''}`}>
                                    <textarea
                                        name="message"
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder={t('help.hero.messagePlaceholder')}
                                        className="w-full h-[120px] sm:h-[140px] lg:h-[168px] bg-transparent border-none outline-none text-[#333] placeholder-gray-500 text-sm sm:text-base resize-none"
                                        style={{ fontFamily: 'Roboto, sans-serif' }}
                                    />
                                </div>
                                {formik.touched.message && formik.errors.message && (
                                    <p className="mt-1 text-sm text-red-500 font-medium">{formik.errors.message}</p>
                                )}
                            </div>

                            {/* Name and Email Inputs */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 w-full sm:w-full lg:w-[calc(384px*2+20px)] xl:w-[calc(384px*2+20px)]">
                                <div className="flex-1 lg:max-w-[384px] xl:max-w-[384px]">
                                    <p
                                        className="text-[#333] text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[28px] font-medium mb-2"
                                        style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                                    >
                                        {t('help.hero.nameLabel')}
                                    </p>
                                    <div className={`bg-gray-100 rounded-[10px] shadow-[0px_4px_18.3px_0px_rgba(0,0,0,0.1)] p-3 sm:p-4 h-[51px] flex items-center ${formik.touched.name && formik.errors.name ? 'ring-2 ring-red-400' : ''}`}>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            placeholder=""
                                            className="w-full bg-transparent border-none outline-none text-[#333] placeholder-gray-500 text-sm sm:text-base"
                                            style={{ fontFamily: 'Roboto, sans-serif' }}
                                        />
                                    </div>
                                    {formik.touched.name && formik.errors.name && (
                                        <p className="mt-1 text-sm text-red-500 font-medium">{formik.errors.name}</p>
                                    )}
                                </div>
                                <div className="flex-1 lg:max-w-[384px] xl:max-w-[384px]">
                                    <p
                                        className="text-[#333] text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[28px] font-medium mb-2"
                                        style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                                    >
                                        {t('help.hero.emailLabel')}
                                    </p>
                                    <div className={`bg-gray-100 rounded-[10px] shadow-[0px_4px_18.3px_0px_rgba(0,0,0,0.1)] p-3 sm:p-4 h-[51px] flex items-center ${formik.touched.email && formik.errors.email ? 'ring-2 ring-red-400' : ''}`}>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            placeholder=""
                                            className="w-full bg-transparent border-none outline-none text-[#333] placeholder-gray-500 text-sm sm:text-base"
                                            style={{ fontFamily: 'Roboto, sans-serif' }}
                                        />
                                    </div>
                                    {formik.touched.email && formik.errors.email && (
                                        <p className="mt-1 text-sm text-red-500 font-medium">{formik.errors.email}</p>
                                    )}
                                </div>
                            </div>

                            {/* Send Button */}
                            <button
                                type="submit"
                                disabled={formik.isSubmitting}
                                className="bg-[#032c95] hover:bg-[#E55103] disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium text-[18px] sm:text-[20px] lg:text-[24px] py-3 sm:py-4 px-6 sm:px-8 rounded-[35px] flex items-center justify-center gap-2 transition-colors self-center mt-4 sm:mt-5"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                <span>{formik.isSubmitting ? t('help.hero.submitting') : t('help.hero.submit')}</span>
                                {!formik.isSubmitting && (
                                    <img src={arrowRightIcon} alt="" className="w-5 h-5" style={{ filter: 'brightness(0) invert(1)' }} />
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

