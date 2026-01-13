import { Header } from '../components/organisms/Header';
import { Footer } from '../components/sections/Footer';
import { CarrierForm } from '../components/sections/CarrierForm';

export default function Carrier() {
    return (
        <>
            <Header activeItem="/carrier" />
            <CarrierForm />
            <Footer />
        </>
    );
}
