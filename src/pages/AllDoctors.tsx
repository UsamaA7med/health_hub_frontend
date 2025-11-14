import DoctorCard from '@/components/homeComponents/DoctorCard'
import { Button } from '@heroui/button'
import { useState } from 'react'

const cateogries = [
  {
    name: 'General physician',
    key: 1,
  },
  {
    name: 'Gynecologist',
    key: 2,
  },
  {
    name: 'Dermatologist',
    key: 3,
  },
  {
    name: 'Pediatricians',
    key: 4,
  },
  {
    name: 'Cardiologists',
    key: 5,
  },
  {
    name: 'Psychiatrists',
    key: 6,
  },
]

const AllDoctors = () => {
  const [active, setActive] = useState(0)
  const onChangeCategory = (key: number) => {
    setActive(key)
  }
  return (
    <div className="flex flex-col gap-10">
      <p className="text-[#4B5563] text-sm">
        Browse through the doctors specialist.
      </p>
      <div className="grid gird-cols-1 md:grid-cols-6 gap-5">
        <div className="flex flex-col gap-3 col-span-1">
          {cateogries.map((category) => (
            <Button
              key={category.key}
              onPress={() => {
                onChangeCategory(category.key)
              }}
              variant={active === category.key ? 'solid' : 'bordered'}
            >
              {category.name}
            </Button>
          ))}
        </div>
        <div className="col-span-5 grid grid-cols-1 md:grid-cols-5 gap-5">
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </div>
      </div>
    </div>
  )
}

export default AllDoctors
