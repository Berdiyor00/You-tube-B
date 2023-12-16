import { Outlet } from "react-router-dom"
import Header from "../Header/header"
// import Navbar from "./Navbar"


const Layout = () => {
  return (
    <div>
      <Header/> 
      <div className="wrapperoutlet">
      <Outlet />
      {/* <Navbar/> */}
      </div>
    </div>
  )
}

export default Layout