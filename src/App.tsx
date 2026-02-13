import { Suspense, lazy } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Help = lazy(() => import('./pages/Help'))
const Contact = lazy(() => import('./pages/Contact'))

// Loading fallback component
const PageLoader = () => (
    <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
)

function App() {
    return (
        <HashRouter>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    {/* Home - all languages use root */}
                    <Route path="/" element={<Home />} />

                    {/* About page - multi-language URLs */}
                    <Route path="/hakkimizda" element={<About />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/uber-uns" element={<About />} />

                    {/* Services page - multi-language URLs */}
                    <Route path="/hizmetler" element={<Services />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/dienstleistungen" element={<Services />} />

                    {/* Help page - multi-language URLs */}
                    <Route path="/yardim" element={<Help />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/hilfe" element={<Help />} />

                    {/* Contact page - multi-language URLs */}
                    <Route path="/iletisim" element={<Contact />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/kontakt" element={<Contact />} />
                </Routes>
            </Suspense>
            <Toaster
                position="top-right"
                toastOptions={{
                    style: {
                        fontSize: '14px',
                    },
                }}
            />
        </HashRouter>
    )
}

export default App
