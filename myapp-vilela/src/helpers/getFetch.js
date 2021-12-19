import fotogorritas from '../assets/img/gorritas.jpg';

const productos = [
{    
    precio: 500,
    id: 1,
    categorias: 'gorras',
    title: "Remera",
    stock: 15,
    "descripcion": "Gorra New York , varios colores , ajustable",
    foto :fotogorritas,
  },
  {
    precio: 300,
    id: 2,
    categorias: 'remeras',
    "title": "Chomba",
    "stock": "15",
    "descripcion": "Gorra New York , varios colores , ajustable",
    foto :fotogorritas,
  },
  {
    "precio": 100,
    "id": 3,
    "categorias": 'gorras',
    "title": "Pantalon",
    "stock": "15",
    "descripcion": "Gorra New York , varios colores , ajustable",
    foto :fotogorritas,
  },
  {
    "precio": 150,
    "id": 6,
    "categorias": 'remeras',
    "title": "Bermuda",
    "stock": "15",
    "descripcion": "Gorra New York , varios colores , ajustable",
    foto :fotogorritas,
  }
];

export const getFetch = new Promise((resolve) => {
    setTimeout(()=> {
        resolve(productos)
    },2000)
})
