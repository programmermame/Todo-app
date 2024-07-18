import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import MainLayout from "./layout/MainLayout";
import Layout from "./pages/Layout";
import Error from './pages/Error'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
  ]);

  // const router = createBrowserRouter(createRoutesFromElements(
  //    <Route path="/" element={<MainLayout/>}>
  //     <Route index element={<Landing/>}/>
  //     <Route path="/register" element={<Register/>}/>
  //     <Route path="/login" element={<Login/>}/>




  //    </Route>
  // ))

  return <RouterProvider router={router} />;
}

export default App;

