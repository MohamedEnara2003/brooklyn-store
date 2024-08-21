'use client'
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faArrowDownLong, } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "@/src/i18n";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";



function Create({params}){

    const [ type, setType]    = useState("")
    const [ id, setId]        = useState()
    const [ name ,  setName ] = useState("")
    const [ price , setPrice] = useState()
    const [ color ,setColor ] = useState("")
    const [ url,   setUrl]    = useState("")
    const [ url2 , setUrlTwo] = useState("")
    const [ url3 , setUrlThree] = useState("")
    const [ url4 , setUrlFour ] = useState("")
    const [ dataType  , setDataType ] = useState("")


    const options = [{ id: 1 , name:"Type"},{ id: 2 , name:"Tshirt"},{ id: 3 , name:"shirt"},
    {id: 4 , name:"jackets"},{ id: 5 , name:"pants"},{ id: 6 , name:"jeans"},{ id: 7 , name:"shorts"},]

    const options2 = [{ id: 1 , name:"Type"},{ id: 2 , name:"Tshirt"},{ id: 3 , name:"shirt"},
    {id: 4 , name:"jackets"},{ id: 5 , name:"pants"},{ id: 6 , name:"jeans"},{ id: 7 , name:"dresses"},]

    const myId = useRef()

    const [activeGender ,setActiveGender] = useState() 
    const [Products ,setProducts] = useState([]) 
    const [maxID ,setMaxID] = useState() 


    useEffect(()=>{
    if(params.createid === "create2"){
    setDataType("women")
    }else{
    setDataType("man")
    }
    },[])
    
    
    useEffect(()=>{
    fetch(`${params.createid === "create2" ? "http://localhost:3005/Women":"http://localhost:3005/MAN"}`
    ,{ next: { revalidate: 0 } }).then(res => res.json()).then(data => setProducts(data))
    },[])
    

    useEffect(()=>{
    let max = Products.reduce((acc , id) =>{
    return acc > id ? acc : id
    },0)
    setMaxID(+max.id)
    },[Products])

    
    useEffect(()=>{
    myId.current.value = maxID + 1  ;
    setId(+myId.current.value);
    },[maxID])
    


    useEffect(()=>{
    if(params.createid === "create2"){
    setActiveGender(false)
    }else{
    setActiveGender(true)
    }
    },[params.createid])
    
    return(
    <>
    <Navbar/>
    <div className="create  relative w-full h-screen bg-white flex justify-center items-center">
    <span className="title-create"><span className="sale text-lg">
    create</span> {activeGender == true ? "men's " : "women"} product</span>

    <form action="#" className="form_create" onSubmit={(e) =>{

    if(type === "Type" || url == "" || url2 =="" || url3 ==""||  name == "" || 
    price == 0 || color == ""){
    e.preventDefault()
    }else{
    axios.post(`${params.createid === "create2" ? "http://localhost:3005/Women":"http://localhost:3005/MAN"}`
    ,{
    id, url , url2 , url3 , url4, name, price , color, type, dataType 
    }).then((data) => data)
    }}}> 

    <span > a new product for ? <br />
    <FontAwesomeIcon icon={faArrowDownLong} 
    className="text-xl absolute left-[49%] translate-x-[-49%]"/>
    </span>
    <div className="row">
    
    <Link  href="/admin/create1" 
    className={`${activeGender == true ? "btn-gender-active btn-gender": "btn-gender"}`}onClick={(e)=>{
    setActiveGender(true)
    }}>man product</Link>

    <Link href="/admin/create2" 
    className={`${activeGender == false ? "btn-gender-active btn-gender": "btn-gender"}`}onClick={(e)=>{  
    setActiveGender(false)
    }}>woman product</Link>

    </div>
    
    <div className="row">
    
    <input type="text"   placeholder="name product"  className="input-create w-[40%]  mr-[5%]bg-[#eee]"
    onChange={(e) =>{setName(e.target.value)}}/>
    <input type="text"   placeholder="color product" className="input-create w-[40%] ml-[5%]"
    onChange={(e) =>{setColor(e.target.value)}}/>
    </div>

    <div className=" w-full  flex justify-center items-center">
    <input type="number" ref={myId} placeholder="id" disabled 
    className="input-create w-[25%] mx-[2%]"/>

    <input type="number" placeholder="price " className="input-create w-[25%] mx-[2%]" 
    onChange={(e) =>{setPrice(+e.target.value)}}/>


    <select  id="select-typeProduct" onChange={(e) =>{setType(e.target.value)}}>
    {params.createid === "create2" ? 
    options2.map(option => {return(<option key={option.id} value={option.name}>{option.name}</option>)}) 
    :
    options.map(option => {return(<option key={option.id} value={option.name}>{option.name}</option>)}) 
    }
    </select>


    </div>
    <input type="text"placeholder="url  image"className="input-create input-url"
    onChange={(e) =>{setUrl(e.target.value)}}/>

    <input type="text"placeholder="url2 image"className="input-create input-url"
    onChange={(e) =>{setUrlTwo(e.target.value)}}/>

    <input type="text"placeholder="url3 image"className="input-create input-url"
    onChange={(e) =>{setUrlThree(e.target.value)}}/>

    <input type="text"placeholder="url4 image"className="input-create input-url"
    onChange={(e) =>{setUrlFour(e.target.value)}}/> 

    <button className="btn_create"> <FontAwesomeIcon icon={faAdd} /> add product</button>
 
    </form>
    
    </div>
    <Footer/>
    </>
    )
}
export default Create;
