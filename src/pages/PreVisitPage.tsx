import { Input, Textarea } from '@heroui/input'
import { Button, Checkbox } from '@heroui/react'

const PreVisitPage = () => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="flex flex-col w-1/2 gap-5 min-w-[320px]">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-3xl font-bold">Pre-Visit Information</h1>
          <p className="text-gray-500 text-sm">
            Please provide the following information to help us prepare your
            visit.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <Textarea
            placeholder="Describe your symptoms or concerns"
            variant="bordered"
            label="What reason for your visit?"
            labelPlacement="outside"
          />
          <Input
            placeholder="e.g., 2 weeks, 1 month"
            variant="bordered"
            label="How long have you had these symptoms?"
            labelPlacement="outside"
          />
          <Textarea
            placeholder="List any medications you are currently taking"
            variant="bordered"
            label="Current medications"
            labelPlacement="outside"
          />
          <Checkbox className="text-white">
            I agree to share this information with the doctor.
          </Checkbox>
          <div className="flex justify-end gap-3">
            <Button variant="bordered">skip</Button>
            <Button color="primary" className="text-white">
              Save & Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreVisitPage
