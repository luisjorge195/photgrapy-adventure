import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage"
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY_FIREBASE,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app)
// @ts-expect-error is necesary
export const uploadFile = async (file, image)=>{
  
    const storageRef = ref(storage, image)
   const data= await uploadBytes(storageRef, file, { contentType: file.type })
   console.log(data)
   const url = await getDownloadURL(storageRef)
   return url
}


// Create a reference under which you want to list


// Find all the prefixes and items.
