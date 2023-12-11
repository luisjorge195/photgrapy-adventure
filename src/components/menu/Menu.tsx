import { Link, useNavigate } from "react-router-dom";
import { ModalContent } from "../modals/ModalContent";
import { menu } from "../../utils/menuOptions";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { ButtonOptions } from "../button/ButtonOptions";
import control from "../../assets/control.png";
import logo from "../../assets/logo.png";
import useWindowWidth from "../../hooks/useWindowWidth";

interface styles {
  className: string;
  isHidden?: boolean;
}
const Menu = ({ className }: styles) => {
  const { windowWidth } = useWindowWidth();
  const [, , removeCookie] = useCookies(["session", "nameUser"]);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  async function handleSignOut() {
    try {
      navigate("/login");
      localStorage.clear();
      removeCookie("session");
      removeCookie("nameUser");
      localStorage.clear();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
  return (
    <div
      className={`${isOpen && windowWidth > 780 ? "w-64" : "w-20"}
          "h-screen border-2 p-5 pt-16 border-l-black relative duration-300"
     `}
    >
      <div>
        {windowWidth > 780 && (
          <img
            src={control}
            onClick={() => setIsOpen(!isOpen)}
            className={` absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-sky-600 ${
              !isOpen && "rotate-180"
            }`}
          />
        )}
        <div className="flex gap-x-4 items-center">
          <img src={logo} className={`cursor-pointer duration-500`} />
          <h1
            className={`origin-left font-medium text-base duration-300 ${
              (!isOpen || windowWidth < 780) && "scale-0"
            }`}
          >
            Digital Adventure
          </h1>
        </div>
      </div>
      <div>
        <ul className={`pt-14 ${className} sticky top-0 z-50 inset-x-0`}>
          {menu.map((item, index) => (
              <li
                key={index}
                className={`text-sm flex items-center ${
                  item.modal ? "gap-x-0" : "gap-x-4"
                } cursor-pointer p-2 pt-14 sm:pt-17`}
              >
                <img
                  src={`../../src/assets/${item.image}.png`}
                  className="w-5 h-5"
                />
                {item.modal && windowWidth > 780 ? (
                  <ModalContent name={windowWidth > 780 ? item.title : <img
                    src={`../../assets/${item.image}`}
                    className="w-5 h-5"
                  />} />
                ) : (
                  <Link
                    to={item.url}
                    className={`${
                      (!isOpen || windowWidth < 780) && "scale-0"
                    } text-2xl item explore-option `}
                  >
                    {windowWidth > 780 && (
                      <h2
                        className={`text-base ${
                          (!isOpen || windowWidth < 780) && "scale-0"
                        } ${
                          item.url === window.location.pathname
                            ? " font-extrabold"
                            : ""
                        } `}
                      >
                        {item.title}
                      </h2>
                    )}
                  </Link>
                )}
              </li>
          ))}
          <div className="text-sm flex items-center gap-x-4 cursor-pointer p-2 pt-12 ">
            <img src={`../../src/assets/exit.png`} className="w-5 h-5" />
            <button
              onClick={() => handleSignOut()}
              className={`${(!isOpen || windowWidth < 780) && "scale-0"}`}
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
    </div>
  );
};

export default Menu;
