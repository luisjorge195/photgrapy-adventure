// import React from 'react'
// import SidebarMobile from './mobile/SidebarMobile'
// import SidebarDesktop from './mobile/SidebarDesktop';

// const Inicio = () => {
//   const userAgent = window.navigator.userAgent.toLowerCase();
//   console.log('uawe', userAgent)
//   return userAgent.includes('mobile') ? <h1>Aca</h1> : <SidebarDesktop/>
// }

// export default Inicio

// import { signOut } from "aws-amplify/auth";
// import { navigate } from "wouter/use-location";

import { menu } from "../utils/menuOptions";
import control from "../assets/control.png";
import logo from "../assets/logo.png";
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ButtonOptions } from "./button/ButtonOptions";
import { ModalContent } from "./modals/ModalContent";
import { useCookies } from "react-cookie";

const Inicio = () => {
  const [, ,removeCookie] = useCookies(['session', 'nameUser']);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  async function handleSignOut() {
    try {
      navigate("/login");
      removeCookie("session")
      removeCookie("nameUser")
      localStorage.clear();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  return (
    <div className="flex">
      <div
        className={`${
          isOpen ? "w-64" : "w-20"
        } h-screen border-2 p-5 pt-8 border-l-black relative duration-300`}
      >
        <img
          src={control}
          onClick={() => setIsOpen(!isOpen)}
          className={` absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-sky-600 ${
            !isOpen && "rotate-180"
          }`}
        />
        <div className="flex gap-x-4 items-center">
          <img src={logo} className={`cursor-pointer duration-500`} />
          <h1
            className={`origin-left font-medium text-base duration-300 ${
              !isOpen && "scale-0"
            }`}
          >
            Digital Adventure
          </h1>
        </div>

        <ul className="pt-14">
          {menu.map((item, index) => (
            <li
              key={index}
              className={`text-sm flex items-center ${item.modal ?'gap-x-0' : 'gap-x-4'} cursor-pointer p-2 pt-12`}
            >
              <img
                src={`../../src/assets/${item.image}.png`}
                className="w-5 h-5"
              />
              {item.modal ? (
                <ModalContent name={item.title} />
              ) : (
                <Link
                  to={item.url}
                  className={`${!isOpen && "scale-0"} text-2xl item `}
                >
                  <h2
                    className={`text-base ${
                      item.url === window.location.pathname
                        ? " font-extrabold"
                        : ""
                    } `}
                  >
                    {item.title}
                  </h2>
                </Link>
              )}
            </li>
          ))}
          <div className="text-sm flex items-center gap-x-4 cursor-pointer p-2 pt-12 ">
            <img src={`../../src/assets/exit.png`} className="w-5 h-5" />
            <button
              onClick={() => handleSignOut()}
              className={`${!isOpen && "scale-0"}`}
            >
              <h1 className="text-base">Salir</h1>
            </button>
          </div>
            <ButtonOptions
              isOpen={isOpen}
              className={`bg-white text-black lowercase capitalize pt-12`}
            />
          
        </ul>
      </div>
      <div className="pl-7 font-medium flex-1 h-screen ">
        <Outlet />
      </div>
    </div>
  );
};

export default Inicio;
