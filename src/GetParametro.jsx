import axios from "axios";
import React from "react";
import { useSearchParams } from "react-router-dom";

export const Detail = async(props) => {
  const [searchParams] = useSearchParams();
  const url = 'http://localhost:9090/api/reservas/transaccion?'
  let query = searchParams.toString();
  await fetch(url + query).then(resp => {
    resp.json();
  })


  // const params = [];
  // for(let entry of searchParams.entries()) {
  //   params.push(entry);
  // }
  // console.log(params.toString())
  // // let query = Object.keys(params).map(k => `${esc(k)}=${esc(params[k])}`).join('&')
  // let query = Object.keys(params).map(k => `${(k)}=${(params[k])}`).join('&')
  // console.log(query)
  return (
    <>
      {/* <ul>
        {params.map(([key, value]) => (
          <li key={key}>{key} - {value}</li>
        ))}
      </ul> */}
      <div>{url}</div>
      <div>{query}</div>
    </>
  );
};

export const ObtenerParametro = async () => {
  return (
    <>
      <h1>Obtener el parametro</h1>
    </>
  );
};
