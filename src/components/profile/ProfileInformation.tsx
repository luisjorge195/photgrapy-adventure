import useAuth from "../../hooks/useAuth"
import { fetchImages } from '../../hooks/useImages';
import { useQuery } from "react-query";
const ProfileInformation = () => {
      const { data: listImagesUser } = useQuery('images', fetchImages);
      //const {listImagesUser} = useImages();
      const {cookie} = useAuth();
      const publicationsUser =  listImagesUser ? listImagesUser.filter((item)=>item.name.includes(cookie.session)): []
    
  return (
    <div >
        <h1>{cookie.nameUser.split('@')[0]}</h1>
        <h1>{`${ listImagesUser!==undefined && publicationsUser.length} publicaciones`}</h1>
    </div>
  )
}

export default ProfileInformation