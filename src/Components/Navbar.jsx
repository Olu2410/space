import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="flex  overflow-hidden fixed w-screen justify-between items-center bg-transparent pl-0 md:pl-14 pt-8 ">
      <div>
        <Link to={"/"}>
        <img className="h-10" src={logo} alt="" />
        </Link>
      
        <hr className=" absolute top-[78px] left-36 z-40 border-slate-600 w-[25rem] md:hidden" />
      </div>
      <div className="barlow-condensed-extralight uppercase text-white  bg-gray-800/10 backdrop-blur-2xl pl-24 pr-40 gap-10 h-fit py-8 items-center md:flex  *:flex *:gap-3 hidden">
        <Link to={"/"}>
          <b 
    className="barlow-condensed-medium">00</b> <p>Home</p>
          </Link>
        <Link to={"/destination"}>
          <b className="barlow-condensed-regular">01</b> <p>Destination</p>
        </Link>
        <Link to={"crew"}>
          <b className="barlow-condensed-regular">02</b> <p>Crew</p>
        </Link>
        <Link to={"Technology"}>
          <b className="barlow-condensed-regular">03</b> <p>Technology</p>
        </Link>
      </div>
      <LuMenu onClick={()=> setShow(prev => !prev)} className="text-white text-4xl md:hidden"/>
      <IoMdClose className="text-[#D0D6F9] text-4xl md:hidden"/>
    </nav>

  )
}

export default Navbar