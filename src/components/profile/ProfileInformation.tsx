import useAuth from "../../hooks/useAuth"
import useImages from "../../hooks/useImages";
const ProfileInformation = () => {
    const {listImagesUser} = useImages();
    const {cookie} = useAuth();
    const publicationsUser =  listImagesUser.filter((item)=>item.name.includes(cookie.session))
    
  return (
    <div >
        <h1>{cookie.nameUser.split('@')[0]}</h1>
        <h1>{`${publicationsUser.length} publicaciones`}</h1>
    </div>
  )
}

export default ProfileInformation