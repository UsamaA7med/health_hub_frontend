import { Button } from '@heroui/button'
import DoctorCard from './DoctorCard'
import { Image } from '@heroui/react'

const TopDoctorsSection = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="text-3xl font-semibold">Top Doctors to Book</p>
        <p className="text-[#4B5563] text-center">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-10">
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </div>
      <Button className="w-[9rem] my-10 rounded-full">more</Button>
    </div>
  )
}

export default TopDoctorsSection
