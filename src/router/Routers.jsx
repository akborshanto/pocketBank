import { createBrowserRouter } from "react-router-dom";
import Main from './../root/Main';
import User from "../DASHBOARD/user/User";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
  children:[
{
  path:'/',
  element:<User></User>
}


  ]  },
]);