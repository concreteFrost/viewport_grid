import React from "react";
import s from "./Navbar.module.scss";
import { useState, useRef, useEffect } from "react";

type NavbarProps = {
  rows: number,
  cols: number,
  setRows: (x: number) => void,
  setCols: (x: number) => void,
  navActive: boolean,
  setNavActive: (x: boolean)=> void
}

const Navbar = (props: NavbarProps) => {
  const [cols, setCols] = useState(props.cols);
  const [rows, setRows] = useState(props.rows);
  const [navActive,setNavActive] = useState(props.navActive)
  let [isActive, setIsActive] = useState(true);

  const toggle = () => {
    isActive ? setIsActive(false) : setIsActive(true)
    navActive ? props.setNavActive(false) : props.setNavActive(true)
  }
  useEffect(() => {
    setRows(props.rows)
    setCols(props.cols)
    setNavActive(props.navActive)
  })

  const getValidValue = (value: number): number => {
    if (value < 1) {
      value = 1
    }
    if (value > 10) {
      value = 10
    }
    else if (isNaN(value)) {
      value = 1
    }
    return value;
  }
  const updateRows = (e) => {
    let value = getValidValue(parseInt(e.target.value));
    props.setRows(value);
  }

  const updateCols = (e) => {
    let value = getValidValue(parseInt(e.target.value));
    props.setCols(value);
  }
  return (
    <div>
      <button className={s.toggle} onClick={toggle}>Click</button>
      <div className={isActive ? s.nav : s.nav_hidden}>
        <div className={s.input}>
          <label htmlFor="rows">Rows</label>
          <input type="number" id="rows" name="rows" onChange={updateRows} value={rows} />
          <label htmlFor="columns">Columns</label>
          <input type="number" id="columns" name="columns" onChange={updateCols} value={cols} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
