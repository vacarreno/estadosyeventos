import React from "react";
import Header from "../components/Header.jsx";
import fondoHeader from "../assets/img/Header.jpg";
import CardPizza from "../components/CardPizza.jsx";
import { useState } from "react";
import BotonIncrementar from "../components/BotonIncrementar.jsx";
import BotonDisminuir from "../components/BotonDisminuir.jsx";
import Formulario from "../components/Formulario.jsx";
import Register from "./Register.jsx";
import Login from "./Login.jsx";

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

  // Estado para manejar el carrito de compras incrementa con el botón Cuentas
  const [cuenta, setCuenta] = useState(0);


  const incrementarCuenta = () => {
    setCuenta(cuenta + 1);
  }
  
  const disminuirCuenta = () => {
    setCuenta(cuenta - 1);
  }

  
  return (
    <div>
      <Header backgroundImage={fondoHeader} />
    {/*
    <div className="container text-center mt-4">
        <h2 className="text-center mt-4">Cuenta: {cuenta}</h2>

        <div className="flex justify-center gap-8 mt-4">
          <BotonIncrementar
            className="bg-blue-500 text-white px-4 py-2 rounded"
            incrementar={incrementarCuenta}
          />
          <BotonDisminuir
            className="bg-red-500 text-white px-4 py-2 rounded"
            disminuir={disminuirCuenta}
          />
        </div>
      </div>

      <div className="container text-center mt-4">
      <Formulario/>
    </div>
*/}

{/*
                <div className="container text-center mt-12">
                    <h2 className="text-center mt-4">Formulario de Registro</h2>
                    <p className="text-center mt-4">Por favor, complete el formulario para registrarse.</p>
                   <Register/>
                </div>
*/}
                <div className="container text-center mt-12">
                    <h2 className="text-center mt-4">Login</h2>
                    <p className="text-center mt-4">Ingrese sus credenciales para ingresar al sistema.</p>
                   <Login />
                </div>
 {/*      
      <div className="container py-4">
        <div className="row g-4">
          {pizzas.map((pizza, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 d-flex justify-content-center"
            >
              <CardPizza objeto={pizza} />
            </div>
          ))}
        </div>
      </div>
  */} 
    </div>
  );
}
