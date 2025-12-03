import MyProfileEditModal from '@/components/MyProfileEditModal'
import { useUser } from '@/store/useUser'
import formatDate from '@/utils/formatDate'
import { Avatar } from '@heroui/react'

const MyProfile = () => {
  const { user } = useUser()
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center gap-5">
        <Avatar src={user?.profileImage.url} className="h-16 w-16" />
        <div>
          <p className="font-bold text-xl">{user?.fullName}</p>
          <p className="text-gray-500">Patient</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="uppercase text-gray-500 text-sm">contact information</p>
        <div className="flex gap-2 justify-between">
          <div>
            <p>Email</p>
            <p>{user?.email}</p>
          </div>
          <div hidden={!user?.healthProfile.phone}>
            <p>Phone</p>
            <p>{user?.healthProfile.phone}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="uppercase text-gray-500 text-sm">basic information</p>
        <div className="flex gap-2 justify-between">
          <div>
            <p>Gender</p>
            <p>{user?.healthProfile.gender}</p>
          </div>
          <div>
            <p>Date of Birth</p>
            <p>{formatDate(user?.healthProfile.birthDate!)}</p>
          </div>
        </div>
      </div>
      <MyProfileEditModal />
    </div>
  )
}

export default MyProfile
