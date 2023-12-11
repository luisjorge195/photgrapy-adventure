//import useAuth from "../../hooks/useAuth";
import { useImages } from "../../hooks/useImages";

interface typeClass{
    className?:string
}

const UserProfile = ({className}:typeClass) => {
    const { listImagesUser } = useImages();
    // const { cookie } = useAuth();
  return (
    <div>
        {listImagesUser && listImagesUser.length > 0 && (
        <div className="flex justify-start items-center gap-x-3 mb-3 ">
          <img
            src={listImagesUser[0].url}
            alt={listImagesUser[0].name}
            className={`${className}`}
          />
        </div>
      )}
    </div>
  )
}

export default UserProfile