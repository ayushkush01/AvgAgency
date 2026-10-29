import Seo from '../components/Seo'
import JsonLd from '../components/JsonLd'
import { faqSchema } from '../lib/schema'
import Hero from '../components/home/Hero'
import MarketsStrip from '../components/home/MarketsStrip'
import ServicesSection from '../components/home/ServicesSection'
import CreatorNetworkPreview from '../components/home/CreatorNetworkPreview'
import CreatorCategories from '../components/home/CreatorCategories'
import CampaignProcess from '../components/home/CampaignProcess'
import Packages from '../components/home/Packages'
import Results from '../components/home/Results'
import Testimonials from '../components/home/Testimonials'
import Faq from '../components/home/Faq'
import FinalCta from '../components/home/FinalCta'

export default function Home() {
  return (
    <>
      <Seo
        title="Influencer Marketing & UGC Content Creation Agency"
        description="Influencer marketing agency for USA, UK, UAE and India brands. Vetted UGC creators, campaigns and content production — managed end to end."
        path="/"
      />
      <JsonLd data={faqSchema()} />

      <Hero />
      <MarketsStrip />
      <ServicesSection />
      <CreatorNetworkPreview />
      <CreatorCategories />
      <CampaignProcess />
      <Packages />
      <Results />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  )
}
