import React from 'react'
// import ContactImg from '../images/ballers_logo.png'
import ContactImg from '../images/contactus.png'
import './Contact.css'
import { useTranslation } from 'react-i18next';


export default function Contact() {
    const { t } = useTranslation();

  return (


    <div className='container-contactus'>
    <h2 class="speacial-heading">{t('contactus')}</h2>
    <p>{t('tagline-contactus')}</p>



    <div className="contact_body">

  <div className="contact_form">
    <form action="" method="post">
      <div>
        <input
          type="text"
          className="form_control"
          name="fname"
          id="fname"
          placeholder="First Name"
          required=""
        />
        <input
          type="text"
          className="form_control"
          name="lname"
          id="lname"
          placeholder="Last Name"
          required=""
        />
      </div>
      <div>
        <input
          type="email"
          className="form_control"
          name="email"
          id="email"
          placeholder="Email"
          required=""
        />
        <input
          type="text"
          className="form_control"
          name="phone"
          id="phone"
          placeholder="Phone"
          required=""
        />
      </div>
      <textarea
        className="form_control"
        name="message"
        id="message"
        cols={30}
        rows={5}
        placeholder="Message"
        defaultValue={""}
      />
      <input type="submit" className="send_btn" defaultValue="send message" />
    </form>
    <div>
      <img src={ContactImg} alt="contact us" />
    </div>
  </div>
</div>


    </div>

  )
}
