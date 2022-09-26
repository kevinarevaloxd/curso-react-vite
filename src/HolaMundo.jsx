//Este es mi primer componente
//Debe ser exportado para ser importado en nuestro main
// export function App() {
//     //document.createElement...(Otra forma de )
//     return (<h1>Hola Mundo</h1>)
// }

//Tambien se puede encontrar el export de esta forma
// export default App;
//En este caso el import en main debe quedar sin llaves
//Import App from './HolaMundo'

export const HolaMundo = () => {
    return (
        <h1>Hola Mundo</h1>
    )
}