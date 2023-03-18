import React from "react";
// import { useState, useEffect } from "react";
import "./Components/Modules/App.module.css";
import Navbar from "./Components/Navigation/Navbar/Navbar";
import apartaments from "./apartaments";
import Apartaments from "./Components/Apartament/Apartaments";
import Footer from "./Components/Footer/Footer";
import "./Components/Modules/App.module.css";
import BottomNavigation from './Components/UI/BottomNavigation';

function App() {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch("/api/apartments")
  //     .then((response) => response.json())
  //     .then((data) => setItems(data));
  // }, []);

  return (
    <>
      <Navbar />
      <Apartaments items={apartaments} />
      <BottomNavigation />
      {/* <Footer /> */}
    </>
  );
}

export default App;
