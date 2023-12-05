import mountain from "../assets/mountain.jpg";
import landing2 from "../assets/landing2.jpg";
import bird from "../assets/bird.jpg";
import neom from "../assets/neom.jpg";
import { Navbar } from "./Navbar";
const Main = () => {
  return (
    <div className="grid place-items-center">
      <div className="slider-box relative w-full h-auto overflow-hidden ">
        <Navbar />
        <ul className="flex p-0">
          <li>
            <img src={bird} alt="bird" className="w-full h-screen" loading="lazy"  />
          </li>
          <li>
            <img src={landing2} alt="landing2" className="w-full h-screen" loading="lazy"  />
          </li>
          <li>
            <img src={mountain} className="w-full h-screen" alt="mountain" loading="lazy"  />
          </li>
          <li>
            <img src={neom} alt="neom" className="w-full h-screen" loading="lazy" />
          </li>
        </ul>
      </div>
      <div className="absolute text-center">
        <h1 className=" text-white text-4xl font-medium">Émbarcate en esta aventura</h1>
        <h3 className=" text-white text-2xl mt-3 font-medium">
          Únete a una expedición digital, capturando momentos especiales y
          compartiéndolos con la comunidad.
        </h3>
        <button className="p-3 text-lg mt-6 px-12 rounded-lg bg-transparent text-white font-medium border-white border-4 hover:bg-white hover:text-slate-900 ">
          Comienza aquí
        </button>
      </div>
    </div>
  );
};

export default Main;
