import "./App.css";
import Main from "./components/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Inicio from "./components/Inicio";
import Contenido from "./components/Contenido";
import Prueba from "./components/Prueba";

function App() {
  const Layout = () => {
  
    return (
        <div className="flex">
          <Inicio />
        </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/inicio",
      element: <Layout />,
      children: [
        {
          path: "/inicio/contenido",
          element: <Contenido />,
        },
        {
          path: "/inicio/prueba",
          element: <Prueba />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
