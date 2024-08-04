import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/Admin/Companies'


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
