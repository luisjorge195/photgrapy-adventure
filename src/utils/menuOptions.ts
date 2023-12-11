import home from '../assets/home.png'
import compass from '../assets/compass.png'
import plus from '../assets/plus.png'

export const menu = [
  {
    id: 1,
    title: "Inicio",
    image: home,
    url:'/inicio/contenido',
    modal: false
  },
  {
    id: 2,
    title: "Tendencias",
    image: compass,
    url:'/inicio/tendencias',
    modal: false
  },
  {
    id: 4,
    title: "Crear",
    image: plus,
    url:'',
    modal: true
  },
  {
    id: 5,
    title: "Mi perfil",
    image: home,
    url:'/inicio/perfil',
    modal: false
  },
];
