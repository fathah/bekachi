import SecondSection from '@/components/home/about'
import MainHead from '@/components/home/main'
import Testinomials from '@/components/home/testinomials'
import Third from '@/components/home/third'
import NavBar from '@/components/nav'
import Footer from '@/components/footer'

import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

const Home: NextPage = () => {

useEffect(() => {
  if(document){
    console.log("yeahaha");
    document.addEventListener('scroll',()=>{
    })
  }
},[])

  return (
    <div>
        <Head>
        <title>BEKACHI</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Flavours on demand." />
      </Head>
      <NavBar></NavBar>
    




      <main className=" min-h-screen">
      <MainHead></MainHead>
      </main>
      <SecondSection></SecondSection>
      <Third></Third>
<Testinomials/>
<Footer></Footer>      

    
    </div>
  )
}

export default Home
