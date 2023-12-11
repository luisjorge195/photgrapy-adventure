//import useAuth from "../../hooks/useAuth";
import ProfileInformation from "./ProfileInformation";
import { fetchImages } from "../../hooks/useImages";
import Publications from "./Publications";
import { useQuery } from "react-query";
import Spinner from "../spinner/Spinner";
import { ModalContent } from "../modals/ModalContent";
import UserProfile from "./UserProfile";

const Profile = () => {
  //const { cookie } = useAuth();
  const { isLoading } = useQuery("images", fetchImages);
  return isLoading ? (
    <Spinner />
  ) : (
    <section>
      <div className="grid grid-cols-2 items-center border-b-2 border-slate-200">
        <div className="w-full mt-5 grid place-content-center">
          <ModalContent
            name={
              <UserProfile className="rounded-full w-40 h-40"/>
            }
          />
        </div>
        <div>
          <ProfileInformation />
        </div>
      </div>
      <div className="mt-2 text-center">
        <Publications />
      </div>
    </section>
  );
};

export default Profile;
