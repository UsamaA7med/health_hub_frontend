import DoctorCard from '@/components/homeComponents/DoctorCard'
import DefaultLayout from '@/layouts/default'
import { Button, Card, CardBody, Image } from '@heroui/react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const days = [
  {
    day: 'MON',
    date: 0,
  },
  {
    day: 'TUE',
    date: 1,
  },
  {
    day: 'WED',
    date: 2,
  },
  {
    day: 'THU',
    date: 3,
  },
  {
    day: 'FRI',
    date: 4,
  },
  {
    day: 'SAT',
    date: 5,
  },
  {
    day: 'SUN',
    date: 6,
  },
]
const time = [
  {
    time: '09:00',
  },
  {
    time: '10:00',
  },
  {
    time: '11:00',
  },
  {
    time: '12:00',
  },
  {
    time: '13:00',
  },
  {
    time: '14:00',
  },
]
const Doctor = () => {
  const { id } = useParams()
  const [selectedDay, setSelectedDay] = useState(-1)
  const [selectedHour, setSelectedHour] = useState<null | string>(null)
  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-1 md:grid-cols-5 items-stretch">
        <div className="col-span-1 w-full h-full">
          <Image
            alt="Doctor"
            className="w-full h-full object-cover rounded-xl bg-primary"
            src="/doctor.png"
          />
        </div>
        <div className="col-span-4 flex flex-col gap-10">
          <Card>
            <CardBody>
              <div className="p-5 flex flex-col gap-3">
                <div>
                  <div className="flex gap-2 items-center">
                    <p className="font-bold text-2xl">Dr. Richard James</p>
                    <Image src="/verficationMark.png" className="h-4 w-4" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <p className="text-default-500 text-sm">
                      MBBS - General Physician
                    </p>
                    <Button
                      variant="bordered"
                      size="sm"
                      className="rounded-full cursor-alias"
                      disabled={true}
                    >
                      2 Years
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-sm">About</p>
                  <p className="text-sm text-default-500">
                    Dr. Davis has a strong commitment to delivering
                    comprehensive medical care, focusing on preventive medicine,
                    early diagnosis, and effective treatment strategies. Dr.
                    Davis has a strong commitment to delivering comprehensive
                    medical care, focusing on preventive medicine, early
                    diagnosis, and effective treatment strategies.
                  </p>
                </div>
                <p>
                  Appointment fee: <span className="font-bold">$50</span>
                </p>
              </div>
            </CardBody>
          </Card>
          <div className="flex flex-col gap-5">
            <p className="font-bold text-default-500">Booking slots</p>
            <div className="flex gap-3">
              {days.map((day) => (
                <div
                  key={day.date}
                  className={`flex w-[50px] h-[90px] p-7 items-center justify-center gap-1 border border-default-500 flex-col rounded-full cursor-pointer hover:bg-primary hover:text-white ${
                    selectedDay === day.date && 'bg-primary text-white'
                  }`}
                  onClick={() => setSelectedDay(day.date)}
                >
                  <p>{day.day}</p>
                  <p>{day.date}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              {time.map((hour) => (
                <div
                  key={hour.time}
                  onClick={() => setSelectedHour(hour.time)}
                  className={`border border-default-500 px-5 py-1 rounded-full cursor-pointer hover:bg-primary hover:text-white ${
                    selectedHour === hour.time && 'bg-primary text-white'
                  }`}
                >
                  <p className="text-sm">{hour.time} am</p>
                </div>
              ))}
            </div>
          </div>
          <Button
            className="w-fit text-white rounded-full px-20 py-6"
            color="primary"
          >
            Book an appointment
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 mb-20">
        <p className="text-3xl font-semibold">Related doctors</p>
        <p className="text-[#4B5563] text-sm">
          Simply browse through our extensive list of trusted doctors.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10">
          {[1, 2, 3, 4, 5].map((i) => (
            <DoctorCard key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctor
