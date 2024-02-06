
import bg from "../assets/crew/background-crew-desktop.jpg";
// import image from "../assets/crew/image-douglas-hurley.png"; No longer in use, image fetched from data.json 
import data from "../assets/data.json";
import { useState } from "react";

const Crew = () => {
    const[crew] = useState(data.crew);
    const [index, setIndex] = useState(0)
    const [isActive, setIsActive] = useState(0)

    console.log(crew)
    const current = crew[index]
    console.log(current)
    
    const handleClick = (args) => {
        setIndex(args)
        setIsActive(args)
    }

  return (
    <div style={{backgroundImage:`url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}  }  className="h-screen overflow-hidden">

      <div className="mt-[70px]">
        <h2 className="text-white flex gap-4 px-24 py-24 ml-[45px]" ><span className="text-white opacity-30">02</span>MEET YOUR CREW</h2>
      </div> 

      <div className="flex">
            <div className="text-white px-24 ml-[45px] flex flex-col gap-[2rem] mt-[-40px]">
                <h2 className="text-3xl bellefair-regular  text-white opacity-[50%]">{current.role}</h2>
                <h1 className="text-5xl bellefair-regular mt-[-10px]">{current.name}</h1>
                <p className="w-[25rem] barlow-regular text-[15px] text-[#D0D6F9]"> {current.bio}</p>
            </div>
            <div className="mt-[-160px] ml-[10rem] ">
                <img className="h-[400px] right-[150px] absolute bottom-0" src={current.images.webp} alt="" />
            </div>
      </div>

      <div className="flex absolute bottom-6 left-[55px] items-center gap-5 ml-[85px] mt-9">
          <div  onClick={()=>handleClick(0)} className={`${isActive===0 ? "bg-white w-[15px] h-[15px] ":"bg-[#979797] opacity-[17%]" } rounded-full w-[10px] h-[10px] cursor-pointer`}></div>
          <div onClick={()=>handleClick(1)} className={`${isActive===1 ? "bg-white w-[15px] h-[15px] ":"bg-[#979797] opacity-[17%]" } rounded-full  w-[10px] h-[10px]  cursor-pointer`} ></div>
          <div onClick={()=>handleClick(2)} className= {`${isActive===2 ? "bg-white w-[15px] h-[15px] ":"bg-[#979797] opacity-[17%]" } rounded-full  w-[10px] h-[10px]  cursor-pointer`}></div>
          <div onClick={()=>handleClick(3)} className= {`${isActive===3 ? "bg-white w-[15px] h-[15px] ":"bg-[#979797] opacity-[17%]" } rounded-full  w-[10px] h-[10px]  cursor-pointer`}></div>
      </div>


   
    </div>
  )

}

export default Crew

