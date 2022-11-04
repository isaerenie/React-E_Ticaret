import { Navigate } from "react-router-dom"

import Navbar from "../components/Navbar"
import Products from "../pages/product/Products"
import SiteHome from "../pages/SiteHome"
import { control } from "../utils/control"
function security(item: { component: JSX.Element }) {
  const user = !control()
  const user1 = control()?.result.authorities[0].authority
  

  return (
    user
      ?
     <>
       <Navbar />
      <SiteHome />
     </>
      :
      <>

        <Navbar />
        {item.component}
      </>
  )
}
export default security

