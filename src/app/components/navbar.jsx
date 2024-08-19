'use client'
import i18n from '@/src/i18n';
import { fetchCart } from '@/src/rtk/slices/cartSlice';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';



function Navbar(props) {
    const [navbar, setNavbar] = useState(false);
    const [openSearch, setOpenSearch] = useState(false)
    const [t , il8n] = useTranslation()
    const router = useRouter()

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
    dispatch(fetchCart())
    },[])
    
    return (
    <nav className="nav-bar">
    <div className="justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">

    <Image src="/logo.png" alt="logo page" className='logo' width={100} height={100} onClick={() =>{
    router.push('/')
    }}/>
    <div>

            <div className="flex items-center justify-start md:py-5 md:block">
                <div className="md:hidden">
                    <button
                        className="p-2 text-white rounded-md outline-none focus:border-gray-100 focus:border"
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
        <div>
            <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navbar ? "block" : "hidden"
                }`}
            >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li className="links-nav">
                    <Link href="/MenProducts">{t('man')}</Link>
                    </li>
                    <li className="links-nav">
                    <Link href="/WomenProducts">{t('woman')}</Link>
                    </li>
                    <li className="links-nav">
                        <a href="#">{t('about')}</a>
                    </li>
                    <li className="links-nav">
                    <a href="#">{t('contact')}</a>
                    </li >

        <li>
        <div className="flex items-center cursor-pointer hover:scale-105 duration-500" onClick={() =>{
        if(i18n.language == "en"){i18n.changeLanguage("ar")}
        else(i18n.changeLanguage("en"))
        }}>
        <Image src={`${i18n.language == "en" ? "/AR.png" : "/EN.png"}`} alt='lang' width={20} height={20}
        className='flag'/>
        <button type="button" className='option-lang'>
        {i18n.language == "en" ? "ar" : "en"}</button>
        </div>
        </li >
        </ul>

        </div>
        
        </div>


    <div className="container-icons-nav text-white">
    <FontAwesomeIcon icon={faSearch}  className="icons-nav" onClick={() =>{
    if(openSearch === false){  
    props.setShowSearch(true)
    setOpenSearch(true)
    }
    else if(openSearch === true){
    props.setShowSearch(false)
    setOpenSearch(false)
    }
    }}/>
    |
    <Link href="/cart" className="icons-nav relative"><FontAwesomeIcon icon={faShoppingCart} /> 
    <span className={"count-cart"}>{cart.length}</span></Link>
    </div>

    </div>
</nav>
  )
}

export default Navbar