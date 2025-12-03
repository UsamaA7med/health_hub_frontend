import { useAppointment } from '@/store/useAppointment'
import formatDate from '@/utils/formatDate'
import { addToast, Button, Divider, Image } from '@heroui/react'
import { useEffect, useState } from 'react'

const MyAppointments = () => {
  const {
    appointments,
    cancelAppointment,
    isCancelingAppointment,
    getAppointments,
  } = useAppointment()
  const [currentCancelId, setCurrentCancelId] = useState<string | null>(null)
  useEffect(() => {
    getAppointments()
  }, [])
  const handelCancelAppointment = async (id: string) => {
    setCurrentCancelId(id)
    try {
      const res = await cancelAppointment(id)
      if (res.success) {
        addToast({
          title: 'Success',
          color: 'success',
          description: res.message,
          timeout: 3000,
          shouldShowTimeoutProgress: true,
        })
      } else {
        addToast({
          title: 'Error',
          color: 'danger',
          description: res.message,
          timeout: 3000,
          shouldShowTimeoutProgress: true,
        })
      }
    } catch (error) {
      addToast({
        title: 'Error',
        color: 'danger',
        description: 'Something went wrong',
        timeout: 3000,
        shouldShowTimeoutProgress: true,
      })
    }
  }
  return (
    <div className="flex flex-col gap-3">
      <p>My Appointments</p>
      <Divider />
      <div className="flex flex-col gap-10">
        {appointments?.map((i) => (
          <div key={i._id} className="flex flex-col gap-3">
            <div className="flex justify-between">
              <div className="flex  gap-3">
                <Image
                  src={i.doctor.image.url}
                  className="w-40 h-40 bg-[#D9D9D9]"
                />
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="font-bold">{i.doctor.name}</p>
                    <p className="text-gray-500 text-sm">
                      {i.doctor.speciality}
                    </p>
                  </div>
                  <div className="text-gray-500 text-sm">
                    <p className="font-bold">Address:</p>
                    <p>{i.doctor.addressOne}</p>
                    <p>{i.doctor.addressTwo}</p>
                  </div>
                  <p className="text-gray-500 text-sm">
                    <span className="font-bold">Date& time: </span>
                    {`${formatDate(i.date)} | ${i.time}`}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 justify-end">
                <Button color="primary" className="text-white">
                  Pay here
                </Button>
                <Button
                  variant="ghost"
                  color="danger"
                  isLoading={
                    isCancelingAppointment && currentCancelId === i._id
                  }
                  onPress={() => handelCancelAppointment(i._id)}
                >
                  Cancel Appointment
                </Button>
              </div>
            </div>
            <Divider />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments
