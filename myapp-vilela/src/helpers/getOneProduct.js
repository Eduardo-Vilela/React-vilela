import fotogorritas from '../assets/img/gorritas.jpg';

const producto = [
{    
    "precio": 500,
    "id": 1,
    "title": "gorras",
    "stock": "15",
    "descripcion": "Gorra New York , varios colores , ajustable",
    foto :fotogorritas,
  },
];

export const getOneProduct = new Promise((resolve) => {
    setTimeout(()=> {
        resolve(producto)
    },2000)
})
