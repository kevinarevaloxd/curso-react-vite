import { useRef } from "react";
import { useDispatch } from "react-redux";

export const SubirArchivo = () => {

    return (
        <>
            <h1>Subir Archivo</h1>
            <input type="file"
            id="archivo" 
            name="archivo"/>
        </>
    )
}