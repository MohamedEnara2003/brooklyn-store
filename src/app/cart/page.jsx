
'use client'
import React from 'react'

import { useEffect,  useState,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadCry } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import {  faMinus, faPlus, faShoppingCart, faTrash,  } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { fetchCart } from '@/src/rtk/slices/cartSlice';
import  '@/src/i18n';
import Navbar from '../components/navbar';
import Search from '../components/search';
import Payment from './component/payment';
import Image from 'next/image';
import Footer from '../components/footer';

function CartSideBar(props) {
    const cart = useSelector(state => state.cart)

    const [t , il8n] = useTranslation()
    const [showSearch , setShowSearch] = useState()
    const [TotalPrice , setTotalPrice] = useState()

    const dispatch = useDispatch()

    useEffect( () => {
        getProductCart()
    },[])

    const getProductCart = ()=>{
        dispatch(fetchCart())
    }
    
    const deleteCart = (cardId)=>{
        axios({
            method: 'delete',
            url: `http://localhost:3003/cart/${cardId}`,
        }).then(data => {
        getProductCart()
        })
    }

    const editQuantity = (id , quantity , img , type , color, size, price)=>{
    axios.put( `http://localhost:3003/cart/${id}`,{
    id, quantity, img , type , price , color , size ,
    }).then(data => data)
    getProductCart()
    }
    
    useEffect(() =>{
    const totalPrice = cart.reduce((acc ,product) =>{
    acc += product.price * product.quantity
    return acc
    },0)
    setTotalPrice(totalPrice)
    },[cart])


    return(
    <>
    <Navbar setShowSearch = {setShowSearch}/>
    <Search showSearch = {showSearch } setShowSearch = {setShowSearch}/>
    <div className="cart-side">

    <p className={`${il8n.language == "en" ? "num_cart " : "num_cart "}`}>
    {t("cart")} <FontAwesomeIcon icon={faShoppingCart}/> - {cart.length }</p>

    {cart.length === 0 ? 
    <div className="cart_empty ">
    <p className="title_empty"> {t("hideCart")}  <FontAwesomeIcon icon={faFaceSadCry}
    className=" bg-yellow-400 rounded-[50%] shadow-sm shadow-black" /></p>
    <button className="btn_empty"> {t("shopping now")} </button>
    </div>
    :
    <>


    <div className="container_carts">
    {cart.map(cart => {
        return(
        <div className="cart" key={cart.id}>
        <Image src={cart.img}  alt={cart.id} className="product_cart" width={100} height={100}/>

        <p className="data_cart">{cart.color} / {cart.size }</p>
        <p className="data_cart ">{cart.type}</p>

        <div className="edit_quantity" key={cart.id}>
        <FontAwesomeIcon icon={faMinus}  onClick={() => {

        if(cart.quantity > 1){
        editQuantity(cart.id , cart.quantity - 1, cart.img , cart.type , cart.color ,cart.size,
        cart.price )
        return cart.price
        }}}/>
        {cart.quantity}
    
        <FontAwesomeIcon icon={faPlus}  onClick={() => {

        if(cart.quantity < 50){
        editQuantity(cart.id , cart.quantity + 1, cart.img , cart.type , cart.color ,cart.size,
        cart.price )
        return cart.price
        }}}/>
    
        </div>
    
        <p className="data_cart ">le {cart.price * cart.quantity}</p>


        <FontAwesomeIcon icon={faTrash}  onClick={()=>{
        Swal.fire({
        title:t("masg del"),
        color: "black",
        confirmButtonText : t("ok"),
        showCancelButton : true ,
        cancelButtonText :t("cancel"),
        animation: true
        }).then((data) => {if(data.isConfirmed){deleteCart(cart.id)}})}} className="del-cart "/>

    </div>

    )})}

    </div>
    <Payment  totalPrice={TotalPrice}/>
    </>
    }
    
 
    </div>
    <Footer/>
    </>
    )
}

export default CartSideBar