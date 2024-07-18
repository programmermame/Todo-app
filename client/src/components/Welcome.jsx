import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div className="w-[600px] m-3 p-10 text-xl   ">
      <h1 className="text-8xl lg:mb-8">Welcome</h1>
      <h3>
        <Link to="register" className="text-4xl  ">
          Sign Up
        </Link>{" "}
        /
        <Link to="/login" className="text-4xl  ">
          {" "}
          Login
        </Link>{" "}
        To Continue
      </h3>
    </div>
  );
};

export default Welcome;
