import React from 'react'
import './AdBanner.css'
import bannerImg from '../../assets/images/product_banner.jpg'

const AdBanner = () => {
  return (
    <div className="banner-block" >
        <img src={bannerImg} alt="" /> 
    </div>     
  )
}

export default AdBanner
