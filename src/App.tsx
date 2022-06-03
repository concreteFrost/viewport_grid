import React from "react";
import s from "./css/App.module.scss";
import Navbar from "./components/Navbar/Navbar";
import ViewPort from "./components/ViewPort/ViewPort";
import { useState, useEffect } from "react";

export const App = () => {

  //Define default values for rows/cols
  const [cols, setCols] = useState(2);
  const [rows, setRows] = useState(2);

  //Define default state for navbar
  const [navActive, setNavActive] = useState(true)

  return (
    <div className={navActive ? s.container : s.no_nav}>
      <Navbar setRows={setRows} rows={rows} cols ={cols} setCols={setCols} setNavActive={setNavActive} />
      <ViewPort gridRows={rows} gridCols={cols} navActive={navActive} />
    </div>
  );
};
