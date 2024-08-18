import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';

function SectionOne() {
  const [t , il8n] = useTranslation()
  return (
    <div className="SectionOne">
    <div className="line-home line-l"></div>
    <div className="line-home line-r"></div>
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    pagination={{ clickable: true }}
    onSwiper={(swiper) => swiper}
    >
      <SwiperSlide>
      <div className="card-home">
      <div className="textes-card">
      <p className='title-card'>{t('man home')}</p>
      <p className='text-gender'>{t('man')}</p>
      <p className='text-card'><span className='sale'>{t('sale')} </span>{t('brooklyn')}</p>
      <p className='text-sale'>{t('text sale')}</p>
      <Link href="/MenProducts"  className='btn-card'>{t('shop now')}</Link>
      </div>

      <Image src="/man2.png" alt="men products" className='img-home' width={200} height={200}/>
      </div>
      
      </SwiperSlide>
      <SwiperSlide>
      <div className="card-home">
      <div className="textes-card">
      <p className='title-card '>{t('woman home')}</p>
      <p className='text-gender'>{t('woman')}</p>
      <p className='text-card'><span className='sale'>{t('sale')} </span>{t('brooklyn')}</p>
      <p className='text-sale'>{t('text sale')}</p>
      <Link href="/WomenProducts"  className='btn-card'>{t('shop now')}</Link>
      </div>
      <Image src="/woman.png" alt="women products" className='img-home img-woman'width={200} height={200}/>
      </div>
      </SwiperSlide>
    
    </Swiper>
    
 
    </div>
  )
}

export default SectionOne