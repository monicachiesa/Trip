import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from 'react-redux'
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>  //react redux
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}
