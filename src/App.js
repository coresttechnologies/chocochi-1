import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { lazy, Suspense } from "react";
const Products = lazy(() => import("./pages/Home/Products/Products"));

function App() {
  const styles = {
    width:"100vw",
    height:"100vh",
    background:"black",
    color:"white",
    display:"grid",
    placeItems:"center",
    fontSize:"24px"
  }
  return (
    <BrowserRouter>
      <Suspense fallback={<div style={styles}>Loading...</div>}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
