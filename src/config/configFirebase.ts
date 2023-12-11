import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage"
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD6yuaAaTQd_RqkkQOxAGh2NycZOlxvVGA",
  authDomain: "digital-adventure-9b6ae.firebaseapp.com",
  projectId: "digital-adventure-9b6ae",
  storageBucket: "digital-adventure-9b6ae.appspot.com",
  messagingSenderId: "846276445196",
  appId: "1:846276445196:web:4ba09441ebaf191e06da29"
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
