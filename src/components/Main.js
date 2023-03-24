import React from "react";
import Card from "./Card";
import Lasagna from "../assets/Lasagna.jpeg";
import bruschetta from "../assets/Bruchetta.svg";
import LemonDessert from "../assets/LemonDessert.jpg";

const specialsData = [
  {
    img: Lasagna,
    title: "Lasagna",
    price: 50.00,
    description:
      "Delecios lasgna that makes your mouth licking.",
  },
  {
    img: bruschetta,
    title: "Bruschetta",
    price: 2,
    description:
      "Bruschetta with olive oil",
  },
  {
    img: LemonDessert,
    title: "Lemon Dessert",
    price: 5.0,
    description:
      "Light dessert with the taste of lemon",
  },
];

function Main() {
  const specialsCards = specialsData.map((item) => {
    return (
      <Card
        key={item.title}
        image={item.img}
        title={item.title}
        price={item.price}
        description={item.description}
      />
    );
  });

  return (
    <main>
      <section className="specials">
        <div className="top">
          <h1>This weeks specials!</h1>
          <button>Online Menu</button>
        </div>
        <div className="cards">{specialsCards}</div>
      </section>
      <br></br>
    </main>
  );
}

export default Main;