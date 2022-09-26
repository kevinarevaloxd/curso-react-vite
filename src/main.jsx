import React from 'react';
import ReactDOM from 'react-dom/client';

//Aqui importamos nuestros componentes
import { HolaMundo } from './HolaMundo';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <HolaMundo />
    </React.StrictMode>
)

