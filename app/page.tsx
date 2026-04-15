import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Categories from '@/components/Categories'
import FeaturedBooks from '@/components/FeaturedBooks'
import AudioBooks from '@/components/AudioBooks'
import HowItWorks from '@/components/HowItWorks'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'
import Proposals from '@/components/Proposals'
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
      <HowItWorks />
      <WhyUs />
      <Testimonials />
      <Newsletter />
      <Proposals />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
