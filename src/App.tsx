import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Help from './pages/Help'
import Carrier from './pages/Carrier'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/help" element={<Help />} />
                <Route path="/carrier" element={<Carrier />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
