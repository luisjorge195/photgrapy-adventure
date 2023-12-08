import useImages from "../hooks/useImages";

const Contenido = () => {
  const { listImagesUser } = useImages();

  return (
    <div>
      <div className="w-full h-11 mt-5">aca van los avatars</div>
      <div className="w-1/2 h-1/2 mt-9">
        <div>
          <h1>ses</h1>
        </div>
        {listImagesUser && listImagesUser.length > 0 && (
          <img src={listImagesUser[0]?.url} className="w-auto h-auto" />
        )}
      </div>
    </div>
  );
};

export default Contenido;
