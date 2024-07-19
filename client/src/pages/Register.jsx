import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="flex flex-row justify-center h-screen">
      <div>
        <img src="/todoo.svg" className="w-[600px]" alt="" />
      </div>

      <div className="mt-28">
        {/* <div className="flex  items-center mt-40 ">
          <h1 className="ml-5">Sign in with: </h1>
          <Link>
            <div className="text-facebook text-2xl mr-3 ml-3">
              <FaFacebook />
            </div>
          </Link>

          <Link>
            <div className="text-2xl">
              <FcGoogle />
            </div>
          </Link>
        </div> */}
        <form
          action=""
          className="flex flex-col w-[400px]  p-5 border-black   "
        >
          {/* <h1 className="mb-5 text-center">OR</h1> */}
          {/* <label htmlFor="email">Email</label> */}

          <input
            className="border mb-5 p-1 outline-none shadow  px-3"
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
          />
          <input
            className="border mb-5 p-1 outline-none shadow  px-3"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
          />
          {/* <label htmlFor="password">Password</label> */}
          
          <input
            className="border mb-5 p-1 outline-none shadow px-3"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <div className="flex justify-between">
            <div>
              <input
                className="mr-2"
                type="checkbox"
                name="rememberme"
                id="rememberme"
              />
              <label className="mt-2" htmlFor="rememberme">
                Remember Me
              </label>
            </div>
            <Link to>Forgot Password</Link>
          </div>
          <button
            className="bg-yellow-500  border mt-5 rounded-sm w-100 p-1  "
            type="submit "
          >
            Register
          </button>
          <p className="flex gap-2 text-sm mt-3">
            Already Have An Account ?
            <Link to="/login" className="text-blue-600 font-bold ">
              Login
            </Link>
          </p>
          <button
            className="bg-blue-800 text-white flex justify-center items-center   border  mt-5 gap-2 rounded-sm w-100 p-1  "
            type="submit "
          >
            <FaFacebook /> <span>CONTINUE WITH FACEBOOK</span>
          </button>
          <button
            className="bg-slate-800 text-white flex justify-center items-center border mt-5  gap-2 rounded-sm w-100 p-1  "
            type="submit "
          >
            <FcGoogle /> <span className="mr-4">CONTINUE WITH GOOGLE</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
