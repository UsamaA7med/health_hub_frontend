import DoctorCard from '@/components/homeComponents/DoctorCard'

const AdminDoctorsList = () => {
  return (
    <div className="flex flex-col gap-5">
      <p className="font-bold text-xl">All Doctors</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <DoctorCard key={i} />
        ))}
      </div>
    </div>
  )
}

export default AdminDoctorsList
