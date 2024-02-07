import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { useState } from "react";

const Router = () => {
  const [box, setBox] = useState([
    {
      id: Date.now(),
      title: "Todo List 정복!",
      body: "Todo List를 마스터해보자",
      isDone: false,
      deadline: "2024-01-31",
    },
  ]);
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
