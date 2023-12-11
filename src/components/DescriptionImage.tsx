import useAuth from "../hooks/useAuth";
// import { useImages } from "../hooks/useImages";
import UserProfile from "./profile/UserProfile";
// import ShareIcon from "@mui/icons-material/Share";
// // import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import { db } from "../config/configFirebase";
// import { useState } from "react";
import { identificator } from "../types/types";
// import useDescription from "../hooks/useDescription";
import { useContext } from "react";
import { DescriptionContext } from "../context/description";

const DescriptionImage = ({ id }: identificator) => {
  const { cookie } = useAuth();
  const { setDescription } = useContext(DescriptionContext);
  return (
    <div>
      <div className="border-b-2 border-gray-200 w-full flex justify-start gap-x-3 items-center">
        <UserProfile className="rounded-full w-10 h-10" />
        <h1>{cookie.nameUser.split("@")[0]}</h1>
      </div>
      <div className="border-b-2 border-gray-200">
        <textarea
          placeholder="Describe tu aventura"
          
          className="border focus:border-transparent focus:outline-none mt-5 w-full h-40 "
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      {/* {id && (
        <div className="flex justify-center gap-x-10 mt-3">
          <ShareIcon
            className="cursor-pointer"
            onClick={(e) => handleShare(e)}
          />
          <i
            className="fa fa-heart-o"
            style={{ fontSize: "48px", color: "red" }}
          ></i>
        </div>
      )} */}
    </div>
  );
};

export default DescriptionImage;
