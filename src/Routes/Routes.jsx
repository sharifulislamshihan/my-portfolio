import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../component/Home/Home";
import Skills from "../component/Skills/Skills";
import AboutMe from "../component/AboutMe/AboutMe";
import Services from "../component/Services/Services";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
            {
                path: '/aboutMe',
                element: <AboutMe></AboutMe>
            },
            {
                path: '/services',
                element: <Services></Services>
            }
            
        ]
    }
])
