
export default function Third() {
  return (
    <div className="w-screen h-screen"
    style={{
        backgroundImage:`url('/third.jpg')`,
        backgroundSize:"cover",
       
    }}
    >
        <div
        className="absolute bg-black bg-opacity-70  w-full h-full z-30"
       
        >
            <div className="flex justify-center items-center text-center text-white font-extrabold text-4xl lg:text-7xl w-full h-full">
                 <div>
                Only the best one
                <div className="block text-yellow-500 ">
                stays forever!
                </div>
                 </div>
            </div>
        </div>
    </div>
  )
}
