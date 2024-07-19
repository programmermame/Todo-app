import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div className="w-[50%]">
      <div className="lg:mb-20">
        <h1 className="text-8xl mb-20">Welcome</h1>
        <h3 className="">
          <Link to="register" className="text-2xl border-2 font-bold border-black rounded-sm p-1 px-3 bg-gray-500 text-white shadow-black shadow-lg">
            Sign Up
          </Link>{" "}
          <label htmlFor="" className="ml-5 text-xl font-bold">OR</label>
          <Link to="/login" className="text-2xl border-2 font-bold border-black rounded-sm p-1 px-3 ml-10 bg-gray-500 text-white shadow-black shadow-lg">
            {" "}
            Login
          </Link>{" "}
          <label htmlFor="" className="ml-5 text-xl font-bold">To Continue</label>
        </h3>
      </div>
    </div>
  );
};

export default Welcome;
