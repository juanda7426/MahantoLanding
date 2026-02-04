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
    name: "Hamburguesa Clásica",
    price: "$16 K",
    description: `Pan artesanal, 150g de corte 100% res, queso cheddar, tomate, lechuga y salsas.`,
    image: clasicaImg,
    badge: null,
  },
  {
    id: 2,
    name: "Hamburguesa Americana",
    price: "$20 K",
    description: `Pan artesanal, 150g de corte 100% res, doble queso cheddar, tocineta premium, BBQ y queso crema de queso azul.`,
    image: americanaImg,
    badge: null,
  },
  {
    id: 3,
    name: "Hamburguesa Jalisco",
    price: "$20 K",
    description: `Pan artesanal, 150g de corte 100% res, carne de res desmechada tipo birria, pico de gallo, mermelada de jalapeños y queso crema de queso azul.`,
    image: jaliscoImg,
    badge: null,
  },
  {
    id: 4,
    name: "Hamburguesa con Queso Asado",
    price: "$22 K",
    description: `Pan artesanal, 150g de corte 100% res, queso asado, tocineta premium, BBQ dulce, mermelada de jalapeños y queso crema de queso azul.`,
    image: quesoAsadoImg,
    badge: null,
  },
  {
    id: 5,
    name: "Hamburguesa Pulled Pork",
    price: "$20 K",
    description: `Pan artesanal, 150g de corte 100% res, queso cheddar, pulled pork, BBQ, queso crema.`,
    image: pulledPorkImg,
    badge: null,
  },
  {
    id: 6,
    name: "Hamburguesa 3Q",
    price: "$22 K",
    description: `Pan artesanal, 150g de corte 100% res, doble queso cheddar, tocineta premium encostrada con queso mozzarella, mermelada de jalapeños y queso crema de queso azul.`,
    image: hamburguesa3QImg,
    badge: null,
  },
  {
    id: 7,
    name: "Hamburguesa con Costra",
    price: "$22 K",
    description: `Pan artesanal, 150g de corte 100% res, queso cheddar, carne desmechada a tu elección (Pulled Pork o tipo birria) encostrada con queso mozzarella y queso crema de queso azul.`,
    image: costraImg,
    badge: null,
    options: {
      title: "Elige tu carne desmechada",
      choices: ["Pulled Pork", "Tipo Birria"],
    },
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
    name: "Adición Pulled Pork",
    price: "$5 K",
  },
  {
    id: 3,
    name: "Adición Tipo Birria",
    price: "$5 K",
  },
  {
    id: 4,
    name: "Tocineta",
    price: "$4 K",
  },
  {
    id: 5,
    name: "Queso cheddar",
    price: "$1 K",
  },
  {
    id: 6,
    name: "Carne hamburguesa (150g)",
    price: "$5 K",
  },
  {
    id: 7,
    name: "Coca-Cola Original",
    price: "$5 K",
  },
  {
    id: 8,
    name: "Coca-Cola Zero",
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

export const salsasOptions = [
  "Todo",
  "Sin salsas",
  "Salsa de tomate",
  "Salsa de la casa",
  "BBQ",
  "Mostaza",
];

export const info = {
  name: "Ma'Anto",
  address: "Cra. 54 # 80-23, Villa Central, Itagüí, Antioquia",
  mapsGoogle:
    "https://www.google.com/maps/place/Cra.+54+%23+80-23,+Villa+Central,+Itag%C3%BCi,+Antioquia/@6.1903725,-75.596456,15z/data=!4m10!1m2!2m1!1sCra+54%2380-23!3m6!1s0x8e46826b24e0a20d:0xeb09ba500cab49c9!8m2!3d6.190431!4d-75.596603!15sCgxDcmEgNTQjODAtMjOSAQpzdWJwcmVtaXNl4AEA!16s%2Fg%2F11x7gwg0bx?hl=es&entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D",
  mapsWaze:
    "https://ul.waze.com/ul?place=ChIJDaLgJGuCRo4RyUmrDFC6Ces&ll=6.19043100%2C-75.59660300&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
  instagram: "https://www.instagram.com/algustodemaanto/",
  facebook: "https://www.facebook.com/bryan.alexis.garcia.839367",
  tiktok: "https://www.tiktok.com/@algustodemaanto",
  phone: "573207643590",
};
