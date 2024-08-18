'use client'

import React, { useEffect, useRef, useState } from 'react'
import '@/src/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Navbar from '@/src/app/components/navbar';
import Image from 'next/image';
import Footer from '@/src/app/components/footer';

function EditManProduct({params}) {
    const [showSearch , setShowSearch] = useState(false)
    const [showEditProduct , setShowEditProduct] = useState([])
    const [editProduct , setEditProduct] = useState(false)

    const [ type, setType]      = useState("")
    const [ id, setId]          = useState()
    const [ name ,  setName ]   = useState("")
    const [ price , setPrice]   = useState()
    const [ color ,setColor ]   = useState("")
    const [ url,   setUrl]      = useState("")
    const [ url2 , setUrlTwo]   = useState("")
    const [ url3 , setUrlThree] = useState("")
    const [ url4 , setUrlFour ] = useState("")
    const [ dataType, setDataType ] = useState("women")


    useEffect(() =>{
    fetch(`http://localhost:3004/Women/${params.id}`
    ).then(res => res.json()).then(data => setShowEditProduct(data))
    },[])

    const myId = useRef()
    const myName  = useRef()
    const myColor = useRef()
    const myPrice = useRef()
    const myurl1 = useRef()
    const myurl2 = useRef()
    const myurl3 = useRef()
    const myurl4 = useRef()
    const myType = useRef()

    useEffect(()=>{
    myId.current.value =  showEditProduct.id ;
    setId(+myId.current.value);
    },[showEditProduct])
    
    useEffect(()=>{
    myName.current.value = showEditProduct.name;
    setName(myName.current.value)
    },[showEditProduct])
    
    useEffect(()=>{
    myColor.current.value = showEditProduct.color;
    setColor(myColor.current.value)
    },[showEditProduct])

    useEffect(()=>{
    myPrice.current.value = showEditProduct.price;
    setPrice(+myPrice.current.value)
    },[showEditProduct])

    useEffect(()=>{
    myType.current.value = showEditProduct.type;
    setType(myType.current.value)
    },[showEditProduct])

    useEffect(()=>{
    myurl1.current.value = showEditProduct.url;
    myurl2.current.value = showEditProduct.url2;
    myurl3.current.value = showEditProduct.url3;
    myurl4.current.value = showEditProduct.url4;

    setUrl(myurl1.current.value)
    setUrlTwo(myurl2.current.value)
    setUrlThree(myurl3.current.value)
    setUrlFour(myurl4.current.value)
    },[showEditProduct])
    

    const options = [{ id: 1 , name:"Type"},{ id: 2 , name:"Tshirt"},{ id: 3 , name:"shirt"},
    {id: 4 , name:"jackets"},{ id: 5 , name:"pants"},{ id: 6 , name:"jeans"},{ id: 7 , name:"dresses"},]


    return (
    <>
    <Navbar setShowSearch = {setShowSearch}/>
    <div className="page-edit">

    <span className='title-create'><span className='sale text-3xl'> edit </span>product</span>

    <div className={`${editProduct == false ? "edit-data" : "translate-y-[-300%] edit-data"}`}>
    <Image src={showEditProduct.url} alt={showEditProduct.name} className='img-edit' 
    width={80} height={80}/>
    <span className='data_edit'>name : {showEditProduct.name}</span>
    <span className='data_edit'>type : {showEditProduct.type}</span>
    <span className='data_edit'>color : {showEditProduct.color}</span>
    <span className='data_edit'> price : {showEditProduct.price}</span>
    <button className='btn_edit' onClick={() => setEditProduct(true)}>edit now</button>
    </div>



    <form action="#" className={`${editProduct == true ? "form_edit":"translate-y-[300%]"}`} 
    onSubmit={(e) =>{
    if(type === "Type" || url == "" || url2 =="" || url3 ==""||  name == "" || 
    price == 0 || color == ""){
    e.preventDefault()
    }else{
    axios.put(`http://localhost:3004/Women/${params.id}`
    ,{
    id, url , url2 , url3 , url4, name, price , color, type,  dataType
    }).then((data) => data)
    }}}> 



<div className="row ">

<input type="text" ref={myName}   placeholder="name product"  className="input-create w-[40%]  mr-[5%]"
onChange={(e) =>{setName(e.target.value)}}/>

<input type="text" ref={myColor}   placeholder="color product" className="input-create w-[40%] ml-[5%]"
onChange={(e) =>{setColor(e.target.value)}}/>
</div>

<div className=" w-full  flex justify-center items-center">

<input type="number" ref={myId} placeholder="id" disabled 
className="input-create w-[25%] mx-[2%]"/>

<input type="number" ref={myPrice} placeholder="price product" className="input-create w-[25%] mx-[2%]" 
onChange={(e) =>{setPrice(+e.target.value)}}/>

<select ref={myType}  id="select-typeProduct" onChange={(e) =>{setType(e.target.value)}}>
{options.map(option => {return(<option key={option.id} value={option.name}>{option.name}</option>)}) }
</select>

</div>

    
    <input ref={myurl1} type="text"  placeholder="url-1 image"
    className="input-create  input-url " onChange={(e) => setUrl(e.target.value) }/>

    <input ref={myurl2} type="text"  placeholder="url-2 image"
    className="input-create input-url" onChange={(e) => setUrlTwo(e.target.value) }/>

    <input ref={myurl3} type="text" placeholder="url-3 image"
    className="input-create input-url" onChange={(e) => setUrlThree(e.target.value) }/>

    <input ref={myurl4} type="text" placeholder="url-4 image"
    className="input-create input-url" onChange={(e) => setUrlFour(e.target.value) }/>

<button className="btn_edit"> <FontAwesomeIcon icon={faEdit} /> edit product</button>

</form>

</div>

    <Footer/>
    </>
)
}

export default EditManProduct;

