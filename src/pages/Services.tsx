import { Header } from '../components/organisms/Header'
import { ServicesHero } from '../components/organisms/ServicesHero'
import { VehicleServiceSection } from '../components/organisms/VehicleServiceSection'
import { Footer } from '../components/organisms/Footer'
import motorcycleImg from '../assets/services/motorcycle.png'
import minivanImg from '../assets/services/minivan.png'
import panelvanImg from '../assets/services/panelvan.png'
import kamyonetImg from '../assets/services/kamyonet.png'
import kamyonImg from '../assets/services/kamyon.png'

export default function Services() {
    const vehicles = [
        {
            title: 'Motorsiklet',
            description: `Moto kuryeler genelde 40–50 kg'a kadar yük taşıyabilir. Ama ister sadece bir zarf olsun, ister market poşeti ya da paket yemek, hepsi güvenle teslim edilir.

Yemek siparişinden alışveriş ürünlerine, ilaçtan belgeye kadar pek çok şeyi hızlıca ulaştırmak için moto kuryeler şehirde en pratik çözümdür.`,
            image: motorcycleImg,
            imageAlt: 'Yüksi Motorsiklet',
            primaryButtonText: 'Yük Oluştur',
            secondaryButtonText: 'Kurye İçin Başvur',
        },
        {
            title: 'Minivan',
            description: `Minivanlar genelde 500–800 kg'a kadar yük taşıyabilir. İster birkaç koli, ister küçük ev eşyaları ya da toplu alışveriş ürünleri olsun, hepsi rahatlıkla sığar.

Taşınmadan ofis ihtiyaçlarına, market teslimatından küçük nakliyeye kadar minivanlar şehir içi pratik ve güvenli çözümler sunar.`,
            image: minivanImg,
            imageAlt: 'Yüksi Minivan',
            primaryButtonText: 'Yük Oluştur',
            secondaryButtonText: 'Ekspres İçin Başvur',
        },
        {
            title: 'Panelvan',
            description: `Panelvanlar genelde 1.000–1.500 kg'a kadar yük taşıyabilir. İster büyük koliler, ister mobilya ya da toplu sipariş ürünleri olsun, geniş hacimleriyle hepsi kolayca taşınır.

Ev taşımadan mağaza sevkiyatına, e-ticaret teslimatından profesyonel nakliyeye kadar panelvanlar güvenli ve güçlü bir çözümdür.`,
            image: panelvanImg,
            imageAlt: 'Yüksi Panelvan',
            primaryButtonText: 'Yük Oluştur',
            secondaryButtonText: 'Ekspres İçin Başvur',
        },
        {
            title: 'Kamyonet',
            description: `Kamyonetler genelde 1.500–3.500 kg'a kadar yük taşıyabilir. İster inşaat malzemesi, ister büyük mobilyalar ya da toplu ticari ürünler olsun, güçlü yapıları sayesinde kolayca taşınır.

Nakliyeden ticari sevkiyata, pazar ve mağaza teslimatından tarım ürünlerine kadar kamyonetler hem şehir içi hem de şehirler arası güvenilir çözümler sunar.`,
            image: kamyonetImg,
            imageAlt: 'Yüksi Kamyonet',
            primaryButtonText: 'Yük Oluştur',
            secondaryButtonText: 'Taşımacılık İçin Başvur',
        },
        {
            title: 'Kamyon',
            description: `Kamyonlar genelde 3.500 kg'dan başlayıp 20.000 kg'a kadar yük taşıyabilir. İster ağır makineler, ister büyük hacimli eşyalar ya da toplu ticari ürünler olsun, geniş kasa ve güçlü motorları sayesinde rahatça taşınır.

Şehirler arası taşımacılıktan lojistik sevkiyata, inşaat malzemelerinden endüstriyel ürünlere kadar kamyonlar güvenli ve yüksek kapasiteli çözümler sunar.`,
            image: kamyonImg,
            imageAlt: 'Yüksi Kamyon',
            primaryButtonText: 'Yük Oluştur',
            secondaryButtonText: 'Taşımacılık İçin Başvur',
        },
    ];

    return (
        <div className="w-full min-h-screen relative bg-white">
            <Header activeItem="/services" />
            <ServicesHero />
            {vehicles.map((vehicle, index) => (
                <VehicleServiceSection
                    key={index}
                    title={vehicle.title}
                    description={vehicle.description}
                    image={vehicle.image}
                    imageAlt={vehicle.imageAlt}
                    primaryButtonText={vehicle.primaryButtonText}
                    secondaryButtonText={vehicle.secondaryButtonText}
                />
            ))}
            <Footer />
        </div>
    )
}
