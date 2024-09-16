'use client'



import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchManProduct } from "@/src/rtk/slices/manSlices";
import Navbar from "../../components/navbar";
import Search from "../../components/search";
import { useTranslation } from "react-i18next";
import  "@/src/i18n";
import SideBarControl from "../../components/sidebar-option";
import Image from "next/image";
import Footer from "../../components/footer";


function Details({params})  {
    const UrlApi = "https://brooklyn-vercel.vercel.app/MAN"

    const [details , setDetails] = useState([])

    const [ActiveShowImg , setActiveShowImg] = useState(0)

    useEffect(()=>{
        setActiveShowImg(details?.url)
    },[details])

    const manProducts = useSelector(state => state.man)
    const dispatch = useDispatch()

    useEffect(()=>{
    dispatch(fetchManProduct())
    },[])

    useEffect(()=>{
    fetch(`${UrlApi}/${params.detailsid}`,{ next: { revalidate: 5000 } })
    .then((res)=> res.json()).then(data => setDetails(data))
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
    
    <Image src={ActiveShowImg ? ActiveShowImg :'/loading-gif.gif'} 
    alt='imgProductActive' className="active-showImg" width={250} height={200}/>

    <div className="show_produect">

    <Image src={details?.url ? details?.url : '/loading-gif.gif'} alt='imgProduct'
    className={`${ActiveShowImg == 0 ? "opacity-35 " : ""} showImg`}
    onClick={() =>{setActiveShowImg(details?.url)}} 
    width={80} height={80}/>

    <Image src={details?.url2 ? details?.url2 : '/loading-gif.gif'} alt='imgProduct'
    className={`${ActiveShowImg == 1 ? "opacity-35 " : ""} showImg`}
    onClick={() =>{setActiveShowImg(details?.url2)}} 
    width={80} height={80}/>

    <Image src={details?.url3 ? details?.url3 : '/loading-gif.gif'} alt='imgProduct'
    className={`${ActiveShowImg == 2 ? "opacity-35 " : ""} showImg`}
    onClick={() =>{setActiveShowImg(details.url3)}} 
    width={80} height={80}/>

    <Image src={details?.url4 ? details?.url4 : '/loading-gif.gif'} alt='imgProduct'
    className={`${ActiveShowImg == 3 ? "opacity-35 " : ""} showImg`}
    onClick={() =>{setActiveShowImg(details?.url4)}} 
    width={80} height={80}/>
    </div>

    </div>
    
    <SideBarControl params ={params.detailsid} name={details.name} price={details.price}
    color={details.color} type={details.type} img={details.url} Products = {manProducts}
    manProduct={details}/>
    </div>


    <Footer />
    </>
    )
}

export default Details;
