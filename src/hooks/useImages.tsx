import { useQuery } from 'react-query';
import { getDownloadURL, listAll, ref, getMetadata } from "firebase/storage";
import { storage } from "../config/configFirebase";

export const fetchImages = async () => {
  const listRef = ref(storage);

  try {
    const resultImages = await listAll(listRef);

    const imagesWithMetadata = await Promise.all(
      resultImages.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        const metadata = await getMetadata(itemRef);
        return { name: metadata.name, url };
      })
    );

    return imagesWithMetadata;
  } catch (error) {
    console.error("Error al obtener la lista de imágenes:", error);
    throw new Error('Error fetching images');
  }
};

export const useImages = () => {
  const { data: listImagesUser, ...queryProps } = useQuery('images', fetchImages);

  return { listImagesUser, ...queryProps };
};

