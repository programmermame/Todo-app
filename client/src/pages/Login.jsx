import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa"
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex items-center">
      <h1>Sign in with: </h1>
      <Link>
        <div className="text-facebook text-2xl mr-3 ml-3"><FaFacebook /></div>
      </Link>

      <Link>
        <div className="text-2xl"><FcGoogle /></div>
      </Link>

    </div>
  );
};

export default Login;

