/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/layout/Navbar';
import MobileNav from './components/layout/MobileNav';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Testimonials from './components/sections/Testimonials';
import InstagramSection from './components/sections/Instagram';
import FAQ from './components/sections/FAQ';
import BookingForm from './components/sections/BookingForm';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <InstagramSection />
        <FAQ />
        <BookingForm />
        <Contact />
      </main>

      <Footer />
      <MobileNav />

      {/* Floating WhatsApp for desktop */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50">
        <a 
          href="https://wa.me/2348135448902" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        >
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.253-.041.397.303.145.344.492 1.203.535 1.29s.072.188.014.303-.088.13-.174.231-.162.115-.274.246c-.112.13-.236.27-.101.506.135.235.601 1.011 1.246 1.706.828.892 1.523 1.168 1.74 1.282.217.115.344.095.474-.051.13-.146.554-.645.702-.865.148-.22.296-.185.499-.109.204.076 1.288.607 1.512.72s.372.17.426.262c.054.092.054.53-.09.935z"/>
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10z" opacity=".1"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

