import React from 'react'
import { Person , TrophySharp , Heart , BasketballSharp , CalendarSharp , Laptop } from 'react-ionicons'
// import { FaCircleArrowDown } from "react-icons/fa6";
import { ArrowDownCircle } from 'react-ionicons'

import { useTranslation } from 'react-i18next';
// #BDE4F4
// #404969
// #DC552C

import './services.css'


 function Example() {
  const { t } = useTranslation();
  return (
<div>
<h2 class="speacial-heading">{t('services')}</h2>
<p>{t('tagline')}</p>
<section className="services">
<div className="container_services">
  <div className="serviceBox">
    <div className="icon" style={{"--i":"#BDE4F4"}}>
    <TrophySharp
    color={'#a69b9b'}
    beat
    height="70px"
    width="70px"
    onClick={() => alert('Hi!')}
  /> 
       </div>
    <div className="content_services">
      <h2>{t('deliverTitle')}</h2>
      <p>{t('deliverContent')}</p>
    </div>
  </div>
  <div className="serviceBox">
    <div className="icon" style={{"--i":"#404969"}}>
    <BasketballSharp
    color={'#a69b9b'}
    rotate
    height="70px"
    width="70px"
    onClick={() => alert('Hi!')}
  /> 
    </div>
    <div className="content_services">
      <h2>{t('PaymentTitle')}</h2>
      <p>
      {t('PaymentContent')}
      </p>
    </div>
  </div>
  <div className="serviceBox">
    <div className="icon" style={{"--i":"#DC552C"}}>
    <Person
    color={'#a69b9b'}
    beat
    height="70px"
    width="70px"
    onClick={() => alert('Hi!')}
  /> 
    </div>
    <div className="content_services">
      <h2>{t('StoresTitle')}</h2>
      <p>
      {t('StoresContent')}</p>
    </div>
  </div>
  <div className="serviceBox">
    <div className="icon" style={{"--i":"#404969"}}>
    <CalendarSharp
    color={'#a69b9b'}
    beat
    height="70px"
    width="70px"
    onClick={() => alert('Hi!')}
  /> 
    </div>
    <div className="content_services">
      <h2>{t('DigitalTitle')} </h2>
      <p>
      {t('DigitalContent')}
      </p>
    </div>
  </div>
  <div className="serviceBox">
    <div className="icon" style={{"--i":"#DC552C"}}>
    <Heart
    color={'#a69b9b'}
    beat
    height="70px"
    width="70px"
    onClick={() => alert('Hi!')}
  /> 
    </div>
    <div className="content_services">
      <h2>{t('CustomerTitle')}</h2>
      <p>
      {t('CustomerContent')}
      </p>
    </div>
  </div>
  <div className="serviceBox">
    <div className="icon" style={{"--i":"#BDE4F4"}}>
    <Laptop
    color={'#a69b9b'}
    beat
    height="70px"
    width="70px"
    onClick={() => alert('Hi!')}
  /> 
    </div>
    <div className="content_services">
      <h2>{t('ReturnsTitle')}</h2>
      <p>
      {t('ReturnsContent')}
      </p>
    </div>
  </div>
</div>
</section>

<section className='After-services'>
<h2 id='testggg'>{t('After-services')}  </h2>

<ArrowDownCircle
  color={'#404969'} 
  title={'Service-Arrow'}
  height="70px"
  width="70px"
/>


</section>

</div>


  )
}

export default  Example