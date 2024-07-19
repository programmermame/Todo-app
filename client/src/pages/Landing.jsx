
import Welcome from "../components/Welcome";

const Landing = () => {
  return (
    <>
      
      <div className="flex justify-center items-center h-screen px-40 ">
        <Welcome />
        <img src="/todoo.svg" alt="landing photo" className="w-[50%] "  />
      </div>
    </>
  )
};

export default Landing;

