// import { signOut } from "aws-amplify/auth";
// import { navigate } from "wouter/use-location";

import { menu } from "../../utils/menuOptions";
import control from "../../assets/control.png";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth"

const SidebarDesktop = () => {
  const navigate = useNavigate();
  const {session} = useAuth();
  const [open, setOpen] = useState(true);
  async function handleSignOut() {
    console.log('session',session)
    try {
      navigate("/login");
      localStorage.clear()
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  return (
      <div className="flex">
        <div
          className={`${
            open ? "w-64" : "w-20"
          } h-screen border-2 p-5 pt-8 border-l-black relative duration-300`}
        >
          <img
            src={control}
            onClick={() => setOpen(!open)}
            className={` absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-sky-600 ${
              !open && "rotate-180"
            }`}
          />
          <div className="flex gap-x-4 items-center">
            <img src={logo} className={`cursor-pointer duration-500`} />
            <h1
              className={`origin-left font-medium text-base duration-300 ${
                !open && "scale-0"
              }`}
            >
              Digital Adventure
            </h1>
          </div>
          
          <ul className="pt-20">
            {menu.map((item, index) => (
              <li
                key={index}
                className="text-sm flex items-center gap-x-4 cursor-pointer p-2 pt-12 "
              >
                <img
                  src={`../../src/assets/${item.image}.png`}
                  className="w-5 h-5"
                />
                <Link
                  to={item.url}
                  className={`${!open && "scale-0"} text-2xl item `}
                >
                  <h2 className={`text-base ${item.url=== window.location.pathname ? ' font-extrabold' : ''} `}>{item.title}</h2>
                </Link>
              </li>
            ))}
            <div className="text-sm flex items-center gap-x-4 cursor-pointer p-2 pt-12 ">
                <img
                  src={`../../src/assets/exit.png`}
                  className="w-5 h-5"
                />
              <button onClick={() => handleSignOut() } className={`${!open && 'scale-0'}`}><h1 className='text-base'>Salir</h1></button>
            </div>
          </ul>
        </div>
        <div className="p-7 text-2xl font-medium flex-1 h-screen scale-0">
          <Outlet />
        </div>
      </div>
  );
};

export default SidebarDesktop;
