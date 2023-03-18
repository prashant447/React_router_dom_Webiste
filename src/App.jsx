import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Header from './Component/Header'
import Footer from './Component/Footer'
import { ThemeProvider } from 'styled-components'
import Error from './Error'
import GoToTop from './Component/GoToTop'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle'
import { AppProvider } from './Context'

const App = () => {
  
  const theme = {
    colors:{
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "rgb(126 128 253 / 21%)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:"linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
      
    },
    media:{mobile: "768px", tab:"998px"},
  };




  return (
    <>
    <AppProvider>
 
    <ThemeProvider theme = {theme}>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path = '/' element = {<Home/>} />
      <Route path = '/about' element = {<About/>} />
      <Route path = '/contact' element = {<Contact/>} />
      <Route path = '/services' element = {<Services/>} />
      <Route path = '*' element = {<Error/>} />
    </Routes>
    <GlobalStyle/>
    <GoToTop/>
   <Footer/>
    </BrowserRouter>
    </ThemeProvider>

    
    </AppProvider>
    </>
  )
}

export default App