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
      webhookUrl: `${import.meta.env.CHATBOT_URL}`,
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
