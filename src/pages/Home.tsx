import HeroSection from '@/components/homeComponents/HeroSection'
import SecondHero from '@/components/homeComponents/SecondHero'
import SpecialitySection from '@/components/homeComponents/SpecialitySection'
import TopDoctorsSection from '@/components/homeComponents/TopDoctorsSection'

import DefaultLayout from '@/layouts/default'

const Home = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-20">
        <HeroSection />
        <SpecialitySection />
        <TopDoctorsSection />
        <SecondHero />
      </div>
    </DefaultLayout>
  )
}

export default Home
