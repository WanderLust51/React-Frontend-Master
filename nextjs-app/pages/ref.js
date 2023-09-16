import { useRef, useEffect } from "react"

export default function UsingRef(){
    
    const theh2 = useRef()

    useEffect(() => {

        console.log(theh2.current.innerText)
        
    })

    return(
        <>
            <h2 ref={theh2}>Me llamo h2, hola.</h2>
        </>
    )
}