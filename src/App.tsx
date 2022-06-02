import React from "react";
import s from "./css/App.module.scss";
import Navbar from "./components/Navbar/Navbar";
import ViewPort from "./components/ViewPort/ViewPort";
import { useState,useEffect} from "react";

export const App = () => {
  const[cols,setCols] = useState(1);
  const[rows,setRows] = useState(1); 
  const[navActive,setNavActive] = useState(true)

  useEffect(()=>{
    console.log(navActive)
  })
  return (
    <div className={ navActive ? s.container : s.no_nav}>
      <Navbar rows={rows} cols={cols} setRows={setRows} setCols={setCols} navActive={navActive} setNavActive={setNavActive} />
      <ViewPort  gridRows={rows} gridCols={cols} navActive={navActive} />
    </div>
  );
};
