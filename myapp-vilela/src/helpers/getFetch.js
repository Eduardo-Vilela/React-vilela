import React from "react";
import fotogorritas from '../assets/img/gorritas.jpg';

const productos = [
{    
    "precio": 500,
    "id": 1,
    "title": "Remera",
    "stock": "15",
    "foto" :"fotogorritas",
  },
  {
    "precio": 300,
    "id": 2,
    "title": "Chomba",
    "stock": "15",
    "foto" :"fotogorritas",
  },
  {
    "precio": 100,
    "id": 3,
    "title": "Pantalon",
    "stock": "15",
    "foto" :"fotogorritas",
  },
  {
    "precio": 150,
    "id": 6,
    "title": "Bermuda",
    "stock": "15",
    "foto" :"fotogorritas",
  }
];

export const getFetch = new Promise((resolve) => {
    setTimeout(()=> {
        resolve(productos)
    },3000)
})
