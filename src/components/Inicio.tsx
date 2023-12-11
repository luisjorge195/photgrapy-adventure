import { Outlet } from "react-router-dom";
import Menu from "./menu/Menu";

const Inicio = () => {
  return (
    <div className="flex h-screen">
      <Menu className="" />
      <div className="flex-1 flex flex-col pl-7 font-medium overflow-y-auto pr-7 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Inicio;
