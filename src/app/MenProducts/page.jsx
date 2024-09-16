'use client'
import { useEffect,  useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import Search from "../components/search";
import HeaderManProduct from "./components/headerManproduct";
import { fetchManProduct } from "@/src/rtk/slices/manSlices";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/navbar";
import "@/src/i18n";
import Image from "next/image";
import Footer from "../components/footer";


function MenProducts(){
    const [typeProduct , setTypeProduct ] = useState("All Products")
    const [showSearch , setShowSearch] = useState()

    const [randomImg, setRandomImg ] = useState(0)
    const [hidebtn, setHideBtn ] = useState(false)

    const router = useRouter()
    const manProduct = useSelector((state) => state.man)
    const dispatch = useDispatch()

    useEffect(()=>{
    dispatch(fetchManProduct())
    },[])
    
    useEffect(()=>{
    let time = 0
    setInterval(() =>{
    time === 3 ? time = 0: null ;
    setRandomImg(time++)
    },4000)
    },[])
    
    const [t ] = useTranslation()

 


    return(
    <>
    <Navbar setShowSearch = {setShowSearch} />
    <Search showSearch = {showSearch } setShowSearch = {setShowSearch}/>
    <HeaderManProduct setTypeProduct = {setTypeProduct}/>

    <div className="containar_products">
 
    {manProduct.map((manProduct) => {
        if(manProduct.type === typeProduct || typeProduct === "All Products"){
        return(
        
        <div className={`card_product`} key={manProduct.id} 
        onMouseOver={() => {setHideBtn(manProduct.id)}}
        onMouseLeave={() =>{setHideBtn(false)}}>

        <Image src={randomImg == 0 ? manProduct.url : '/loading-gif.gif' || randomImg == 1 ? manProduct.url2 :'/loading-gif.gif'||
        randomImg == 2 ? manProduct.url3 :'/loading-gif.gif' ||randomImg == 3 ? manProduct.url4 :'/loading-gif.gif' }

        alt={manProduct.name} width={150} height={150} className="img-card"
        onClick={()=>{router.push(`/MenProducts/${manProduct.id}`)}} />

        <p className="info-product">{manProduct.name}</p>
        <p className="info-product"> le {manProduct.price}</p>
        <del className="dicound-product"> le {manProduct.price + manProduct.price }</del>
        
        <button key={manProduct.id} className={`${hidebtn == manProduct.id ? "btn-details" : "scale-0"}`}
        onClick={()=>{router.push(`/MenProducts/${manProduct.id}`)
        }}> {t("details")} <FontAwesomeIcon icon={faSearchPlus}/></button>
        
        </div>
    )}
    })}
    </div>

    <Footer />

    </>
    )
}
export default MenProducts;