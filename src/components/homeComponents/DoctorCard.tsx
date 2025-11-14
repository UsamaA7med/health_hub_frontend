import { Card, CardHeader, CardBody, Image } from '@heroui/react'

export default function DoctorCard() {
  return (
    <Card radius="none">
      <CardHeader className="flex-col items-center p-0 bg-[#EAEFFF]">
        <Image
          alt="Doctor"
          className="w-full h-auto object-cover rounded-none "
          src="/doctor.png"
        />
      </CardHeader>
      <CardBody className="overflow-visible p-3">
        <p className="text-tiny text-green-600 flex items-center gap-1 mb-1">
          <span className="w-2 h-2 bg-green-600 rounded-full inline-block" />
          Available
        </p>
        <h4 className="font-bold text-large">Dr. Richard James</h4>
        <small className="text-default-500">General Physician</small>
      </CardBody>
    </Card>
  )
}
