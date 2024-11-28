import { useContext } from "react";
import { myContext } from "./components/context";
import { motion } from "motion/react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Layout";
import BaseElement from "./components/BaseElement";
import Product from "./components/Product";
import Login from "./components/Login";
import Dasboard from "./components/Dasboard";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  const { isLogined } = useContext(myContext);
  return (
    <>
      <motion.div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<BaseElement />}>
                <Route path="/product/:id" element={<Product />} />
              </Route>
              <Route
                path="/login"
                element={isLogined ? <Navigate to="/dasboard" /> : <Login />}
              />
              <Route
                path="/dasboard"
                element={
                  <PrivateRoute element={<Dasboard />} isLogined={isLogined} />
                }
              />
            </Route>
            <Route path="*" element={<h1>not found</h1>} />
          </Routes>
        </BrowserRouter>
      </motion.div>
    </>
  );
}

export default App;
