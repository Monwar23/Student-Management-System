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
import FirebaseProvider from './firebase/FirebaeProvide';
import PrivateRoutes from './private/PrivateRoutes';
import Login from './Pages/Login';
import Register from './Pages/Register';

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
        element: <PrivateRoutes><CourseRegistration></CourseRegistration></PrivateRoutes>,
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
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
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
   <FirebaseProvider>
   <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
    </div>
   </FirebaseProvider>
  </StrictMode>,
)
