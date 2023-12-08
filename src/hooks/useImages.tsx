import { getDownloadURL, listAll, ref, getMetadata } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../config/configFirebase";

const useImages = () => {
  const [listImagesUser, setListImagesUser] = useState<{ name: string; url: string }[]>([]);
  const listRef = ref(storage);

  const listImagesWithMetadata = async () => {
    try {
      const resultImages = await listAll(listRef);

      const downloadURLPromises = resultImages.items.map(async (itemRef) => {
        return getDownloadURL(itemRef);
      });
  
      const downloadURLs = await Promise.all(downloadURLPromises);
  
      const metadataPromises = downloadURLs.map(async (url, index) => {
        const itemRef = resultImages.items[index];
        const metadata = await getMetadata(itemRef);
        return { name: metadata.name, url };
      });
  
      const imagesWithMetadata = await Promise.all(metadataPromises);
  
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