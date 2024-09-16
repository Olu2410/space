import bg from "../assets/destination/background-destination-desktop.jpg";
// import image from "../assets/destination/image-moon.png";
import data from "../assets/data.json";
import { useState } from "react";

const Destination = () => {
    const [destination] = useState(data.destinations)
    const [index,setIndex] = useState(0);
    const [isActive, setIsActive] = useState(0)

    const current = destination[index];
    const handleClick = (args) => {
        setIndex(args)
        setIsActive(args)
    }
  return (

    <div style={{backgroundImage:`url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}  className="h-screen">

        <div className="mt-[70px]">
            <h2 className="text-white flex gap-4 px-24 py-24 ml-[45px]" ><span className="text-white opacity-30">01</span>PICK YOUR DESTINATION</h2>
        </div> 
        <div className="flex text-white"> 
            <img src={current.images.webp} alt="image" className="w-[280px] mt-[-55px] ml-[10rem]" />

            <div>
                <div className="flex gap-5 *:cursor-pointer">
                    <p className={` ${isActive === 0 ? "border-b-2 border-white " : ""}`} onClick={() => handleClick(0)}>MOON</p>
                    <p className={` ${isActive === 1 ? "border-b-2 border-white " : ""}`} onClick={() => handleClick(1)}>MARS</p>
                    <p className={` ${isActive === 2 ? "border-b-2 border-white " : ""}`} onClick={() => handleClick(2)}>EUROPA</p>
                    <p className={` ${isActive === 3 ? "border-b-2 border-white " : ""}`} onClick={() => handleClick(3)}>TITAN</p>
                </div>
                <div>
                    <h1 className="text-4xl">{current.name}</h1>
                    <p className="w-[500px] ml-8">{current.description}</p>
                </div>
                <div className="flex gap-10 mt-10">
                            <div className="avg-dist flex flex-col gap-5">
                                <p className="text-[#D0D6F9] barlow-condensed-regular">AVG. DISTANCE</p>
                                <p className="bellefair-regular text-[28px]">{current.distance}</p>
                            </div>
                            <div className="est-time flex flex-col gap-5">
                                <p className=" text-[#D0D6F9] barlow-condensed-regular">EST. TRAVEL TIME</p>
                                <p className="bellefair-regular text-[28px]">{current.travel}</p>
                            </div>
                        </div>
            </div>
            </div>
    </div>

)
}

export default Destination