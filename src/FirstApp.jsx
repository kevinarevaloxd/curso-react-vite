import { Fragment } from "react"

//Uso de fragmentos
//Se puede ver en los nodos padres: <Fragment></Fragment> o <></>
//Es un agrupador de otros elementos JSX, siempre deben ir dentro de un nodo padre
//Pueden haber tantos elementos como queramos dentro del nodo padre

//Probando variables en React
const nombre = 'Kevin'
const matriz = [1,2,3,4,5]
//Los objetos no puede ser imprimidos directamente, se debe desestructurar al imprimir
const objeto = {nombre: 'Kevin', apellido: 'Arevalo'}
//Tambien se puede utilizr JSON Stringify para imprimir el objeto en formato JSON
const funcion = (a, b) => {
    return a + b;
}

export const FirstApp = () => {
    return (
        <>
            <h1>First App</h1>
            <p>Probando variables en React</p>
            <h2>{nombre}</h2>
            <p>{matriz}</p>
            <p>{objeto.apellido}</p>
            <p>{JSON.stringify(objeto)}</p>
            <p>{funcion(1,3)}</p>
        </>
    )
}