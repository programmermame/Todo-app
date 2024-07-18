import NavBar from "../components/NavBar";
import Welcome from "../components/Welcome";

const Landing = () => {
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center m-10">
        <Welcome />
        <img src="/todoo.svg" alt="landing photo" className="" width="600px" />
      </div>
    </>
  );
};

export default Landing;
