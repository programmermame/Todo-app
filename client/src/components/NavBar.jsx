import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="flex justify-between pt-5 ml-20 mr-40 ">
      <Link to="/">
        <h1 className="text-3xl font-extrabold ">Todo App</h1>
      </Link>
      <div>
        <Link to="/">
          <button className="mr-5 rounded-sm border pl-3 pr-3 pt-1 pb-1  border-black hover:bg-blue-500 hover:text-white ">
            Home
          </button>
        </Link>
        <Link to="/login">
          <button className="mr-5 rounded-sm border pl-3 pr-3 pt-1 pb-1  border-black hover:bg-blue-500 hover:text-white">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className=" rounded-sm border pl-3 pr-3 pt-1 pb-1  border-black hover:bg-blue-500 hover:text-white ">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

