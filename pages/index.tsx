import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
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
      </Head>
    <div className="fixed top-0 bottom-0 bg-black bg-opacity-60" 
    style={{
      minHeight: '100vh',
      width: '100%',
      zIndex: -1,
    }}
    ></div>
<video autoPlay muted loop playsInline
className="background-video"
style={{ 
objectFit: "cover",
}}
>
<source src="/bg2.mp4" type="video/mp4">
    </source>
</video>



      <main className="my-20 min-h-screen">
  <div className="flex justify-center">
    <img src="/bekachi.png" className="w-6/12 lg:w-3/12" alt="" /> <br />
    
  </div>
  <section className="mx-20 mt-20">
      <h1 className="text-4xl lg:text-7xl text-center  text-white font-bold">
        FLAVOURS <br /> ON <span className="text-yellow-600">DEMAND</span></h1> <br />

       <div className="flex justify-center mt-5">
       <button className="bg-yellow-600 hover:bg-yellow-700 font-bold text-2xl px-12 py-5 rounded-xl"
       onClick={()=>{
        window.location.href = 'https://wa.me/918073536989?text=Hello%20Bekachi%20I%20want%20to%20order'
       }}
       >ORDER NOW</button>
       </div>
    </section>
      </main>
<section
className="min-h-screen flex justify-center items-center bg-black text-white" 
>
<div className="lg:w-6/12">
<p className=" px-16  text-justify">
 Experience the real taste from Bekachi food products. With 8+ years in the field 
 of food and beverages, Bekachi is one of the most trusted brands in the industry. 
  We are committed to provide with the best quality products and services.
  
  Bekachi is franchised in various cities across India and abroad.
 </p>
<div className="flex justify-center">
  <button className="bg-white hover:bg-opacity-80 px-8 py-3 rounded text-black mt-8"
  onClick={()=>{
    window.location.href = 'https://wa.me/918073536989?text=Bekachi%20Franchise'
   }}
  >
    FRANCHISE NOW</button>

</div>
</div>

</section>
     <footer className="bg-white  flex justify-center p-4">
       &copy; Ziqx {new Date().getFullYear()}
     </footer>
    </div>
  )
}

export default Home
