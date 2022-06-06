import React from 'react'
import { Cards } from '../Cards/Cards'

import { Carrousel } from '../Carrousel/Carrousel'
import { Collection } from '../Collection/Collections'

import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { Header2 } from '../Header/Header2'
import { Menu } from '../Menu/Menu'
import { SocialMedia } from '../SocialMedia/SocialMedia'



export const Layout = () => {
  return (
    <>
    <Header/>
    <Header2/>
    <Menu/>
    <Carrousel/>
    <Collection/>
    <Cards/>
    <SocialMedia/>
    <Footer/>
    </>
  )
}
