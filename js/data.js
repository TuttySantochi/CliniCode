let idPaciente = 0 
let idPacienteLocal = window.localStorage.getItem("idPaciente")

let idEspecialista = 0 
let idEspecialistaLocal = window.localStorage.getItem("idEspecialista")

let idTurno = 0 
let idTurnoLocal = window.localStorage.getItem("idTurno")

let Users = []

if (idPacienteLocal != null) {
    
    window.localStorage.setItem("idPaciente", idPaciente)
    window.localStorage.setItem("idEspecialista", idEspecialista)
    window.localStorage.setItem("idTurno", idTurno)

}

const getIdPaciente = (condition) =>{
    if (condition == "paciente") {
        idPaciente ++
        window.localStorage.setItem("idPaciente", idPaciente)
        return idPaciente
    } else if (condition == "especialista") {
        idEspecialista ++
        window.localStorage.setItem("idEspecialista", idEspecialista)
        return idEspecialista
    } else if (condition == "turno") {
        idTurno ++
        window.localStorage.setItem("idTurno", idTurno)
        return idTurno
    }
}

      
      
