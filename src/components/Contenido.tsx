import { useEffect } from 'react'
import axios from 'axios';
const Contenido = () => {
  const fetchAllImages = async () => {
    try {
      
      // const cloudName = 'ddctvztto';  // Reemplaza con tu nombre de nube en Cloudinary
      // const apiKey = '888442611496232';  // Reemplaza con tu clave de API en Cloudinary
      // const apiSecret = 'nO4qkY-Vw9SVKDXUmshdN_qECXk';
      // const cloudName = 'ddctvztto'; 
      const url = 'https://api.cloudinary.com/v1_1/ddctvztto/resources/image'
      const response = await axios.get(url)
      // const response = await fetch(url,{
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'X-Requested-With': 'XMLHttpRequest'
      //   }
      // });
      const data = await response.data;
      console.log('data',data)
    } catch (error) {
      console.error('Error al recuperar imágenes de Cloudinary:', error);
    }
  };
  useEffect(()=>{
    fetchAllImages()
  },[])

  return (
    <div>Contenido</div>
  )
}

export default Contenido




// import { useEffect } from 'react'

// const Contenido = () => {
//   const fetchAllImages = async () => {
//     try { // Reemplaza con tu nombre de nube en Cloudinary
//       // const apiKey = '888442611496232';  // Reemplaza con tu clave de API en Cloudinary
//       // const apiSecret = 'nO4qkY-Vw9SVKDXUmshdN_qECXk';
//       // const cloudName = 'ddctvztto'; 
//       console.log('aca', import.meta.env.VITE_APIKEY)
//       console.log('aca', import.meta.env.VITE_APISECRET)
//       console.log('aca', import.meta.env.VITE_CLOUDNAME)
//       const url = `https://${import.meta.env.VITE_APIKEY}:${import.meta.env.VITE_APISECRET}@api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDNAME}/resources/image`
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log('data',data)
//     } catch (error) {
//       console.error('Error al recuperar imágenes de Cloudinary:', error);
//     }
//   };
//   useEffect(()=>{
//     fetchAllImages()
//   },[])

//   return (
//     <div>Contenido</div>
//   )
// }

// export default Contenido