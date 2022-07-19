import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { Provider } from "react-redux/es/exports";
import { store } from "./app/store";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/shop/:id" element={<DetailPage />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Provider>
  );
};

export default App;
