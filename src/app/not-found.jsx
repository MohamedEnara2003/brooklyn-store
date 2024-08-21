'use client'
import React, { useState } from 'react'
import Navbar from './components/navbar';
import Footer from './components/footer';
import { t } from 'i18next';
import  '../i18n';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
function Notfound() {
    const [showSearch , setShowSearch] = useState()
    const [t , il8n] = useTranslation()
  return (
    <> 
    <Navbar setShowSearch = {setShowSearch}  />
    <div className=" relative w-full h-[70vh] bg-white flex flex-col justify-center items-center">
    <h2 className=' uppercase font-[900] text-4xl'>404</h2>
    <h1 className='sale uppercase font-[900] '>{t('Page not found')}</h1>
    <Link href="/" className='btn_AddCart font-bold rounded-sm mt-20 '>{t('continue shopping')}</Link>
    </div>
    <Footer/>
    </>
  )
}

export default Notfound ;