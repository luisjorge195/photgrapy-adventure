import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import photo from '../assets/photo.png';
import useAuth from "../hooks/useAuth";
import { uploadFile } from "../config/configFirebase";

const UploadImage = () => {
  const { cookie } = useAuth();
  // @ts-expect-error is necesary
  const onDrop = useCallback((acceptedFiles) => {
    console.log('import', acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDrop });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    await uploadFile(acceptedFiles[0],cookie.session);
  };
  return (
    <div className={`${acceptedFiles.length > 0 && "grid grid-cols-2"}`}>
      <form onSubmit={handleSubmit}>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : acceptedFiles.length === 0 ? (
            <div className="grid place-content-center">
              <img src={photo} alt="photo" loading="lazy" />
              <h1 className="text-base font-semibold">
                Crea tu aventura cargando tus fotos  aquí
              </h1>
            </div>
          ) : (
            ""
          )}
        </div>
        {acceptedFiles.length > 0 && (
          <img
            src={URL.createObjectURL(acceptedFiles[0])}
            className="h-95 w-screen"
          />
        )}
        <button>Guardar</button>
      </form>
      {acceptedFiles.length > 0 && <div>Descripcion de tu aventura</div>}
    </div>
  );
};

export default UploadImage;
