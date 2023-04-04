import { createBrowserRouter } from "react-router-dom"
//import Add from "./component/Add"
import App  from './component/App'
//import Edit from "./component/Edit"
import Login from "./component/Login"
import Popular from './component/Popular'
import Register from "./component/Register"
import Searchcomp from "./component/Searchcomp"
//import Show from "./component/Show"
import Singlemovie from "./component/Singlemovie"
// import Singlepage from "./component/Singlepage"
import Toprated from'./component/Toprated'
import Upcoming from'./component/Upcoming'

const appRouting=createBrowserRouter([
    {
        path:"",
        element:<App/>,
        children:[
        {
            path:"/popular",
            element:<Popular/>
        },
        {
            path:"/toprated",
            element:<Toprated/>
        },
        {
            path:"/upcoming",
            element:<Upcoming/>
        },
        {
            path:"/register",
            element:<Register />
        },
        {
            path:"/login",
            element:<Login />
        },
        {
            path:"/singlemovie/:movieId",
            element:<Singlemovie />
        },
        {
            path:"/searchcomp",
            element:<Searchcomp />
         }
        // {
        //     path:"/add",
        //     element:<Add />
        // }       
         // {
        //     path:"/show",
        //     element:<Show />
        // }
        // // {
        //     path:"/edit",
        //     element:<Edit />
        // }
        // {
        //     path:"/singlepage/:userid",
        //     element:<Singlepage />
        // }
        

    
   
       
    ]



}])

export default appRouting;
