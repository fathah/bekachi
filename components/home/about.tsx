import { useEffect } from "react"

export default function SecondSection() {
    useEffect(()=>{
        if(document){
            let pizza =  document.getElementById('pizza');
           document.addEventListener('scroll',()=>{
            let topScroll = window.pageYOffset;            
            pizza!.style.transform=`rotate(${topScroll}deg)`;
           })
           
           
        
        }
    },[])
  return (
    <div>
        <section
className="min-h-screen lg:flex justify-center items-center bg-black text-white" 
>
<div className="flex justify-center py-10">
<img src="/pizza.png" className="w-8/12 lg:w-full" id="pizza" alt="" />

</div>
<div className="lg:w-6/12">
<p className=" px-16 text-xl  text-justify">
 Experience the real taste from Bekachi food products. With 8+ years in the field 
 of food and beverages, Bekachi is one of the most trusted brands in the industry. 
  We are committed to provide with the best quality products and services.
  
  Bekachi is franchised in various cities across India and abroad.
 </p>
<div className="flex lg:block justify-center px-16">
  <button className="bg-white hover:bg-opacity-80 px-8 py-3 rounded text-black mt-8"
  onClick={()=>{
    window.location.href = 'https://wa.me/919480778776?text=Bekachi%20Order'
   }}
  >
    ORDER NOW</button>

</div>
<br /><br />
</div>

</section>
    </div>
  )
}
