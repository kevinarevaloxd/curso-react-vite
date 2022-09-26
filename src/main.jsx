import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";


//Aqui importamos nuestros componentes
import { HolaMundo } from './HolaMundo';

import { FirstApp } from './FirstApp'; //Primera tarea( Crear un componente )

import { ObtenerParametro, Detail} from './GetParametro';

import './styles.css'; //Implementando estilos con CSS

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ObtenerParametro />
            <Detail />
        </BrowserRouter>
      </React.StrictMode>
    );


