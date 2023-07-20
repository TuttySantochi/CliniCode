const d = document;
let SelectEspecialista = d.getElementById("SelectEspecialista");
let SelectFecha = d.getElementById("SelectFecha");
let SelectHorario = d.getElementById("SelectHorario");
let DatosConsulta = d.getElementById("DatosConsulta");


const campos = {
	Especialista: false,
	Fecha: false,
	Horario: false,
	DatosConsulta: false,
	
}

SelectEspecialista.addEventListener("change", e => {
	if(SelectEspecialista.value != "Elige tu especialista"){
		campos.Especialista = true;
	} else {
		campos.Especialista = false;
	}
})
SelectHorario.addEventListener("change", e => {
	if(SelectHorario.value != "Seleccioná un horario..."){
		campos.Horario = true;
	} else {
		campos.Horario = false;
	}
})
SelectFecha.addEventListener("change", e => {
	if(SelectFecha.value != "Elige la fecha para tu consulta"){
		campos.Fecha = true;
	} else {
		campos.Fecha = false;
	}
})
DatosConsulta.addEventListener("change", e => {
	if(DatosConsulta.value != ""){
		campos.DatosConsulta = true;
	} else {
		campos.DatosConsulta = false;
	}
})


const submitFormulario = d.getElementById("submitFormulario");


function guardarTurno() {

   let form = {};
		form.Especialista = SelectEspecialista.value;
		form.Fecha = SelectFecha.value;
		form.Horario = SelectHorario.value;
		form.DatosConsulta = DatosConsulta.value;

	let	out = `
	<p>Especialista: <span>${form.Especialista}</span></p>
	<p>Fecha: <span>${form.Fecha}</span></p>
	<p>Horario: <span>${form.Horario}</span></p>
	<p>Consulta: <span>${form.DatosConsulta}</span></p>
	`;

	document.querySelector(".out code").innerHTML = out;
localStorage.setItem("form" , JSON.stringify(form))
	
}





submitFormulario.addEventListener('click', (e) => {
	e.preventDefault();
	if(campos.Especialista && campos.Horario && campos.Fecha && campos.DatosConsulta){
		guardarTurno();

		formulario.reset();
        
		Swal.fire('¡Su turno ha sido registrado con éxito!')

        campos.DatosConsulta= false;
        campos.Fecha = false;
        campos.Horario = false;
        campos.Especialista = false;

       
	} else {
        Swal.fire('Asegurese de haber completado todos los campos.')
	}

});