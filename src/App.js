import "./App.css";
import React from "react";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizz Co.</h1>;
}

function Menu() {
  return (
    <>
      <h1>
        Our Menu <span>🍕</span>
      </h1>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </>
  );
}

function Footer() {
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let period = "AM";
  let formatHour = hour;
  if (hour > 12) {
    formatHour = hour - 12;
    period = "PM";
  } else if (hour === 0) {
    formatHour = 12;
  }
  const isOpen = hour > 12 && hour < 24;
  if (!isOpen) {
    return <footer>Sorry, we're currently closed</footer>;
  }
  return (
    <footer>
      {formatHour + ":" + minute + " " + period}, we're currently open
    </footer>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza spinaci"></img>
      <h2>Pizza Salamino</h2>
      <p>Tomato, mozarella, and pepperoni</p>
    </div>
  );
}

export default App;
