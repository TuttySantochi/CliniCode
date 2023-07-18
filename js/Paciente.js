const especialistas = [
    {id:1 ,nombre: 'Luis Navas', especialidad: 'Css', horario: [{lunes: [" 10:00 " , " 12:00 " ," 16:00 " , " 18:00 " ,]} , {martes: [" 18:00 " , " 20:00 " ,]} , {miercoles: [" 10:00  " , " 12:00 "  , " 18:00 " , " 20:00 " ,]} , {jueves: [" 18:00 " , " 20:00 " ,]}, {viernes: [" 10:00 " , " 12:00"  ," 16:00 " , " 18:00" ,]} ]},
    {id:2 ,nombre: 'Damaris Palacios', especialidad: 'Html', horario: [{lunes: [" 10:30 " , " 12:30 " ,]} , {martes: [" 09:00 " , " 11:00 " , " 15:00 " , " 17:00 " ,]}, {miercoles: [" 18:30 " , " 20:30 " ,]} , {jueves: [" 09:00 " , " 11:00 " , " 18:00 " , " 20:00 " ,]}, {viernes: [" 18:00 " , " 20:00 " ,]} ]},
    {id:3 ,nombre: 'Pablo Marino', especialidad: 'JS', horario: [{lunes: [" 10:00 " , " 12:00 " ,]} , {martes: [" 10:00 " , " 12:00 " ," 15:00 " , " 17:00 " ]} , {miercoles: [" 18:00 " , " 20:00 " ,]} , {jueves: [" 10:00 " , " 12:00 "  , " 15:00 " , " 17:00 " ,]}, {viernes: [" 18:00 " ]} ]},
    {id:4 ,nombre: 'Benjamin Cappeta', especialidad: 'React', horario: [{lunes: [" 18:00 " , " 20:00 " ,]} , {martes: [" 17:30 " , " 19:30 " ,]} , {miercoles: [" 18:00 " , " 20:00 " ,]} , {jueves: [" 17:30 " , " 19:30 " ,]}, {viernes: [" 18:00 " , " 20:00 " ,]} ]},
    {id:5 ,nombre: 'Elon Musk', especialidad: 'Base de Datos', horario: [{lunes: [" 09:00 " , " 11:00 " , " 13:00 " ]} , {martes: [" 09:00 " , " 11:00 " , " 13:00 " ]} , {miercoles: [" 09:00 " , " 11:00 " , " 13:00 "  ," 18:00 " , " 20:00 " ,]} , {jueves: [" 18:00 " , " 20:00 " ,]}, {viernes: [" 09:00 " , " 11:00 " , " 13:00 " , " 18:00 " , " 20:00 " ,]}]},
    {id:6 ,nombre: 'Mark Zuckerberg', especialidad: 'Python', horario: [{lunes: [" 10:00 " , " 12:00 " , " 16:00 " , " 18:00 " ]} , {martes: [" 10:00 " , " 12:00 " ,]} , {miercoles: [" 10:00 " , " 12:00 " , " 18:00 " , " 20:00 " ,]} , {jueves: [" 19:00 " , " 21:00 " ,]}, {viernes: [" 10:00 " , " 12:00 "  , " 18:00 " , " 20:00 " ,]}]},
    {id:7 ,nombre: 'Pepe Luis', especialidad: 'C++', horario: [{lunes: [" 10:00 " , " 12:00 " ," 15:00 " , " 17:00 " ]} , {martes: [" 10:00 " , " 12:00 " ,]} , {miercoles: [" 10:00 " , " 12:00 " , " 15:00 " , " 17:00 " ,]} , {jueves: [" 10:00 " , " 12:00 "]}, {viernes: [" 10:00 ", " 12:00 ", " 15:00 ", " 17:00 ",]}]}
]
const mostrarHorarios =(id)=>{
    let horarios = especialistas.filter((es)=>es.id == id)
    let [usuario] = horarios
    let dias = [null, null, null, null, null]

    for (let index = 0; index < usuario.horario.length; index++) {
        if(usuario.horario [index].lunes != undefined){
            dias[0] = usuario.horario [index].lunes
        }else if(usuario.horario [index].martes != undefined){
            dias[1] = usuario.horario [index].martes
        }else if(usuario.horario [index].miercoles != undefined){
            dias[2] = usuario.horario [index].miercoles
        }else if(usuario.horario [index].jueves != undefined){
            dias[3] = usuario.horario [index].jueves
        }else if(usuario.horario [index].viernes != undefined){
            dias[4] = usuario.horario [index].viernes
        }
    }
const listaHorarios = document.querySelector('#listaHorarios');   
for (let i = 0; i < dias.length; i++) {
    
    if (dias[i] != null ) {
        if (i==0) {
            listaHorarios.innerHTML+=`   `
            listaHorarios.innerHTML+=`
            <li> Lunes: ${dias[i]}</li>
            `
        } else if (i==1) {
            listaHorarios.innerHTML+=`
            <li> Martes: ${dias[i]}</li>
            `
        } else if (i==2) {
            listaHorarios.innerHTML+=`
            <li> Miercoles: ${dias[i]}</li>
            `
        } else if (i==3) {
            listaHorarios.innerHTML+=`
            <li> Jueves: ${dias[i]}</li>
            `
        } else if (i==4) {
            listaHorarios.innerHTML+=`
            <li> Viernes: ${dias[i]}</li>
            `
        } 
    }else{
        listaHorarios.innerHTML+=`
        <li> No hay horarios disponibles en este momento...</li>
        `
    }
    
}

} 




const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');
//filtrar por especialista
const filtrar = ()=>{

    resultado.innerHTML = ''

    const texto = formulario.value.toLowerCase();

    for(let esp of especialistas){
        let nombre = esp.nombre.toLowerCase();

        if(nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `
            <li>${esp.nombre} - Especialidad: ${esp.especialidad} <button onclick="mostrarHorarios(${esp.id})" type="button" id="botonHorarios" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Horarios
            </button> </li>
            `
        }

    }

    if(resultado.innerHTML === ''){
        resultado.innerHTML += `
             <li>No se encontraron coincidencias... </li>
            `

    }
}

boton.addEventListener('click', filtrar)
formulario.addEventListener('keyup', filtrar)

filtrar();

//filtrar por especialidad

const formulario2 = document.querySelector('#formulario2');
const boton2 = document.querySelector('#boton2');
const resultado2 = document.querySelector('#resultado2');

const filtrar2 = ()=>{

    resultado2.innerHTML = ''

    const texto = formulario2.value.toLowerCase();

    for(let esp of especialistas){
        let especialidad = esp.especialidad.toLowerCase();

        if(especialidad.indexOf(texto) !== -1){
            resultado2.innerHTML += `
            <li>${esp.especialidad} - Especialista: ${esp.nombre} <button type="button" id="botonHorarios" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Horarios
            </button></li>
            `
        }

    }

    if(resultado2.innerHTML === ''){
        resultado2.innerHTML += `
             <li>No se encontraron coincidencias... </li>
            `

    }
}

boton2.addEventListener('click', filtrar2)
formulario2.addEventListener('keyup', filtrar2)

filtrar2();

//Boton para solicitar consulta
const nuevoEventoBoton = document.querySelector(".nuevoevento"),
 nuevoEventoContainer = document.querySelector(".nuevoevento-wrapper"),
 cerrarEventoBoton = document.querySelector(".cerrar");


nuevoEventoBoton.addEventListener("click", () => {
    nuevoEventoContainer.classList.toggle("active");
});
cerrarEventoBoton.addEventListener("click", () => {
    nuevoEventoContainer.classList.remove("active");
});
document.addEventListener("click", (e) => {
    if (e.target !== nuevoEventoBoton && !nuevoEventoContainer.contains(e.target)) {
      nuevoEventoContainer.classList.remove("active");
    }
  });

