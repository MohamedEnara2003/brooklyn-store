import {  faCopyright, faEnvelope, faPhone  } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebookSquare, faInstagram, faWhatsapp, } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from "react-i18next"
import Link from "next/link"
import Image from "next/image"



function Footer (props){
    const [t , il8n] = useTranslation()
    return(
    <footer className="footer">
        
    <form action="#" className='form_footer' onClick={(e)=>{
        e.preventDefault()
    }}>
    <input type="email" placeholder={t("placeholder")} className='input_footer'/>
    <button className='btnEmail-footer'>{t("submit")}</button>
    </form>

    <div className="methods_payment-footer">

    </div>
    
    <p className="p_footer">
    {t("All links to")} <span className="text-brooklyn text-xl md:text-3xl"> {t("brooklyn")} </span> {t("to contact us")}</p>

    <div className="nav_icons">
    <div className='line line_left'></div>
    <a href="#" className='Icon_footer '><FontAwesomeIcon icon={faFacebookSquare} /></a>
    <a href="#" className='Icon_footer '><FontAwesomeIcon icon={faInstagram} /></a>
    <a href="#" className='Icon_footer '><FontAwesomeIcon icon={faEnvelope} /></a>
    <a href="#" className='Icon_footer '><FontAwesomeIcon icon={faWhatsapp}/></a>
    <a href="#" className='Icon_footer '><FontAwesomeIcon icon={faPhone} /></a>

    <div className='line line_right'></div>
    </div>
 
    <div className="nav-footer">
    <a href="#" className='link_footer'>{t("privacy policy")}</a>
    <a href="#" className='link_footer'>{t("terms")}</a>
    <Link href="/" className='link_footer'>{t("home page")}</Link>
    <a href="#" className='link_footer'>{t("about")} {t("brooklyn")}</a>
    </div>

    <Image src="/logo.png" alt="logo page" className="logo_footer" width={100} height={100} />
    
    <p className='title_down_footer'><FontAwesomeIcon icon={faCopyright}/> {t("footerTitle")}</p>
    </footer>
    )
}
export default Footer