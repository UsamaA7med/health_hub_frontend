import { Button } from '@heroui/button'
import { Input, Textarea } from '@heroui/input'

const PaitentCompleteProfile = () => {
  return (
    <div className="bg-[#F8F9FD] min-h-screen  flex justify-center p-5">
      <div className="container mx-auto flex flex-col gap-5 bg-white shadow w-1/2 rounded-xl p-10">
        <h1 className="text-2xl font-bold">Medical History</h1>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-[#4B5563]">Chronic Conditions</p>
          <div className="flex text-sm gap-3">
            <p className="border shadow rounded-full bg-[#F8F9FD] py-1 px-3">
              Diabetes
            </p>
            <p className="border shadow rounded-full bg-[#F8F9FD] py-1 px-3">
              Diabetes
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-[#4B5563]">Current Medications</p>
          <Textarea placeholder="e.g. Metformin 500mg, Lisinopril 10mg" />
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col gap-1 w-1/2">
            <p className="font-bold text-[#4B5563]">Allergies</p>
            <Input placeholder="e.g. Penicillin, Peanuts" />
          </div>
          <div className="flex flex-col gap-1 w-1/2">
            <p className="font-bold text-[#4B5563]">Past Surgeries</p>
            <Input placeholder="e.g. Appendectomy, Heart Surgery" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-[#4B5563]">Family Healthy</p>
          <Input placeholder="e.g. Father - Heart Disease" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-[#4B5563]">Life style</p>
          <div className="flex text-sm gap-3">
            <p className="border shadow rounded-full bg-[#F8F9FD] py-1 px-3">
              Diabetes
            </p>
            <p className="border shadow rounded-full bg-[#F8F9FD] py-1 px-3">
              Diabetes
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-[#4B5563]">Recent Tests</p>
          <Input type="file" accept="application/pdf" />
        </div>
        <div className="flex gap-3 justify-end">
          <Button>Cancel</Button>
          <Button className="bg-primary text-white">Save</Button>
        </div>
      </div>
    </div>
  )
}

export default PaitentCompleteProfile
