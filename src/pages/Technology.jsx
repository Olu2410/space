import bg from "../assets/technology/background-technology-desktop.jpg";
// import image from "../assets/technology/image-launch-vehicle-landscape.jpg";
import data from "../assets/data.json";
import { useState } from "react";

const Technology = () => {
    const [technology, setTechnology] = useState(data.technology)
    const [index,setIndex] = useState(0);
    const [isActive, setIsActive] = useState(0)

    const current = technology[index];
    const handleClick = (args) => {
      setIndex(args)
      setIsActive(args)
  }
 
  return (
    <div style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
      className="h-screen px-24 py-[10rem] text-white flex flex-col">
      <h1 className="flex gap-3 text-xl tracking-wide"><span>03</span>SPACE LAUNCH 101</h1>
      <div className="flex gap-20 mt-10">
          <div className=" flex flex-col gap-3 *:border rounded-full w-[58px] p-[16px] px-6 cursor-pointer">
            <div className={` ${isActive === 0 ? "bg-white text-black "  : "text-white bg-[#979797]"} rounded-full h-[50px] px-5 py-3 w-[50px]`} onClick={() => handleClick(0)}>1</div>
            <div className={` ${isActive === 1 ? " bg-white text-black " : "text-white bg-[#979797]"} rounded-full h-[50px] px-5 py-3 w-[50px]`} onClick={() => handleClick(1)}>2</div>
            <div className={` ${isActive === 2 ? " bg-white text-black" : "text-white bg-[#979797]"} rounded-full  h-[50px] px-5 py-3 w-[50px]`} onClick={() => handleClick(2)}>3</div>
        </div>
        <div className="flex flex-col gap-5">
          <p>THE TERMINLOGY...</p>
          <h1 className="text-4xl tracking-widest">{current.name}</h1>
          <p className="w-[20rem]">{current.description}</p>
        </div>
          <div className="">
            <img className="w-[400px] h-[300px] absolute right-0" src={current.images.webp} alt="image" />
          </div>
      </div>
    
    </div >

  )
}

export default Technology