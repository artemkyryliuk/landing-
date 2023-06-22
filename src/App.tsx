import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import ReviewSection from './components/ReviewSection/ReviewSection'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Pricing from './components/Pricing/Pricing'
import Projects from './components/Projects/Projects'
import Faqs from './components/Faqs/Faqs'
import ContactWithUs from './components/ContactWithUs/ContactWithUs'
import { reviewSectionData } from './components/ReviewSection/reviewSectionData'

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <ReviewSection review={reviewSectionData[0]} />
      <HowItWorks />
      <ReviewSection review={reviewSectionData[1]} />
      <Pricing />
      <ReviewSection review={reviewSectionData[2]} />
      <Projects />
      <ReviewSection review={reviewSectionData[3]} />
      <Faqs />
      <ContactWithUs />
    </>
  )
}
