let matrizObjetos = [
  { rut: 1, nombres: "kevin", apellidos: "arevalo" },
  { rut: 2, nombres: "jazna", apellidos: "meza" },
  { rut: 3, nombres: "mario", apellidos: "zapata" }
];



const getResultado = async () => {
  const url = "http://localhost:9090/api/acompanantes";
  const peticion = fetch(url, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({lista: matrizObjetos})
  });
  peticion
    .then((resp) => resp.json())
    .then(({msg}) => {
      console.log(msg);
    })
    .catch(console.warn);
};

export const FormArray = () => {
  getResultado();
  return (
    <>
      <h1>Form Array</h1>
    </>
  );
};
