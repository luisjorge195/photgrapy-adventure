import { useEffect, useState } from "react";
import {
  collection,
  query,
  onSnapshot,
  DocumentData,
} from "firebase/firestore";
import { db } from "../config/configFirebase";
interface Item {
  content: DocumentData;
  id: string;
}
const useQueryData = () => {
  const [currentData, setCurrentData] = useState<Item[]>([]);
  const queryData = async () => {
    const newQuery = query(collection(db, "digital"));

    const unSubscribe = onSnapshot(newQuery, (querysnapshot) => {
      const data: { content: DocumentData; id: string }[] = [];
      querysnapshot.forEach((item) => {
        data.push({ content: item.data(), id: item.id });
      });
      setCurrentData(data);
    });
    return unSubscribe;
  };
  useEffect(() => {
    queryData();
  }, []);
  return { currentData };
};

export default useQueryData;
