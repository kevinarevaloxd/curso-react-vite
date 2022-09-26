import React from 'react';
import ReactDOM from 'react-dom/client';


//Aqui importamos nuestros componentes
import { HolaMundo } from './HolaMundo';

//Primera tarea( Crear un componente )
import { FirstApp } from './FirstApp';


ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <HolaMundo />
        <FirstApp />
    </React.StrictMode>
)

