import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layouts/Dashboard";
import StudentHome from "../Pages/Dashboard/StudentHome/StudentHome";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";



export const router = createBrowserRouter([
{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'signup',
            element: <SignUp></SignUp>
        },
        {
            path: 'instructors',
            element: <Instructors></Instructors>
        },
        {
            path: 'classes',
            element: <Classes></Classes>
        }
    ]
},
{
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
        {
            path: 'studenthome',
            element: <StudentHome></StudentHome>
        },
        {
            path: 'myclasses',
            element: <MyClasses></MyClasses>
        }
    ]
}
])