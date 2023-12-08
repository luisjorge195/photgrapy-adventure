//import useAuth from "../../hooks/useAuth";
import ProfileInformation from "./ProfileInformation";
import useImages from "../../hooks/useImages";
import Publications from "./Publications";

const Profile = () => {
  //const { cookie } = useAuth();
  const { listImagesUser } = useImages();
  console.log('listImagesUser',listImagesUser[0])
  return (
    <section>
      <div className="grid grid-cols-2 items-center border-b-2 border-slate-200">
        <div className="w-full mt-5 grid place-content-center">
          <img
            src={listImagesUser !== undefined ? listImagesUser[0]?.url || '' : ''}
            alt="Avatar"
            className="w-44 h-44 rounded-full mb-4"
          />
        </div>
        <div>
          <ProfileInformation />
        </div>
      </div>
      <div className="mt-2 text-center">
        <Publications/>
      </div>
    </section>
  );
};

export default Profile;
