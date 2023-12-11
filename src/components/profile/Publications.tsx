import { useQuery } from "react-query";
import useAuth from "../../hooks/useAuth";
import { fetchImages } from "../../hooks/useImages";
import { ModalContent } from "../modals/ModalContent";

const Publications = () => {
  const { cookie } = useAuth();

  // Utiliza React Query para obtener las imágenes
  const { data: listImagesUser } = useQuery("images", fetchImages);
  console.log("data", listImagesUser);
  const imagesUser = listImagesUser?.filter((item) =>
    item.name.includes(cookie.session)
  );

  return (
    <div>
      <h1 className="mt-4">Mis aventuras digitales</h1>
      {imagesUser && imagesUser.length === 0 ? (
        <ModalContent name="abrir" />
      ) : (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-10">
          {imagesUser?.map((image) => (
            <img
              key={image?.url}
              src={image?.url}
              alt={image.name}
              loading="lazy"
              className="object-cover w-full h-full"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Publications;
