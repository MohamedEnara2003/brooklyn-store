'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faFaceGrinStars, } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Image from "next/image";



function SideBarControl(props){


    const [productSize , setSize] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(null)

    const [ActiveControl, setActiveControl] = useState(false)
    const [ActiveSize, setActiveSize] = useState("")

    const [cart, setCart] = useState([])



    const router = useRouter()
 
    useEffect(() =>{
    fetch("https://brooklyn-vercel.vercel.app/sizes").then(res => res.json()).then(data => setSize(data))
    },[])

    useEffect(() =>{
    fetch("https://brooklyn-vercel.vercel.app/cart").then(res => res.json()).then(data => setCart(data))
    },[])
    

    useEffect(()=>{
    setPrice(props.price)
    },[props.price])



    const useActiveSize = (i)=>{
        setActiveSize(i)
    }
    
    useEffect(() =>{
        {setTimeout(()=>{
            setActiveControl(true)
        },10)}
    },[])
    

    useEffect(() =>{
    productSize.map(product =>{
    if(props.type == "jeans" ||  props.type == "pants"  || props.type == "shorts"){
    setActiveSize(10)
    }else{
    setActiveSize(2)
    }
    })
    },[productSize])

    const [t , il8n] = useTranslation()

    return(
    <>
    <aside className={`container__control 
    ${ActiveControl == true ? "translate-x-0" :"translate-x-[200%]"} `}>

    <p className="title_control">{t("Prepare your product")} <FontAwesomeIcon icon={faFaceGrinStars}
    className="faFaceGrinStars"/></p>

    <p className="name_product"> {t("color")} : {props.name}</p>
    
    <div className="prices">
    <span className="price del">le {props.price * 2}.00</span>
    <span className="price "> le {props.price}.00</span>
    </div>

    <div className="container__color">
    {props.Products.map((color) => {
        if(color.type == props.type ){ 
        return(
        <Image src={color.url} alt={color.name} key={color.id} width={30} height={30}
        className={`color_product ${color.id === props.params ? " blur-[1px]  scale-105 border-[1px]" : null}`} 
        onClick={() =>{

        if(color.dataType == "women"){
        router.push(`/WomenProducts/${color.id}`)
        }else if(color.dataType == "man"){
        router.push(`/MenProducts/${color.id}`)
        }
        }}/>)
        }
    })}
    </div>

    <div className="container__size">
    {productSize.map((size) =>{

    if(props.type == "jeans" ||  props.type == "pants"  || props.type == "shorts"){
    if(typeof size.size === "number"){
    return(<button className={`btn_size ${ActiveSize == size.id ? "active__size": ""}`} key={size.id}
    onClick={() =>{useActiveSize(size.id)}}>{size.size}</button>)
    }
    }else if(typeof size.size === "string"){
    return(<button className={`btn_size ${ActiveSize == size.id ? "active__size": ""}`} key={size.id}
    onClick={() =>{useActiveSize(size.id)}}>{size.size}</button>)
    }
    })}
    </div>
    
    <p className="title_quantity">{t('quantityTitle')}</p>

    <p className="total_price"> {t("total price")} : <span className="total_price">
    le {price == null ? props.price: price}.00</span></p>

    <button className={`btn_AddCart`} onClick={() =>{
    let id2 = cart.length +  1;
    let id = id2.toString()
    let size = document.querySelector(".active__size").textContent;
    let color = props.color;
    let type = props.type;
    let img = props.img;
    
    axios.post("http://localhost:3005/cart",{
    id, price, quantity, size, color, type, img
    }).then(data => setCart(data))
    router.push('/cart')

    }}> {t("Add to cart")} <FontAwesomeIcon icon={faCartPlus}/></button>

    </aside>
    </>
    )

}
export default SideBarControl

