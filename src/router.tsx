import { createBrowserRouter } from 'react-router-dom'
import DefaultLayout from './layouts/default'
import App from './App'
import AllDoctors from './pages/AllDoctors'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Doctor from './pages/Doctor'
import AdminLayout from './layouts/AdminLayout'
import AdminDashboard from './pages/AdminDashboard'
import AdminAppointments from './pages/AdminAppointments'
import AdminAddDoctor from './pages/AdminAddDoctor'
import AdminDoctorsList from './pages/AdminDoctorsList'
import DoctorLayout from './layouts/DoctorLayout'
import DoctorDashboard from './pages/DoctorDashboard'
import DoctorAppointments from './pages/DoctorAppointments'
import DoctorProfile from './pages/DoctorProfile'
import PaitentCompleteProfile from './pages/PaitentCompleteProfile'
const Router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: '/all-doctors',
        element: <AllDoctors />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/doctor/:id',
        element: <Doctor />,
      },
    ],
  },
  {
    path: '/admin-panel',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: '/admin-panel/appointments',
        element: <AdminAppointments />,
      },
      {
        path: '/admin-panel/add-doctor',
        element: <AdminAddDoctor />,
      },
      {
        path: '/admin-panel/doctors-list',
        element: <AdminDoctorsList />,
      },
    ],
  },
  {
    path: '/doctor-panel',
    element: <DoctorLayout />,
    children: [
      {
        index: true,
        element: <DoctorDashboard />,
      },
      {
        path: '/doctor-panel/appointments',
        element: <DoctorAppointments />,
      },
      {
        path: '/doctor-panel/profile',
        element: <DoctorProfile />,
      },
    ],
  },
  {
    path: '/medical-history',
    element: <PaitentCompleteProfile />,
  },
])

export default Router
