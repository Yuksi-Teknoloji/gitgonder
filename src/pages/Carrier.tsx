import { Header } from '../components/organisms/Header';
import { Footer } from '../components/organisms/Footer';
import { CarrierForm } from '../components/organisms/CarrierForm';

export default function Carrier() {
    return (
        <>
            <Header activeItem="/carrier" />
            <CarrierForm />
            <Footer />
        </>
    );
}
