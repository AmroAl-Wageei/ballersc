import React from 'react'
// import Navbar from '../components/Navbar/Navbar'
// import Wavy from '../components/Wavy/wavy'
import First from '../components/First/first'
import AboutBallers from '../components/Aballers/aballers';
import Services from '../components/services/services'
// import Multi from '../components/Multi/multi'
// import Scan from '../components/Scan/scan';
// import Map from '../components/Map/map'
// import FAQ from '../components/FAQ/faq';
// import Slider from '../components/Slider/slider'
// import Ballers from '../components/Ballers/ballers'
// import Footer from '../components/Footer/Footer'
import FixedButton from '../components/FixedButton/FixedButton'
import ScrollToTop from '../components/ScrollToTop/top'

// #BDE4F4
// #404969
// #DC552C

export default function home() {
  return (
    <div>
      <First />
      <AboutBallers />
      <Services />
      <FixedButton />
      <ScrollToTop />
    </div>
  )
}