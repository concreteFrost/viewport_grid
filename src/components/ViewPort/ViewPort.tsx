import React, { useRef } from "react";
import s from "./ViewPort.module.scss"
import Item from "./Item/Item"
import { useState, useEffect } from 'react'

type ViewProps = {
    gridRows: number,
    gridCols: number,
    navActive: boolean

}

const ViewPort = ({ gridRows, gridCols, navActive }: ViewProps) => {
    //Defines the default state for the calculated value
    const [items, setItems] = useState(0);

    const viewportRef = useRef();
    useEffect(() => {
        setItems(gridCols * gridRows)
        //Changes grid layout based on a provided values
        viewportRef.current.style = `
        grid-template-columns: repeat(${gridCols}, 1fr);
        grid-template-rows: repeat(${gridRows}, 1fr);
        color:red`

    }, [gridCols, gridRows])

    //Creates a certain amount of elements based on a provided value
    let res = [...Array(items)].map((e, i) => { return <Item key={i}></Item> })

    return <div className={s.container} >

        <div className={navActive ? s.grid_container : s.grid_container_full} ref={viewportRef}>
            {res}
        </div>
    </div>
}

export default ViewPort;