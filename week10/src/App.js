import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Section/Nav";
import Footer from "./components/Section/Footer";

import Home from "./components/Main_Section/Home/Home";
import Blog from "./components/Main_Section/Blog";
import Menu from "./components/Main_Section/Menu";
import Category from "./components/Main_Section/Category_Listview";
import ProductDetail from "./components/Main_Section/ProductDetail/ProductDetail";
import Checkout from "./components/Main_Section/Checkout";
import Search from "./components/Main_Section/Search";
import Contact from "./components/Main_Section/Contact";
import Story from "./components/Main_Section/Story";

import "./assets/sass/style.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={
            <>
              <Nav />
              <Home />
              <Footer />
            </>
          }
        />

        <Route path="/blog" element={
            <>
              <Nav />
              <Blog />
              <Footer />
            </>
          }
        />

        <Route path="/menu" element={<Menu />} />
        <Route path="/category" element={
            <>
              <Nav />
              <Category />
              <Footer />
            </>
          }
        />  
        <Route path="ProductDetail" element={
            <>
              <Nav />
              <ProductDetail />
              <Footer />
            </>
          }
        />
        <Route path="/Checkout" element={
            <>
            <Nav/>
            <Checkout />
            </>
          } 
        />
        <Route path="/Search" element={<Search />} />
        <Route path="/Contact" element={
            <>
            <Nav/>
            <Contact />
            <Footer/>
            </>
          } 
        />
        <Route path="/Story" element={
            <>
            <Nav/>
            <Story />
            </>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;