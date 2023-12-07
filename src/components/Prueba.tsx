import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
const Prueba = () => {
  // const [file, setFile] = useState();
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDrop });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);
    formData.append("upload_preset", "lm4x6pvz");
    formData.append("api_key", "nO4qkY-Vw9SVKDXUmshdN_qECXk");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/ddctvztto/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    console.log("data", data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
        {acceptedFiles[0] && (<img src={URL.createObjectURL(acceptedFiles[0])}/>)}
        <button>Guardar</button>
      </form>
    </div>
  );
};

export default Prueba;
