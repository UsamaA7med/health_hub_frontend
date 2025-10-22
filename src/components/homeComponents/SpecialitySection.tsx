import SpecialityItem from './SpecialityItem'

const SpecialitySection = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="text-3xl font-semibold">Find by Speciality</p>
        <p className="max-w-[573px] text-center text-[#4B5563]">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-5 mt-10">
          <SpecialityItem />
          <SpecialityItem />
          <SpecialityItem />
          <SpecialityItem />
          <SpecialityItem />
          <SpecialityItem />
        </div>
      </div>
    </div>
  )
}

export default SpecialitySection
