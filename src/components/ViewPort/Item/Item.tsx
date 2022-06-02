import React from "react";
import s from "./Item.module.scss";
import { useRef, useEffect, useState } from "react";

const useContainerDimensions = myRef => {
  const getDimensions = () => ({
    width: myRef?.current?.offsetWidth,
    height: myRef?.current?.offsetHeight
  })

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions())
    }

    if (myRef.current) {
      setDimensions(getDimensions())
    }

    window.addEventListener("change", handleResize)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("change", handleResize)
      window.removeEventListener("resize", handleResize)
    }
  }, [myRef])

  return dimensions;
};

const Item = () => {
  const componentRef = useRef()
  const { width, height } = useContainerDimensions(componentRef)
  return (
    <div ref={componentRef} className={s.container}>
     <p>{width} x {height}</p>
     
    </div>
  )
}

export default Item;
