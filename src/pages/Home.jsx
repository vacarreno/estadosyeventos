import React from "react";
import Header from "../components/layout/Header.jsx";
import fondoHeader from "../img/Header.jpg";
import CardPizza from "../components/common/CardPizza.jsx";

export default function Home() {
  const pizzas = [ 
    {
      name: "Napolitana",
      price: 5950,
      ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Eataly_Las_Vegas_-_Feb_2019_-_Sarah_Stierch_12.jpg/1280px-Eataly_Las_Vegas_-_Feb_2019_-_Sarah_Stierch_12.jpg",
    },
    {
      name: "Española",
      price: 6950,
      ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
    },
    {
      name: "Chilena",
      price: 12000,
      ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Closeup_of_a_woman_preparing_a_handmade_pizza_in_the_kitchen_-_51625269132.jpg/1280px-Closeup_of_a_woman_preparing_a_handmade_pizza_in_the_kitchen_-_51625269132.jpg",
    },
    {
      name: "Napolitana",
      price: 5950,
      ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Eataly_Las_Vegas_-_Feb_2019_-_Sarah_Stierch_12.jpg/1280px-Eataly_Las_Vegas_-_Feb_2019_-_Sarah_Stierch_12.jpg",
    },
    
    {
      name: "Chilena",
      price: 12000,
      ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Closeup_of_a_woman_preparing_a_handmade_pizza_in_the_kitchen_-_51625269132.jpg/1280px-Closeup_of_a_woman_preparing_a_handmade_pizza_in_the_kitchen_-_51625269132.jpg",
    },
    
    {
      name: "Española",
      price: 6950,
      ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
    },
  ];

  return (
    <div>
      {/* Header con imagen de fondo */}
      <Header backgroundImage={fondoHeader} />

      {/* Contenedor responsive de Bootstrap */}
      <div className="container py-4">
        <div className="row g-4">
          {pizzas.map((pizza, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
              <CardPizza objeto={pizza} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
