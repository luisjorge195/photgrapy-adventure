import useImages from "../../hooks/useImages";
import useAuth from "../../hooks/useAuth";
import UploadImage from "../UploadImage";
const Publications = () => {
  const { cookie } = useAuth();
  const { listImagesUser } = useImages();
  const imagesUser = listImagesUser.filter((item) =>
    item.name.includes(cookie.session)
  );
  return (
    <div className="">
      <h1>Mis aventuras digitales</h1>
      {imagesUser.length === 0 ? (
        <UploadImage />
      ) : (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          {imagesUser !== undefined &&
            imagesUser.map((image) => (
              <img src={image?.url} alt="image" loading="lazy" />
            ))}
        </div>
      )}
    </div>
  );
};

export default Publications;
