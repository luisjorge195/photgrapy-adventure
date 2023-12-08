import { getDownloadURL, listAll, ref, getMetadata } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../config/configFirebase";

const useImages = () => {
  const [listImagesUser, setListImagesUser] = useState<{ name: string; url: string }[]>([]);
  const listRef = ref(storage);

  const listImagesWithMetadata = async () => {
    try {
      const resultImages = await listAll(listRef);

      const imagesWithMetadata = await Promise.all(
        resultImages.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          const metadata = await getMetadata(itemRef);

          return { name: metadata.name, url };
        })
      );

      setListImagesUser(imagesWithMetadata);
    } catch (error) {
      console.error("Error al obtener la lista de imágenes:", error);
    }
  };

  useEffect(() => {
    listImagesWithMetadata();
  }, []);

  return { listImagesUser };
};

export default useImages;