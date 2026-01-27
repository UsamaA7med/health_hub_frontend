import HeroSection from '@/components/homeComponents/HeroSection'
import SecondHero from '@/components/homeComponents/SecondHero'
import SpecialitySection from '@/components/homeComponents/SpecialitySection'
import TopDoctorsSection from '@/components/homeComponents/TopDoctorsSection'
import { useEffect } from 'react'
import '@n8n/chat/style.css'
import { createChat } from '@n8n/chat'
import { useUser } from './store/useUser'

const Home = () => {
  const { user } = useUser()
  useEffect(() => {
    createChat({
      webhookUrl: `https://n8n.datacraft.in.net/webhook/8430493e-70d8-4c7d-8d31-90508ba45fe6/chat`,
      metadata: {
        userID: user?._id,
      },
    })
  }, [])
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />
      <SpecialitySection />
      <TopDoctorsSection />
      <SecondHero />
    </div>
  )
}

export default Home
