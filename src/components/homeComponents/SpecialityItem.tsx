import { Image } from '@heroui/react'

const SpecialityItem = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Image src="/General_physician.png" className="w-[6rem] " />
      <p className="text-sm text-[#4B5563]">General physician</p>
    </div>
  )
}

export default SpecialityItem
