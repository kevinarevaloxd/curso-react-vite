import { Fragment } from "react"

//Uso de fragmentos
//Se puede ver en los nodos padres: <Fragment></Fragment> o <></>
//Es un agrupador de otros elementos JSX, siempre deben ir dentro de un nodo padre
//Pueden haber tantos elementos como queramos dentro del nodo padre

export const FirstApp = () => {
    return (
        <>
            <h1>First App</h1>
            <p>Probando fragmento</p>
            <h1>First App</h1>
            <p>Probando fragmento</p>
            <h1>First App</h1>
            <p>Probando fragmento</p>
        </>
    )
}