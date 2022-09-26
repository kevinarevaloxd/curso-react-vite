import axios from "axios";
import React from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";


export const Detail = (props) => {
  const [searchParams] = useSearchParams();
  let token_ws = searchParams.get('token_ws')
  let TBK_TOKEN = searchParams.get('TBK_TOKEN')
  let TBK_ORDEN_COMPRA = searchParams.get('TBK_ORDEN_COMPRA')
  let TBK_ID_SESION = searchParams.get('TBK_ID_SESION')
  const params = [];
  for(let entry of searchParams.entries()) {
    params.push(entry);
  }
  return (
    <>
      <ul>
        {params.map(([key, value]) => (
          <li key={key}>{key} - {value}</li>
        ))}
      </ul>
      <div>
        <form action="http://localhost:9090/api/reservas/transaccion" method="GET">
            <input type="hidden" name="token_ws" value={token_ws}/>
            <input type="hidden" name="TBK_TOKEN" value={TBK_TOKEN}/>
            <input type="hidden" name="TBK_TOKEN" value={TBK_ORDEN_COMPRA}/>
            <input type="hidden" name="TBK_ID_SESION" value={TBK_ID_SESION}/>
            <button type="submit">GET</button>
        </form>
      </div>
    </>
  );
};

export const ObtenerParametro = () => {
  return (
    <>
      <h1>Obtener el parametro</h1>
    </>
  );
};
