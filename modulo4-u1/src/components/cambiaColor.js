'use client'

import React, { useState } from "react";

export function CambiaColor() {
    const [indice, setColor] = useState(0);

    const colores = ["blue", "red", "green", "purple", "orange", "black"];

    const handleClick = () => {
        setColor((indice + 1) % 6);
    };

    return (
        <div>
            <div style={{ width: "100px", height: "100px", margin: "20 px", backgroundColor: `${colores [indice]}`}}>
                {colores [indice]} 
            </div>
            <button onClick={handleClick}>Cambiar Color</button>
        </div>
    )

}