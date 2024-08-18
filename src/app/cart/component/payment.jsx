"use client";

import { t } from "i18next";
import Link from "next/link";


function Payment (props){
    return(
        <>
        
        <div className=" payment_summary">
        <p className="title_payment"> {t("payment summary")}</p>
    
        <span className="summary_price"> {t("total")}:  <span className="font-bold uppercase">
        le {props.totalPrice}.00</span></span>
    
        <p className="title-payment-method"> {t("payment methods")} </p>
    
        <Link href="/checkout" className='btn_AddCart my-3  p-2 '>{t('checkout process')}</Link>
        <Link href="/" className='btn_AddCart my-3 p-2 bg-transparent text-black 
        border-[1px] border-black'>{t('continue shopping')}</Link>
    

        </div>
        
    
        </>
    )
}
export default Payment ;