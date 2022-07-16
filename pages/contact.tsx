import Footer from '@/components/footer'
import NavBar from '@/components/nav'
import Head from 'next/head'
import React from 'react'
import {BiPhone} from 'react-icons/bi'
import {HiOutlineMail} from 'react-icons/hi'

export default function Contact() {
  return (
    <div>
         <Head>
        <title>Contact - BEKACHI</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Flavours on demand." />
      </Head>
      <NavBar></NavBar>
<section className="py-32 px-10 lg:px-32  flex justify-center">
<div>
<h1 className="text-4xl font-bold">Connect Us</h1>
<p>We are always here to help you.</p> <br />
Addresses: <br />
<div><b>BEKACHI RESTOCAFE</b></div>
<div>DHS Enclave, Virajpet</div>
<div>Kodagu, KA, IN</div>
<br />
<br />
<b>
For Orders
</b>
<div className="flex items-center">
  <BiPhone className="text-yellow-600 text-2xl mr-2 "/>   <div>
  +91 9036 320 044 <br />
    +91 9036 320 022
  </div>
</div>
<br />
<b>
For Queries
</b>
<div className="flex items-center">
  <BiPhone className="text-yellow-600 text-2xl mr-2 "/>  
  +91 9480 778 776


</div>
 <br />
<b>
Email</b>
<div className="flex items-center">
  <HiOutlineMail className="text-yellow-600 text-2xl mr-2 "/>   <div>
 info@bekachi.com <br />
 md@bekachi.com <br />
 ceo@bekachi.com <br />
  </div>
</div>
<br />
<br />
<button
className='bg-yellow-600 text-white font-bold py-2 px-6 rounded-full'
onClick={()=>{
    window.open("https://instagram.com/bekachi_virajapet", '_blank')
}}
>Follow Us on Instagram</button>
</div>
</section>

      <Footer></Footer>      

    </div>
  )
}
