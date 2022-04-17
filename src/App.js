import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading/Loading";
const Products = lazy(() => import("./pages/Products/Products"));
const Contacts = lazy(() => import( "./pages/Contact/Contacts"));


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact-us" element={<Contacts />} />
          </Routes>
        </div> 
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
