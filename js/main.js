//DECLARACION DE CLASES

class Paciente {
    constructor (apellido, nombre, edad, sexo){
        this.apellido = apellido,
        this.nombre = nombre,
        this.edad = edad,
        this.sexo = sexo
    }
}

class Turno {
    constructor(especialidad, fecha, hora, Paciente){
        this.especialidad = especialidad,
        this.fecha = fecha,
        this.hora = hora,
        this.Paciente = Paciente,
        this.atendido = false,
        this.cancelado = false
    }

    marcarAtendido(){
        this.atendido = true;
    }

    cancelarTurno(){
        this.cancelado = true;
    }
}

//DECLARACION DE FUNCIONES

//Elimina espacios en blanco, coloca la primer letra del string en mayuscula y el resto en minuscula
function capitalizar(str) {
    let texto = str.trim();
    texto = texto.charAt(0).toUpperCase() + (texto.slice(1)).toLowerCase();
    return texto;
}

//Elimina espacios en blanco y convierte el texto a minuscula 
function formatear(str){
    let texto = str.trim();
    texto = texto.toLowerCase();
    return texto;
}

//Envía un mensaje al usuario y devuelve true cuando el usuario apreta el boton Cancelar del prompt 
// Desde la función que llama a cancelar() un IF ejecuta el return para salir del sistema si la misma devuelve true
function promptCancelado(input){
    if(input === null){
        alert("Saliendo del sistema");
        return true;
    }    
}

//Da de alta pacientes en el sistema
function altaPaciente(){
    let apellido = prompt("Ingrese su apellido.");
    if(promptCancelado(apellido)){
        return;
    }
    while(apellido == ""){
        apellido = prompt("Su apellido es un dato necesario para el registro. Por favor, ingrese su apellido.");
    }
    apellido = capitalizar(apellido);
    console.log(apellido);
    console.log(apellido.length);

    let nombre = prompt("Ingrese su nombre.");
    if (promptCancelado(nombre)){
        return;
    }
    while(nombre == ""){
        nombre = prompt("Su nombre es un dato necesario para el registro. Por favor, ingrese su nombre.");
    }
    nombre = capitalizar(nombre);
    console.log(nombre);
    console.log(nombre.length);

    let edad = prompt("Ingrese su edad.");
    if (promptCancelado(edad)){
        return;
    }
    while(edad == ""){
        edad = prompt("Su edad es un dato necesario para el registro. Por favor, ingrese su edad.");
    }
    while(isNaN(edad) || edad == ""){
        edad = prompt("Debe ingresar un valor y el mismo debe ser un numero");            
    }
    console.log(edad);

    let sexo = prompt("Ingrese M, F o X para el sexo");
    if (promptCancelado(sexo)){
        return;
    }
    while(sexo == ""){
        sexo = prompt("Su sexo es un dato necesario para el registro.");
    }
    sexo = formatear(sexo);
    while(sexo != "m" && sexo !="f" && sexo != "x"){
        sexo = prompt("Debe ingresar una opción valida. Ingrese M, F o X");
        if (promptCancelado(sexo)){
            return;
        }
        else{
            sexo = formatear(sexo);
        }
    }
    console.log(sexo);
    console.log(sexo.length);
    
    const PACIENTE = new Paciente(apellido, nombre, edad, sexo);
    return PACIENTE;
}

function altaTurno(PACIENTE){
    let especialidad = prompt("Ingrese el nombre de la especialidad");
    let fecha = prompt("Ingrese la fecha del turno con formato DD/MM/AAAA");
    let hora = prompt("Ingrese la hora del turno con formato HHMM");

    const TURNO = new Turno(especialidad, fecha, hora, PACIENTE);
    return TURNO;
}

//COMIENZO DE EJECUCION

alert("Bienvenido/a al sistema de turnos online. Vamos a registrarte");

const NUEVO_PACIENTE = altaPaciente();

console.log(NUEVO_PACIENTE);

alert("Se ha registrado el alta del paciente " + NUEVO_PACIENTE.apellido + " " + NUEVO_PACIENTE.nombre);

let continuar = prompt("Ingrese si para solicitar un turno o presione Cancelar para salir del sistema");

if (continuar === "si"){
    let turno = altaTurno(NUEVO_PACIENTE);
    console.log(turno);
    alert("Se ha registrado el turno para " + turno.especialidad + " para el día " + turno.fecha + " a las " + turno.hora);
}
else{
    alert("Gracias por registrarse. Saliendo del sistema");
}








let myRE = new RegExp('[0-9]{1,2}/[0-9]{1,2}/[0-9]{3,4}');
console.log(myRE.test("23/12/2024"));
