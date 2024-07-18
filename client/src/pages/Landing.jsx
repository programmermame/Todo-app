import NavBar from "../components/NavBar";
import Welcome from "../components/Welcome";

const Landing = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row  sm:p-7 sm:m-3 lg:p-8 justify-around items-start` h-screen ">
        <Welcome />
        <img
          src="/todoo.svg"
          alt="landing photo"
          className=" sm:w-[300px] md:w-[400px] lg:w-[500px]"
        />
      </div>
    </>
  );
};

export default Landing;
