import { useState } from "react"

export default function Hooks(){

    const [cantidad, setCantidad] = useState(0)

    function subirCantidad(){
        setCantidad(cantidad + 1)
    }
    function reset(){
        setCantidad(0)
    }

    return(
        <>
            <p>Cantidad: {cantidad}</p>
            <button onClick={subirCantidad}>Subir cantidad</button>
            <button onClick={reset}>Reiniciar cantidad</button>
        </>
    )
}