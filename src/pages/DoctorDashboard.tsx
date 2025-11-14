import { doctorDashboardAnalytics } from '@/dummyData/dummy'
import { Avatar, Divider, Image } from '@heroui/react'

const DoctorDashboard = () => {
  return (
    <div className="flex flex-col gap-10 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {doctorDashboardAnalytics.map((i) => (
          <div
            key={i.name}
            className="flex gap-3  p-5 items-center shadow bg-white"
          >
            <img src={i.icon} className="w-16 h-16" />
            <div>
              <p className="font-bold">{i.value}</p>
              <p className="text-gray-500 text-sm">{i.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white shadow p-5">
        <div className="flex gap-3 items-center">
          <Image src="list_icon.png" className="w-6 h-6 rounded-none" />
          <p className="font-bold">Latest Bookings</p>
        </div>
        <Divider className="my-3" />
        <div className="flex flex-col gap-5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-3 items-center">
              <Avatar src="/doc.png" />
              <div className="flex flex-col gap-1 flex-grow">
                <p className="font-bold">Dr. Richard James</p>
                <p className="text-gray-500 text-sm">
                  Booking on 24th July, 2024
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Image
                  src="cancel_icon.png"
                  className="w-10 h-10 rounded-none cursor-pointer"
                />
                <Image
                  src="tick_icon.png"
                  className="w-10 h-10 rounded-none cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard
