import React from 'react'

export const Footer = () => {
  return (
    <div className='containerFooter'>

        <div className='containerLogo2'>
          <img className='logo2' src="https://www.facebook.com/images/fb_icon_325x325.png" alt="facebook" />
          <h1 className='build'> © 2022 ecommerce software by @theerudito</h1>
        </div>

        <div className='information'>
        <h1>INFORMATION</h1>
          <p>Special</p>
          <p>New Producto</p>
          <p>Best Sellers</p>
          <p>Our Store</p>
        </div>

        <div className='account'>
          <h1>MY ACCOUNT</h1>
          <p>Special</p>
          <p>New Producto</p>
          <p>Best Sellers</p>
          <p>Our Store</p>
        </div>

        <div className='follow'>
        <h1>FOLLOW US</h1>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Tiktok</p>
        </div>

    </div>
  )
}
