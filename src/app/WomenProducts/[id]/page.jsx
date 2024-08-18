'use client'



import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar";
import Search from "../../components/search";
import { useTranslation } from "react-i18next";
import  "@/src/i18n";
import SideBarControl from "../../components/sidebar-option";
import { fetchWomanProduct } from "@/src/rtk/slices/womenSlices";
import Image from "next/image";
import Footer from "../../components/footer";



function Details({params})  {
    const UrlApi = "http://localhost:3004/Women"
    
    const [details , setDetails] = useState([])

    const [ActiveShowImg , setActiveShowImg] = useState(0)

    const WomenProducts = useSelector(state => state.women)
    const dispatch = useDispatch()

    useEffect(()=>{
    dispatch(fetchWomanProduct())
    },[])

    useEffect(()=>{
    fetch(`${UrlApi}/${params.id}`).then((res)=> res.json()).then(data => setDetails(data))
    },[])

    const [t , il8n] = useTranslation()
    const [showSearch , setShowSearch] = useState()

    return(
    <> 
    <Navbar setShowSearch = {setShowSearch}  />
    <Search showSearch = {showSearch } setShowSearch = {setShowSearch}/>

    <div className="details">
    <div className="container_details">

    <p className="title_discound"> {"sale"} 50% </p>
    
    <Image src={
    ActiveShowImg == 0 ? details.url : null || ActiveShowImg == 1 ? details.url2 : null  ||
    ActiveShowImg == 2 ? details.url3 : null || ActiveShowImg == 3 ? details.url4 : null } 
    alt={details.name} className="active-showImg"  width={200} height={200}/>

    <div className="show_produect">
    <Image src={details.url} alt={details.name}  
    className={`${ActiveShowImg == 0 ? "opacity-35 " : ""} showImg`}onClick={() =>{setActiveShowImg(0)}} 
    width={80} height={80}/>

    <Image src={details.url2} alt={details.name}  
    className={`${ActiveShowImg == 1 ? "opacity-35 " : ""} showImg`}onClick={() =>{setActiveShowImg(1)}} 
    width={80} height={80}/>
    <Image src={details.url3} alt={details.name}  
    className={`${ActiveShowImg == 2 ? "opacity-35 " : ""} showImg`}onClick={() =>{setActiveShowImg(2)}} 
    width={80} height={80}/>
    <Image src={details.url4} alt={details.name}  
    className={`${ActiveShowImg == 3 ? "opacity-35 " : ""} showImg`}onClick={() =>{setActiveShowImg(3)}} 
    width={80} height={80}/>
    </div>

    </div>
    
    <SideBarControl params ={params.id} name={details.name} price={details.price}
    color={details.color} type={details.type} img={details.url} Products = {WomenProducts}
    />
    </div>


    <Footer/>
    </>
    )
}

export default Details;
