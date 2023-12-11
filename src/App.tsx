import "./App.css";
import Main from "./components/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Inicio from "./components/Inicio";
import Contenido from "./components/generalContent/Contenido";
import Perfil from "./components/profile/Profile";
import Explore from "./components/explore/Explore";

function App() {
  const Layout = () => {
    return <Inicio />;
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
          path: "/inicio/tendencias",
          element: <Explore />,
        },
        {
          path: "/inicio/perfil",
          element: <Perfil />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
