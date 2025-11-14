import { Button, Checkbox, Image } from '@heroui/react'
import { useState } from 'react'

const DoctorProfile = () => {
  const [edit, setEdit] = useState(true)
  return (
    <div className="flex flex-col gap-5">
      <div>
        <Image src="/doctor.png" className="w-64 h-64 bg-primary" />
      </div>
      <div className="flex flex-col gap-3 bg-white p-5">
        <p className="font-bold text-3xl">Dr. Richard James</p>
        <p>
          MBBS - General Physician{' '}
          <span className="border text-sm shadow rounded-full p-1">
            4 Years
          </span>
        </p>
        <textarea
          disabled={edit}
          defaultValue={
            'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
          }
        />
        <div className="flex gap-3 items-center w-full">
          <p>Appointments fee: $</p>
          <input
            type="number"
            defaultValue={50}
            disabled={edit}
            className="w-fit"
          />
        </div>
        <div className="flex  gap-3">
          <p>Address:</p>
          <div className="flex flex-col gap-1">
            <input
              disabled={edit}
              defaultValue="lorem lorem"
              className="w-fit"
            />
            <input
              disabled={edit}
              defaultValue="lorem lorem"
              className="w-fit"
            />
          </div>
        </div>
        <Checkbox className="text-white" isDisabled={edit}>
          Available
        </Checkbox>
        <Button
          className={`w-fit ${edit ? 'bg-primary text-white' : 'bg-white'}`}
          variant="bordered"
          onPress={() => setEdit(!edit)}
        >
          {edit ? 'Edit' : 'Save'}
        </Button>
      </div>
    </div>
  )
}

export default DoctorProfile
