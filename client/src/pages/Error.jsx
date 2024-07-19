
import {Link} from "react-router-dom"
const Error = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center text-center">
        <img src="/404.svg" alt="error page img" className="w-[50%] lg:w-[400px]" />
        <h1 className="text-3xl mb-5 text-red-700">
          Sorry We Couldn`t Find What You Are Looking For 😔
        </h1>
        <Link to="/" className="text-blue-600">Back To Home 🏠</Link>
      </div>
    </div>
  )
}

export default Error
