import React from "react";
import s from "./Navbar.module.scss";
import { useState } from "react";
import Input from "./Input/Input"

type NavbarProps = {
  rows: number,
  cols: number
  setRows: (x: number) => void,
  setCols: (x: number) => void,
  setNavActive: (x: boolean) => void
}

const Navbar = (props: NavbarProps) => {
  //Define default state for the navbar component
  let [isActive, setIsActive] = useState(true);

  const toggle = () => {
    //Hides the navbar component from the viewport
    isActive ? setIsActive(false) : setIsActive(true)
    
    //Expands the grid if the navbar component was removed
    isActive ? props.setNavActive(false) : props.setNavActive(true)
  }

  return (
    <div>
      <button role='toggler' className={s.toggle} onClick={toggle}><i className="fa-solid fa-bars"></i></button>
      <div role="nav" className={isActive ? s.nav : s.nav_hidden}>
        <div className={s.input}>
          <Input id="rows" val={props.rows} title="Rows" setVal={props.setRows} />
          <Input id="cols" val={props.cols} title="Cols" setVal={props.setCols} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
