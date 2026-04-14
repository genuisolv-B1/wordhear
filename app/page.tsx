import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Categories from '@/components/Categories'
import FeaturedBooks from '@/components/FeaturedBooks'
import AudioBooks from '@/components/AudioBooks'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-cream-200 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Categories />
      <FeaturedBooks />
      <AudioBooks />
      <WhyUs />
      <Testimonials />
      <Newsletter />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
