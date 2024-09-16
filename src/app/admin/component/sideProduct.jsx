import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



function SidebarProducts (props){
    const [activeBtn , setActiveBtn] = useState()

    useEffect(()=> {
    if(window.location.pathname == "/admin/editManProduct"){
    setActiveBtn(true)
    }else if(window.location.pathname == "/admin/editWomenProduct"){
    setActiveBtn(false)
    }
    },[])


    return(
    <div className="sidebar_products">

    <p className="p_sidebar">Control all products</p>

    
    <label className="description">description :</label>
    <p className="description_admin">The admin page is responsible for all Brooklyn page
    products and its most important features are adding new products, deleting products,
    or modifying products.</p>

    <div className="btns_products">
        
        <Link  href="/admin/editManProduct" 
        className={`${activeBtn ==  true ? "btn_products bg-transparent text-black " : ""}btn_products`}
        onClick={() =>{
        setActiveBtn(true)}}>man products  </Link>
    
        <Link  href="/admin/editWomenProduct" 
        className={`${activeBtn ==  false ? "btn_products bg-transparent text-black " : ""}btn_products`}
        onClick={() =>{setActiveBtn(false)}}>woman products </Link>
        </div>

    </div>
    )
}
export default SidebarProducts;