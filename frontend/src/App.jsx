

import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home.jsx";
import Job from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";
import Companies from "./components/admin/Companies";
import Companiescreate from "./components/admin/Companiescreate";
import Companiesetup from "./components/admin/Companiesetup";
import AdminJobs from "./components/admin/AdminJobs";
import PostJob from "./components/admin/PostJob";
import Applicants from "./components/admin/Applicants";
import ProtectedRoute from "./components/admin/ProtectedRoute";




const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/job",
    element: <Job />,
  },
  {
    path: "/description/:id",
    element: <JobDescription />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },


  // now beginning of an admin Panel
  {
    path: "/admin/companies",
    element: <ProtectedRoute> <Companies /></ProtectedRoute>,
  },
  {
    path: "/admin/companies/create",
    element: <Companiescreate />,
  },
  {
    path: "/admin/companies/:id",
    element: <Companiesetup />,
  },
  {
    path: "/admin/job",
    element: <AdminJobs/>,
  },
  {
    path: "/admin/jobs/create",
    element: <PostJob/>,
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: <Applicants/>,
  },

  

]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
