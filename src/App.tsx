import { useState, useEffect } from 'react';
import {
  Scissors,
  MapPin,
  Clock,
  Phone,
  Star,
  Menu,
  X,
  Instagram,
  Facebook,
  ChevronDown,
} from 'lucide-react';

const services = [
  {
    title: 'Tuns Classic',
    description: 'Tuns clasic cu finisare la piele si stilizare barba inclusa',
    price: '50 RON',
    duration: '~45 min',
  },
  {
    title: 'Tuns + Barba',
    description: 'Pachet complet: tuns profesional si contur barba cu balsam si ulei',
    price: '70 RON',
    duration: '~60 min',
  },
  {
    title: 'Barba Expert',
    description: 'Conturare, stilizare si ingrijire completa a barbi cu produse premium',
    price: '40 RON',
    duration: '~30 min',
  },
  {
    title: 'Tuns Copii',
    description: 'Tuns pentru cei mici intr-o atmosfera prietenoasa si relaxata',
    price: '35 RON',
    duration: '~30 min',
  },
  {
    title: 'Vopsit Par',
    description: 'Colorare profesionala cu produse de calitate superioara',
    price: 'de la 80 RON',
    duration: '~90 min',
  },
  {
    title: 'Stilizare Eveniment',
    description: 'Pregatire speciala pentru evenimente importante din viata ta',
    price: '90 RON',
    duration: '~60 min',
  },
];

const galleryImages = [
  'https://images.pexels.com/photos/3998460/pexels-photo-3998460.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1639549/pexels-photo-1639549.jpeg?auto=compress&cs=tinysrgb&w=800',
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['acasa', 'servicii', 'despre', 'galerie', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-stone-900/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => scrollToSection('acasa')}
              className="flex items-center gap-2 group"
            >
              <Scissors className="w-8 h-8 text-amber-500" />
              <span className="text-xl font-light tracking-wider text-white">
                FRIZerie
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {['Acasa', 'Servicii', 'Despre', 'Galerie', 'Contact'].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm tracking-wide transition-colors hover:text-amber-500 ${
                      activeSection === item.toLowerCase()
                        ? 'text-amber-500'
                        : 'text-white/80'
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
              <a
                href="tel:+40721234567"
                className="px-5 py-2 bg-amber-500 text-stone-900 text-sm font-medium rounded-full hover:bg-amber-400 transition-all hover:scale-105"
              >
                Programeaza-te
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="bg-stone-900/95 backdrop-blur-md px-4 py-4 space-y-3">
            {['Acasa', 'Servicii', 'Despre', 'Galerie', 'Contact'].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-white/80 hover:text-amber-500 py-2 transition-colors"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="acasa"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Barbershop interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/90 to-stone-900/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-amber-500 text-sm font-medium">
                5.0 Rating Google
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight">
              FRIZ<span className="text-amber-500">erie</span>
            </h1>

            <p className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Stil, precizie si atentie la detalii. Locul unde traditia
              intalneste modernul pentru barbatii care pretuiesc imaginea lor.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+40721234567"
                className="px-8 py-4 bg-amber-500 text-stone-900 font-medium rounded-full hover:bg-amber-400 transition-all hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
              >
                Programeaza o Vizita
              </a>
              <button
                onClick={() => scrollToSection('servicii')}
                className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/5 transition-all"
              >
                Descopera Serviciile
                <ChevronDown className="w-4 h-4 animate-bounce" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-500 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicii" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 text-sm tracking-widest uppercase">
              Ce oferim
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-stone-900 mt-3">
              Serviciile Noastre
            </h2>
            <p className="text-stone-600 mt-4 max-w-2xl mx-auto">
              Fiecare serviciu este executat cu precizie si dedicare de catre
              barierii nostri experimentati.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-stone-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-medium text-stone-900 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-amber-600 font-medium text-lg">
                    {service.price}
                  </span>
                </div>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-stone-500">
                  <Clock className="w-4 h-4" />
                  <span>{service.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="despre" className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-500 text-sm tracking-widest uppercase">
                Despre noi
              </span>
              <h2 className="text-4xl md:text-5xl font-light mt-3 mb-6">
                Mai Mult Decat o Frizerie
              </h2>
              <p className="text-stone-400 leading-relaxed mb-6">
                La FRIZerie, credem ca o vizita la frizer ar trebui sa fie mai
                mult decat un simplu tuns. Este un moment de relaxare, de
                ingrijire personala si de transformare. Cu o echipa de
                profesionisti pasionati si o atmosfera prietenoasa, fiecare
                client pleaca nu doar aratand mai bine, ci si simtindu-se mai
                bine.
              </p>
              <p className="text-stone-400 leading-relaxed mb-8">
                Am deschis usile in Chitila pentru a oferi servicii de calitate
                superioara la preturi accesibile. Fiecare detaliu conteaza,
                de la produsele pe care le folosim pana la tehnicile pe care le
                perfectionam continuu.
              </p>

              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-light text-amber-500 mb-1">
                    5+
                  </div>
                  <div className="text-stone-500 text-sm">Ani Experienta</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-amber-500 mb-1">
                    500+
                  </div>
                  <div className="text-stone-500 text-sm">Clienti Fericiti</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-amber-500 mb-1">
                    5.0
                  </div>
                  <div className="text-stone-500 text-sm">Rating Google</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3998460/pexels-photo-3998460.jpeg?auto=compact&cs=tinysrgb&w=800"
                alt="Barber at work"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-500 text-stone-900 p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-stone-900 text-stone-900"
                    />
                  ))}
                </div>
                <p className="text-sm font-medium">Recenzii Excelente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galerie" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 text-sm tracking-widest uppercase">
              Galerie
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-stone-900 mt-3">
              Atmosfera Noastra
            </h2>
            <p className="text-stone-600 mt-4 max-w-2xl mx-auto">
              Un spatiu modern si confortabil, creat pentru relaxare si stil.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 text-sm tracking-widest uppercase">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-stone-900 mt-3">
              Hai pe La Noi
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-1">
                      Adresa
                    </h3>
                    <p className="text-stone-600">
                      Strada Aurel Vlaicu 75
                      <br />
                      Chitila, Ilfov
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-1">
                      Program
                    </h3>
                    <div className="text-stone-600 space-y-1">
                      <p>Luni - Vineri: 09:00 - 19:00</p>
                      <p>Sambata: 09:00 - 18:00</p>
                      <p>Duminica: Inchis</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-1">
                      Telefon
                    </h3>
                    <a
                      href="tel:+40721234567"
                      className="text-amber-600 hover:text-amber-700 transition-colors"
                    >
                      +40 721 234 567
                    </a>
                    <p className="text-stone-500 text-sm mt-1">
                      Sunati pentru programari
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-stone-900 rounded-xl flex items-center justify-center hover:bg-amber-500 hover:scale-105 transition-all group"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-stone-900 rounded-xl flex items-center justify-center hover:bg-amber-500 hover:scale-105 transition-all group"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8448388087937!2d26.0657!3d44.4835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI5JzAwLjYiTiAyNsKwMDMnNTYuNSJF!5e0!3m2!1sen!2sro!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FRIZerie Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Scissors className="w-6 h-6 text-amber-500" />
              <span className="text-lg font-light tracking-wider">FRIZerie</span>
            </div>
            <p className="text-stone-500 text-sm text-center">
              © {new Date().getFullYear()} FRIZerie. Toate drepturile
              rezervate.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-stone-500 hover:text-amber-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-stone-500 hover:text-amber-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
