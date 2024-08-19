'use client'
import { useEffect,  useState } from "react";
import Footer from "../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import Search from "../components/search";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/navbar";
import HeaderwomenProduct from "./components/HeaderwomenProduct ";
import { fetchWomanProduct } from "@/src/rtk/slices/womenSlices";
import "@/src/i18n";
import Image from "next/image";



function  WomenProducts(){
    const [typeProduct , setTypeProduct ] = useState("All Products")
    const [showSearch , setShowSearch] = useState()

    const [randomImg, setRandomImg ] = useState(0)
    const [hidebtn, setHideBtn ] = useState(false)

    const router = useRouter()
    const WomenProduct = useSelector((state) => state.women)
    const dispatch = useDispatch()

    useEffect(()=>{
    dispatch(fetchWomanProduct())
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
    <HeaderwomenProduct  setTypeProduct = {setTypeProduct}/>

    <div className="containar_products">
    
    {WomenProduct.map((womenProduct) => {
        if(womenProduct.type === typeProduct || typeProduct === "All Products"){
        return(
        
        <div className={`card_product`} key={womenProduct.id} 
        onMouseOver={() => {setHideBtn(womenProduct.id)}}
        onMouseLeave={() =>{setHideBtn(false)}}>

        <Image src={randomImg == 0 ? womenProduct.url :null || randomImg == 1 ? womenProduct.url2 :null ||
        randomImg == 2 ? womenProduct.url3 :null ||randomImg == 3 ? womenProduct.url4 :null }
        alt={womenProduct.name} width={150} height={150}
        onClick={()=>{router.push(`/WomenProducts/${womenProduct.id}`)}} />

        <p className="info-product">{womenProduct.name}</p>
        <p className="info-product"> le {womenProduct.price}</p>
        <del className="dicound-product"> le {womenProduct.price + womenProduct.price }</del>
        
        <button key={womenProduct.id} className={`${hidebtn == womenProduct.id ? "btn-details" : "scale-0"}`}
        onClick={()=>{router.push(`/WomenProducts/${womenProduct.id}`)
        }}> {t("details")} <FontAwesomeIcon icon={faSearchPlus}/></button>
        
        </div>
    )}
    })}
    </div>

    <Footer />

    </>
    )
}
export default  WomenProducts;