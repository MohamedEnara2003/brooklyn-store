'use client'
import { useState } from "react";

import SidebarProducts from "./component/sideProduct";
import  "@/src/i18n";
import Navbar from "../components/navbar";
import Footer from "../components/footer";



function Admin(){

    const [showSearch , setShowSearch] = useState(false)
    return(
    <>

<Navbar setShowSearch = {setShowSearch}  />
<div className="admin_page">
<SidebarProducts/>
</div>
<Footer/>
    </>
    )
}
export default Admin;
