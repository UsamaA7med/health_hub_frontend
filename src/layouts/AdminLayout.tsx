import AdminNavbar from '@/components/adminComponents/AdminNavbar'
import AdminSideBar from '@/components/adminComponents/AdminSideBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className="bg-[#F8F9FD] min-h-screen">
      <AdminNavbar />
      <div className="flex  min-h-screen gap-10">
        <AdminSideBar />
        <div className="p-5 container mx-auto flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
