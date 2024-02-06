import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { useState } from "react";

const Router = () => {
  const [box, setBox] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home box={box} setBox={setBox} />} />
        <Route path="/detail/:id" element={<Detail box={box} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
