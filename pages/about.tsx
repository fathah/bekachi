import Footer from '@/components/footer'
import NavBar from '@/components/nav'
import Head from 'next/head'
import React from 'react'
import {BiPhone} from 'react-icons/bi'
import {HiOutlineMail} from 'react-icons/hi'

export default function About() {
  return (
    <div>
         <Head>
        <title>Menu - BEKACHI</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Flavours on demand." />
      </Head>
      <NavBar></NavBar>
<section className="py-32 px-10 lg:px-32  flex justify-center">
    <div className="lg:w-8/12">
<div className="flex justify-center">
    <img src="/bekachi-black.png" className="w-8/12 lg:w-5/12" alt="" />
</div>
<p className="my-5">
<b>Bekachi Restocafe</b> is a rapidly growing QUICK SERVICE CAFE-RESTAURANT company having its presence in many locations across India In different Brand. We provide the best thick shakes, ice-creams,waffles as well as fast food options to the market which includes Fried chicken, fresh burgers,
pizza, BBQ, wraps, momos and more. <br /> <br />
<small>For more queries contact us, </small><br />
<div><b>ALI BEKACHI</b> </div>
<div><i>Managing Director, Bekachi Group</i></div>
<div className="flex items-center"><BiPhone className="text-yellow-600 mr-1"/>+91 9480 778 776</div>
<div className="flex items-center"><HiOutlineMail className="text-yellow-600 mr-1"/>ali@bekachi.com</div>

<br />
<div><b>ABDUL FATHAH</b> </div>
<div><i>CEO, Bekachi Group</i></div>
<div className="flex items-center"><BiPhone className="text-yellow-600 mr-1"/>+91 9483 874 130</div>
<div className="flex items-center"><HiOutlineMail className="text-yellow-600 mr-1"/>ceo@bekachi.com</div></p>
</div>
</section>

      <Footer></Footer>      

    </div>
  )
}
