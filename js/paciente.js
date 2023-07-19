const d = document;
const SelectEspecialista = d.getElementById("SelectEspecialista");
const SelectFecha = d.getElementById("SelectFecha");
const SelectHorario = d.getElementById("SelectHorario");
const DatosConsulta = d.getElementById("DatosConsulta");


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


let form = {};
  form.Especialista = SelectEspecialista.value;
  form.Fecha = SelectFecha.value;
  form.Horario = SelectHorario.value;
  form.DatosConsulta = DatosConsulta.value;

const submitFormulario = d.getElementById("submitFormulario");


guardarTurno(form);


function guardarTurno(form) {
    let f = JSON.stringify(form);
    localStorage.setItem('form', f);
}

submitFormulario.addEventListener('click', (e) => {
	e.preventDefault();
	
	if(campos.Especialista && campos.Horario && campos.Fecha && campos.DatosConsulta){
		formulario.reset();
        Swal.fire('¡Su turno ha sido registrado con éxito!')

        campos.DatosConsulta= false;
        campos.Fecha = false;
        campos.Horario = false;
        campos.Especialista = false;

        console.log('f');


        console.log("hola");

	} else {
        Swal.fire('Asegurese de haber completado todos los campos.')
        console.log("chau");
	}

});