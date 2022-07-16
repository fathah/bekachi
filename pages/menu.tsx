import Footer from "@/components/footer";
import NavBar from "@/components/nav";
import Head from "next/head";

export default function Menu() {
    const menu:Array<any>=[
        {image:"bekachi-menu1.jpg"},
        {image:"bekachi-menu2.jpg"},
        {image:"bekachi-menu3.jpg"},
    ];
  return (
    <div>
 <Head>
        <title>Menu - BEKACHI</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Flavours on demand." />
      </Head>
      <NavBar></NavBar>
    <section>
        <h1 className="text-center my-10 text-3xl lg:text-5xl font-bold">BEKACHI MENU</h1>
        {
            menu.map((item,index)=>{
                return (
                    <div key={index}
                    className="flex justify-center  my-4 mx-10"
                    >
                        <img src={"/menu/"+item.image}
                        className="w-full lg:w-8/12 rounded-2xl my-4 mx-10"
                        alt="" />
                    </div>
                )
            })
        }
    </section>




     
<Footer></Footer>      



    </div>
  )
}
