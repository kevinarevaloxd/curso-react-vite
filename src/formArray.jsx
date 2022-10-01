let matrizObjetos = [
  { rut: 1, nombres: "kevin", apellidos: "arevalo" },
  { rut: 2, nombres: "jazna", apellidos: "meza" },
  { rut: 3, nombres: "mario", apellidos: "zapata" }
];

// let rut = [1,2,3]
// let nombres = ['Kevin', 'Jazna', 'Mario']
// let apellidos = ['Arevalo', 'Meza', 'Zapata']
// let objeto = {n: 'Soy un objeto'}

let formData = new FormData()
formData.append('name', 'John');
formData.append('password', 'John123');
console.log(formData.getAll('name'))

const getResultado = async () => {
  const url = "http://localhost:9090/api/acompanantes";
  const peticion = fetch(url, {
    method: "POST",
    body: formData
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
