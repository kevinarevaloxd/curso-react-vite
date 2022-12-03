import React from "react";
import { useSearchParams } from "react-router-dom";

const getResultado = async () => {
  const [searchParams] = useSearchParams();
  let query = searchParams.toString();
  const url = "http://localhost:9090/api/reservas/transaccion?";
  const peticion = fetch(url + query);
  peticion
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data.msg);
    })
    .catch(console.warn);
};

export const Detail = (props) => {
  getResultado();

  return (
    <>
      <div>
        <form action="http://localhost:9090/api/reservas" method="post">
          <input
          />
          <input type="submit" value="Pagar" />
        </form>
        <h2>Hola</h2>
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
