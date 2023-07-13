function promptCancelado(input){
    if(input === null){
        alert("Saliendo del sistema de turnos.");
        return true;
    }
}


//PROBANDO
console.log(new Date().toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"short", day:"numeric"}));

console.log(new Date());

console.log(new Date().getDate());


let animales = ["Perro", "Gato", "Mono", "Ratón", "Laucha", "Lombriz"];
let listaAnimales = animales.join(", ");
console.log(listaAnimales);



// // crea un nuevo objeto `Date`
// let today = new Date();
 
// // obtener la fecha y la hora
// let now = today.toLocaleString();
// console.log(now);
 
// /*
//     Resultado: 1/27/2020, 9:30:00 PM
// */

// let hoy = Date.now();
// let fecha = new Date('2023-07-08').getTime();
// console.log(fecha);
// console.log(hoy);