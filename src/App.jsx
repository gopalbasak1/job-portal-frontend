import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/Admin/Companies'
import CompanyCreate from './components/Admin/CompanyCreate'
import CompanySetup from './components/Admin/CompanySetup'
import AdminJobs from './components/Admin/AdminJobs'
import PostJob from './components/Admin/PostJob'
import Applicants from './components/Admin/Applicants'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/jobs',
    element: <Jobs/>
  },
  {
    path: "/description/:id",
    element: <JobDescription/>
  },
  {
    path: "/browse",
    element: <Browse/>
  },
  {
    path: '/profile',
    element: <Profile/>
  },

  // Admin router start
  {
    path: '/admin/companies',
    element: <Companies/>
  },
  {
    path: '/admin/companies/create',
    element: <CompanyCreate/>
  },
  {
    path: '/admin/companies/:id',
    element: <CompanySetup/>
  },
  {
    path: "/admin/jobs",
    element: <AdminJobs/>
  },
  {
    path: "/admin/jobs/create",
    element: <PostJob/>
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: <Applicants/>
  }

])

function App() {
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}
export default App
