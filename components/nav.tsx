import { useRouter } from "next/router";
import Hamburger from 'hamburger-react'
import { useState } from "react";
import {AiOutlineArrowRight} from "react-icons/ai"

const NavBar = ()=>{
    const [isOpen, setOpen] = useState(false)


const navLinks:Array<any> = [
    {name: 'Home',link: '/'},
    {name: 'Menu',link: '/menu'},
    {name: 'About',link: '/about'},
    {name: 'Contact',link: '/contact'},
    {name: 'Business',link: '/business'},
];

    const router = useRouter();




    return (
       
<section>
<nav className="px-10 lg:px-20 py-4 flex justify-between items-center fixed z-40 w-full bg-white shadow-sm">
<span className="font-extrabold text-3xl text-black cursor-pointer"
onClick={() =>{
    router.push('/')
}}
>BEKACHI</span>

<div className="lg:flex hidden">
    {
        navLinks.map((link,index)=>{
return (<a key={index}  className="menu-item font-bold"
href={link.link}
onClick={(e)=>{
    e.preventDefault();
    router.push(link.link);
}}
>{link.name}</a>
);

        })
    }

</div>



</nav>

    {isOpen && (
            <div 
            className="fixed lg:hidden top-0 right-0 bottom-0 z-40  bg-white shadow-2xl  w-8/12 "
            data-aos="fade-left"
            >
                <div className="my-20 mx-6"></div>
                  {
        navLinks.map((link,index)=>{
return (<a key={index}  className="px-8 py-3 hover:bg-gray-200 font-bold flex items-center hover:pl-10 hover:text-blue-700 transition-all duration-300"
href={link.link}
onClick={(e)=>{
    e.preventDefault();
    router.push(link.link);
}}
><AiOutlineArrowRight className="mr-3"/> {link.name}</a>
);

        })
    }
                </div>
       
    )}

<div className="fixed right-6 top-3  lg:hidden"
style={{
    zIndex:100
}}
>
<Hamburger toggled={isOpen} toggle={setOpen} ></Hamburger>

</div>
<div className="py-8"></div>
{
    isOpen && (
        <div
className="bg-black bg-opacity-70 fixed w-full h-full z-30"
onClick={()=>setOpen(false)}
></div>
    )
}
</section>

    );
}
export default NavBar