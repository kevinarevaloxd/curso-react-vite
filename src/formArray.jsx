let matrizObjetos = [
  { rut: 1, nombres: "kevin", apellidos: "arevalo" },
  { rut: 2, nombres: "jazna", apellidos: "meza" },
  { rut: 3, nombres: "mario", apellidos: "zapata" }
];

const getResultado = async () => {
  const url = "http://localhost:9090/api/acompanantes";
  const peticion = fetch(url, {
    method: "POST",
    body: JSON.stringify(matrizObjetos)
  });
  peticion
    .then((resp) => resp.json())
    .then(({msg, formData}) => {
      console.log(msg, formData);
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
