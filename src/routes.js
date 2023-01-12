import React from "react";
import { BrowserRouter, Route, Routes as Router } from "react-router-dom";

import Home from "./pages/Home";
import Reservas from "./pages/Reservas";

export default function Routes() {
  return (
    <Router>
      <Route path="/" element={ <Home />}/>
      <Route path="/reservas" element={ <Reservas />}/>
    </Router>
  );
}
