import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './Pages/Home';
import StudentDashboard from './Pages/StudentDashboard';
import FacultyManagement from './Pages/FacultyManagement';
import CourseRegistration from './Pages/CourseRegistration';
import FacultyProfile from './Pages/FacultyProfile';
import ErrorPage from './Pages/ErrorPage';
import Contact from './Pages/Contact';
import DetailEvent from './Pages/DetailEvent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('/event.json')
      },
      {
        path: '/student',
        element: <StudentDashboard></StudentDashboard>,
        loader:()=>fetch('/courses.json')
      },
      {
        path: '/faculty',
        element: <FacultyManagement></FacultyManagement>,
        loader:()=>fetch('/facultyList.json')
      },
      {
        path: '/enroll',
        element: <CourseRegistration></CourseRegistration>,
        loader:()=>fetch('/courses.json')
      },
      {
        path: '/faculty/:id',
        element: <FacultyProfile></FacultyProfile>,
        loader:()=>fetch('/facultyList.json')
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/events/:id',
        element: <DetailEvent></DetailEvent>,
        loader:()=>fetch('/event.json')
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
