import { useRouter } from "next/router";

export default function MainHead() {
    const router = useRouter();
  return (
    <div>
        
<section className="px-2 py-32 bg-white md:px-0">
  <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
    <div className="flex flex-wrap items-center sm:-mx-3">
      <div className="w-full md:w-1/2 md:px-3 order-2 lg:order-1">
        <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">We don't make your foody.</span>
            <span className="block text-yellow-500 xl:inline">We make your day!</span>
          </h1>
          <div className="relative flex flex-col sm:flex-row sm:space-x-4">
            <a href="/menu"
            onClick={(e) => {
                e.preventDefault();
                router.push("/menu");
            }}
            className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-black rounded-md sm:mb-0 hover:bg-gray-800 sm:w-auto">
              Explore Menu
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a  className="flex items-center px-6 py-2 border-2 border-black text-black bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
            onClick={()=>{
                window.location.href = 'https://wa.me/919480778776?text=Bekachi%20Order'
               }}
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 order-1">
        <div className="w-full h-auto overflow-hidden rounded-md ">
            <img src="/beka-bucket.png"/>
          </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
