// src/data/menu.js
import clasicaImg from "../assets/images/Clasic.jpeg";
import americanaImg from "../assets/images/American.jpeg";
import jaliscoImg from "../assets/images/Jalisco.jpeg";
import quesoAsadoImg from "../assets/images/QuesoAsado.jpeg";
import pulledPorkImg from "../assets/images/Pulled.jpeg";
import hamburguesa3QImg from "../assets/images/3Q.jpeg";
import costraImg from "../assets/images/Costra.jpeg";

export const menuData = [
  {
    id: 1,
    name: " Hamburguesa  Clásica",
    price: "$16 K",
    description: `Pan artesanal, 
    150grms de corte 100% res,
     queso cheddar, 
     tomate,
      lechuga 
      y salsas.`,
    image: clasicaImg,
    badge: null,
  },
  {
    id: 2,
    name: " Hamburguesa  Americana",
    price: "$20 K",
    description: `Pan artesanal,
     150grms de corte 100% res,
      doble queso cheddar,
       tocineta premium,
        B8Q
         y queso crema de queso azul`,
    image: americanaImg,
    badge: null,
  },
  {
    id: 3,
    name: " Hamburguesa  Jalisco",
    price: "$20 K",
    description: `Pan artesanal,
     150grms de corte 100% res,
      carne de res desmechada tipo birria,
       pico de gallo,
        mermelada de jalapeños
         y queso crema de queso azul`,
    image: jaliscoImg,
    badge: null,
  },
  {
    id: 4,
    name: " Hamburguesa  con queso asado",
    price: "$22 K",
    description: `Pan artesanal,
     150grms de corte 100% res,
      queso asado,
       tocineta premium,
        B8Q dulce,
         mermelada de jalapeños
          y queso crema de queso azul`,
    image: quesoAsadoImg,
    badge: null,
  },
  {
    id: 5,
    name: " Hamburguesa  Pulled pork",
    price: "$20 K",
    description: `Pan artesanal,
     150grms de corte 100% res,
      queso cheddar,
       pulled pork,
        BBQ,
         queso crema. `,
    image: pulledPorkImg,
    badge: null,
  },
  {
    id: 6,
    name: " Hamburguesa  3Q",
    price: "$22 K",
    description: `Pan artesanal,
     150grms de corte 100% res,
      doble queso cheddar,
       tocineta premium encostrada con queso mozzarella,
        mermelada de jalapeños
         y queso crema de queso azul`,
    image: hamburguesa3QImg,
    badge: null,
  },
  {
    id: 7,
    name: " Hamburguesa  con costra",
    price: "$22 K",
    description: `Pan artesanal,
     150grms de corte 100% res,
      queso cheddar,
       carne desmechada a tu elección (Pulled pork o tipo birria)
        encostrada con queso mozzarella
         y queso crema de queso azul`,
    image: costraImg,
    badge: null,
  },
];

export const adicionesData = [
  {
    id: 1,
    name: "Papas a la francesa",
    price: "$5 K",
  },
  {
    id: 2,
    name: "Pulled pork o tipo birria",
    price: "$5 K",
  },
  {
    id: 3,
    name: "Tocineta",
    price: "$4 K",
  },
  {
    id: 4,
    name: "Queso cheddar",
    price: "$1 K",
  },
  {
    id: 5,
    name: "Carne hamburguesa",
    price: "$5 K",
  },
  {
    id: 6,
    name: "Coca-Cola Original o Zero",
    price: "$5 K",
  },
];

export const heroImages = [
  clasicaImg,
  americanaImg,
  jaliscoImg,
  quesoAsadoImg,
  pulledPorkImg,
  hamburguesa3QImg,
  costraImg,
];
