// import bg from "../assets/home/background-home-desktop.jpg";

const Home = () => {

  return (
    <div
      style={{ backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundImage:" url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      className= " h-screen px-36 pt-24 text-white flex flex-col justify-center"
    >
      <div className="flex justify-between items-center ">  
        <div className="w-[31.5%] text-[#D0D6F9]">
          <h2 className="barlow-condensed-regular text-xl mb-5 tracking-widest">SO, YOU WANT TO TRAVEL TO</h2>
          <h1 className="text-8xl text-white bellefair-regular">SPACE</h1>
          <p className="barlow-regular text-sm mt-9 leading-6">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
            <div className="bellefair-regular shadow-xl mt-20 mr-20 bg-white text-2xl text-black flex items-center justify-center h-40 w-40 p-28 rounded-full">
             EXPLORE
            </div>
      </div>
    </div>
  );
};

export default Home;