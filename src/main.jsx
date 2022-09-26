import React from 'react';
import ReactDOM from 'react-dom/client';


//Aqui importamos nuestros componentes
import { HolaMundo } from './HolaMundo';

import { FirstApp } from './FirstApp'; //Primera tarea( Crear un componente )

import './styles.css'; //Implementando estilos con CSS


ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <HolaMundo />
        <FirstApp />
    </React.StrictMode>
)

