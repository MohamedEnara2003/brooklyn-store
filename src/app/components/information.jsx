import { faCottonBureau } from "@fortawesome/free-brands-svg-icons";
import { faCalendarWeek, faCreditCardAlt, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { t } from "i18next";
import { useTranslation } from "react-i18next";



function Information(){
    const [t , il8n] = useTranslation()
    return(

    <div className="information-home">

    <span className="text-icon"> <FontAwesomeIcon icon={faTruck} className="icon-info"/>
    {t('Fast Delivery')}
    </span>

    <span className="text-icon"> <FontAwesomeIcon icon={faCalendarWeek}  className="icon-info"/> 
    {t('Money Guarantee')} {t('7 Days Back')}
    </span>

    <span className="text-icon"> <FontAwesomeIcon icon={faCottonBureau}  className="icon-info"/> 
    {t('egy cotton  100%')}
    </span>

    <span className="text-icon"> <FontAwesomeIcon icon={faCreditCardAlt} className="icon-info"/> 
    {t('Payment')} {t('Secure system')}
    </span>

    </div>

    )
}
export default Information ;