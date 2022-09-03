// hace refrencia a todo el documento de html para acceder a un elemento de id CSS/ se usa const , para tenerlos guardo para no tener que estar haciendo que el motor este buscando el boton siempre. de esta moda se ahorran recursos. 
const botonRegistrar = document.getElementById('btn-registrar');

// function imprimirDatos(){
// funcion normal 
// }

// forma actual de hacer funciones funcion de flechas
const imprimirDatos = () => {

    // esta seccion es para tomar el valor del html input para hacerlo de forma dinamico
    let nombre = document.getElementById('txt-nombre').value;
    let Apellidos = document.getElementById('txt-apellidos').value;
    let correo_Electrónico = document.getElementById('txt-correo').value;
    let direccion = document.getElementById('txt-direccion').value;
    let ciudad = document.getElementById('txt-ciudad').value;
    let provincia = document.getElementById('slt-provincia').value;
    let codigo_postal = document.getElementById('txt-zip').value;

    console.log('El nombre es: ', nombre);
    // console.log('El nombre es: ', nombre, ' El apellido es: ', Apellidos, ' El correo es: ', correo_Electrónico);
    console.log('El Apellido es: ', Apellidos);
    console.log('El Correo electronico es: ', correo_Electrónico);
    console.log('La direccion es: ', direccion);
    console.log('La ciudad es: ', ciudad);
    console.log('La provincia es: ', provincia);
    console.log('El codigo postal es: ', codigo_postal);
    // buscar template screen
};
// la funconalidad no cambia en tiempo de ejecucion , si algo cambia

// podemos guardar las variasbles en formato json buscar


// se poner esta variable para el boton , significa que vamos a agregarle al boton para que observe lo que esta haciendo el boton, va a estar atento a que ocurra una accion en especifoico
botonRegistrar.addEventListener('click', imprimirDatos);
// imprir datos es uns funcionabilidad, o funcion