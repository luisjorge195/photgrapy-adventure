import { useState } from "react";
import { useQuery } from "react-query";
import { fetchImages } from "../../hooks/useImages";
import useAuth from "../../hooks/useAuth";
import { collection, query, where, updateDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../../config/configFirebase";

const Explore = () => {
  const [prueba, setPrueba] = useState(false);
  const { cookie } = useAuth();
  const { data: listImagesUser, isLoading } = useQuery("images", fetchImages);
  const filterImages = listImagesUser?.filter(
    (item) => !item.name.includes(cookie.session)
  );
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [animationStates, setAnimationStates] = useState<{
    [key: string]: boolean;
  }>({});
  const [likes, setLikes] = useState<{ [key: string]: number }>({});

  const handleLikeClick = async (itemName: string) => {
    setPrueba(!prueba);
    // Actualiza el estado de animación solo para el ítem clicado
    setAnimationStates((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));

    const q = query(collection(db, "digital"), where("imagen", "==", itemName));
    const querySnapshot = await getDocs(q);

    // Actualiza el campo likes del documento encontrado
    querySnapshot.forEach(async (item) => {
      const itemRef = doc(db, "digital", item.id);
      await updateDoc(itemRef, {
        likes: item.data().likes + 1,
      });

      // Actualiza el estado de likes solo para el ítem clicado
      setLikes((prev) => ({
        ...prev,
        [itemName]: item.data().likes + 1,
      }));
    });
  };

  return (
    <div>
      <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-3 gap-3">
        {!isLoading &&
          filterImages?.map((item, index) => (
            <div
              key={item.name}
              className="image-container"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.url}
                alt={item.name}
                loading="lazy"
                className="object-cover w-full h-72 image"
              />
              {hoveredIndex === index && (
                <div className="overlay">
                  <div className={`heart-btn flex justify-between`}>
                    <span
                      className={`heart ${
                        animationStates[item.name] && "heart-active"
                      }`}
                      onClick={() => handleLikeClick(item.name)}
                    ></span>
                    <span className="num text-white ml-7">
                      {likes[item.name] || 0}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Explore;
