import React from "react";
import s from "./Item.module.scss";
import { useRef, useEffect, useState } from "react";

export const useResizeObserver = ref =>{
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  useEffect(()=>{
    const target = ref.current;
    const observer = new ResizeObserver((entries)=>{
     entries.forEach(e=>{setDimensions(e.contentRect)})  
    })
    observer.observe(target)
    return()=>{
      observer.unobserve(target)
    }
  },[ref])

  return dimensions;
}

const Item = () => {
  const componentRef = useRef()
  const dimensions = useResizeObserver(componentRef)
  return (
    <div role='item' ref={componentRef} className={s.container}>
     <p>{Math.round(dimensions.width)} x {Math.round(dimensions.height)}</p>
     
    </div>
  )
}

export default Item;