import { useQuery } from "react-query";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Users from "./Users";
import { fetchImages } from "../../hooks/useImages";
import { useMemo, useState } from "react";
import { ModalContent } from "../modals/ModalContent";

import useAuth from "../../hooks/useAuth";
import useQueryData from "../../hooks/useQueryData";

const Contenido = () => {
  const { currentData } = useQueryData();
  const { cookie } = useAuth();

  const { data: listImagesUser, isLoading } = useQuery("images", fetchImages);
  const filterImages = listImagesUser?.filter(
    (item) => !item.name.includes(cookie.session)
  );
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [open] = useState(false);

  // const openModal= ()=>{
  //   setOpen(!open)
  // }
  // useEffect(() => {
  //   // Consulta la lista de usuarios de Cognito
  //   const listUsers = async () => {
  //     try {
  //       const users = await Auth.listUsers();
  //       console.log('Lista de usuarios:', users);
  //     } catch (error) {
  //       console.error('Error al listar usuarios:', error);
  //     }
  //   };

  //   console.log('listUsers', listUsers);
  // }, []);
  useMemo(() => {
    const dataFilter = currentData.filter((item) =>
      filterImages?.map((element) => item.content.imagen === element.name)
    );
    console.log("dataFilter", dataFilter[0]?.content.likes);
  }, [listImagesUser]);
  
  return (
    <div>
    <div>
      <section className="w-full h-auto mt-5 block">
        <Users />
      </section>
      <div className="pt-10 grid md:grid-cols-2 lg:grid-cols-3">
        {!isLoading &&
          filterImages?.map((item, index) => (
           
            <ModalContent
              id={item}
              name={
                <div
                  key={item.name}
                  className="image-container cursor-pointer w-full"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src={item.url}
                    alt={item.name}
                    className="object-cover w-full h-72 image"
                  />

                  {hoveredIndex === index && (
                    <div className="overlay text-center">
                      <div className="block p-6 mb-4"></div>
                      <div className=" text-white mb-4 p-6">
                        <ShareOutlinedIcon sx={{ cursor: "pointer" }} />
                      </div>
                    </div>
                  )}
                </div>
              }
            />
          ))}
      </div>

      {open && <ModalContent open={open} />}
    </div>
    </div>
  );
};

export default Contenido;
