import { Avatar, Divider, Image } from '@heroui/react'

const AdminDashboard = () => {
  return (
    <div className="flex flex-col gap-10 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-3  p-5 items-center shadow bg-white">
            <Image src="doctor_icon.png" className="w-16 h-16" />
            <div>
              <p className="font-bold">14</p>
              <p className="text-gray-500 text-sm">Doctors</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white shadow p-5">
        <div className="flex gap-3 items-center">
          <Image src="list_icon.png" className="w-6 h-6 rounded-none" />
          <p className="font-bold">Latest Appointments</p>
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
              <p className="text-primary rounded-full  px-3 py-1 shadow">
                Pending
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
