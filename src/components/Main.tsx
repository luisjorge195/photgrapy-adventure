import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate()
  return (
    <div className="grid place-items-center">
      <div className="slider-box relative w-full h-auto overflow-hidden ">
        <ul className="flex p-0">
          <li>
            <img src="../assets/bird.jpg" alt="bird" className="w-full h-screen"   />
          </li>
          <li>
            <img src="../assets/landing2.jpg" alt="landing2" className="w-full h-screen"   />
          </li>
          <li>
            <img src="../assets/mountain.jpg" className="w-full h-screen" alt="mountain"   />
          </li>
          <li>
            <img src="../assets/neom.jpg" alt="neom" className="w-full h-screen"  />
          </li>
        </ul>
      </div>
      <div className="absolute text-center">
        <h1 className=" text-white text-4xl font-medium">Émbarcate en esta aventura</h1>
        <h3 className=" text-white text-2xl mt-3 font-medium">
          Únete a una expedición digital, capturando momentos especiales y
          compartiéndolos con la comunidad.
        </h3>
        <button onClick={()=>navigate('/login')} className="p-3 text-lg mt-6 px-12 rounded-lg bg-transparent text-white font-medium border-white border-4 hover:bg-white hover:text-slate-900 ">
          Comienza aquí
        </button>
      </div>
    </div>
  );
};

export default Main;
