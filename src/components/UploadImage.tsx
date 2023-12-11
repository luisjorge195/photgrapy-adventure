import { useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import photo from "../assets/photo.png";
import useAuth from "../hooks/useAuth";
import { db, uploadFile } from "../config/configFirebase";
import ButtonIcon from "./button";
import DescriptionImage from "./DescriptionImage";
import { identificator } from "../types/types";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { DescriptionContext } from "../context/description";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import { useToast } from "../context/toast";


const UploadImage = ({ id }: identificator) => {
  // const { setToastState } = useToast();
  const { cookie } = useAuth();
  // @ts-expect-error is necesary
  const onDrop = useCallback((acceptedFiles) => {
    console.log("import", acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ onDrop });
  const { description } = useContext(DescriptionContext);
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
      // @ts-expect-error is necesary
    const [nameWithoutExtension, extension] = acceptedFiles[0].path.split(".");
    const image =  `${nameWithoutExtension}_${cookie.session}.${extension}`;
    
    try {
      await uploadFile(acceptedFiles[0], image);
      await addDoc(collection(db, "digital"), {
       mensaje: description,
       imagen: id ? id?.name : image,
       session: cookie.session,
       date: serverTimestamp(),
     });
      toast.success('Tu aventura se publicó exitosamente!');
      window.location.reload()
    } catch (error) {
      console.error('Error al guardar la imagen:', error);
      toast.error('Error al guardar la imagen. Por favor, inténtalo de nuevo.');
    }
   
 
  };
  return (
    <div className="">
      <ToastContainer />
      <div className="flex justify-between gap-x-5">
        <form>
          <div {...getRootProps()} className="mt-4">
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              id === undefined &&
              acceptedFiles[0] === undefined && (
                <div>
                  <img src={photo} alt="photo" className="cursor-pointer" />
                  <h1 className="cursor-pointer">
                    Arrastra tus fotos y videos aquí
                  </h1>
                </div>
              )
            )}
          </div>

          {acceptedFiles[0] ? (
            <img
              src={URL.createObjectURL(acceptedFiles[0])}
              alt=""
              className=" w-full h-72"
            />
          ) : (
            id && <img src={id?.url} alt="" className=" w-full h-72" />
          )}
        </form>
        <div className="w-96">
          <DescriptionImage id={id} />
        </div>
      </div>
      { (
        <ButtonIcon
          onClick={(e) => handleSubmit(e)}
          type="submit"
          extraClassName="mt-4 bg-blue-500 p-5 w-1/2 text-white hover:bg-blue-400"
          text={id!== undefined ? "compartir" : "Guardar"}
          priority="primary"
          size="large"
        />
      )}
      
    </div>
  );
};

export default UploadImage;
