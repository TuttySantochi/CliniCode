const user = JSON.parse(localStorage.getItem('login_success')) || false
if (!user) {
    window.location.href = './paginas/login.html'
}



if (user.tipo == 'paciente') {
    document.querySelector('.menu').innerHTML=`
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-4 navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="index.html">
                        <img src="img/820C2F9E-2657-457B-802B-7DECF5E826FB.PNG" class="img-fluid" alt="" id="logo">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <!--<a class="nav-link" disabled>Paciente</a>-->
                            <a class="nav-link" href="#article_one">¿Cómo funciona?</a>
                            <a class="nav-link" href="paginas/about_us.html">Nosotras</a>
                            <button type="button" class="btn btn-dark" id="logout">Cerrar Sesión</button>
                        </div>
                    </div>
                </div>
            </nav>`
            document.querySelector('.section_one').innerHTML+=`
            <center>
            <div class="pagina">
            <form id="formulario">
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Elegí tu especialista</label>
                    <select class="form-control" id="SelectEspecialista">
                        <option value='Elige tu especialista' selected disabled hidden>Buscalo por nombre o especialidad</option>
                        <option>Luis Navas - Full Stack</option>
                        <option>Roberto Osores - Backend</option>
                        <option>Damaris Palacios - Css</option>
                        <option>Pablo Marino - React</option>
                        <option>Manuel Ramirez - Python</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Elegí la fecha para tu consulta</label>
                    <input type="date" class="form-control" id="SelectFecha"></input>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect2">Seleccioná un horario...</label>
                    <select multiple class="form-control" id="SelectHorario">
                        <option>10:00 - 12:00</option>
                        <option>14:00 - 16:00</option>
                        <option>16:00 - 18:00</option>
                        <option>18:00 - 20:00</option>
                    </select>
                </div>
                <div class="form-group">
                <label for="exampleFormControlTextarea1">Contanos un poco sobre tu consulta...</label>
                <textarea class="form-control" id="DatosConsulta" rows="3"></textarea>
                </div>
                <button type="submit" class="btn" id="submitFormulario" onclick="guardarTurno()" [disabled]="!form.form.valid">
                    Solicitar Turno!
                </button>
            </form>

            <div class="out">
                <code>
                <p>Especialista:</p>
                <p>Fecha:</p>
                <p>Horario:</p>
                <p>Consulta:</p>
                </code>
            </div>
            </div>
            </center>`

            
            document.querySelector('.section_three').innerHTML+=`
            <article id="article_one">
                <h2 class="animate__slideInLeft">¿Cómo funciona?</h2>
                <div class="container-fluid mt-5 text-center"><!--container-->
                    <div class="row row-cols-sm-1"><!--row-->
                    <div class="col-md-4 col-lg-4" id="col_one">
                        <img src="img/una.png" alt="icono" class="icons"> <h3>Busca</h3>
                        <p class="pasos">Busca tu programador por nombre, apellido o especialidad.</p>
                    </div>
                    <div class="col-md-4 col-lg-4" id="col_two">
                        <img src="img/dos.png" alt="icono" class="icons"> <h3>Selecciona</h3>
                        <p class="pasos">Selecciona el horario que quieras el turno y que más te convenga.</p>
                    </div>
                    <div class="col-md-4 col-lg-4" id="col_three">
                        <img src="img/tres.png" alt="icono" class="icons"> <h3>Reserva</h3>
                        <p class="pasos">Reserva tu turno de manera rápida y segura. </p>
                    </div>
                    </div>
                </div>
            </article>`
            document.querySelector('#logout').addEventListener('click', ()=>{
                alert('Hasta pronto!')
                localStorage.removeItem('login_success')
                window.location.href = './paginas/login.html'
            })
}

if (user.tipo == 'especialista') {
    document.querySelector('.menu').innerHTML=`
            <nav class="navbar navbar-expand-lg bg-body-tertiary p-4 navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="index.html">
                        <img src="img/820C2F9E-2657-457B-802B-7DECF5E826FB.PNG" class="img-fluid" alt="" id="logo">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <!--<a class="nav-link" disabled>Especialista</a>-->
                            <!--<a class="nav-link" href="#article_one">¿Cómo funciona?</a>-->
                            <a class="nav-link" href="paginas/about_us.html">Nosotras</a>
                            <button type="button" class="btn btn-dark" id="logout">Cerrar Sesión</button>
                        </div>
                    </div>
                </div>
            </nav>`
            document.querySelector('.section_two').innerHTML+=`
            <center><h2 class="animate__slideInLeft">Calendario</h2></center>
            <div class="containerr">
                <div class="izq">
                    <div class="calendario">
                        <div class="mes">
                            <i class="ant"><</i>
                            <div class="fecha"></div>
                            <i class="post">></i>
                        </div>
                        <div class="semana">
                            <div>Lun</div>
                            <div>Mar</div>
                            <div>Mie</div>
                            <div>Jue</div>
                            <div>Vie</div>
                            <div>Sab</div>
                            <div>Dom</div>
                        </div>
                        <div class="dias"></div>
                        <button class="hoy-btn">Hoy</button>
                    </div>
                </div>
                <div class="der">
                    <div class="fecha-hoy">
                        <div class="evento-dia">Domingo</div>
                        <div class="evento-fecha">9 de Julio 2023</div>
                    </div>
                    <div class="eventos"></div>
                </div>
            </div>`
            document.querySelector('#logout').addEventListener('click', ()=>{
                alert('Hasta pronto!')
                localStorage.removeItem('login_success')
                window.location.href = './paginas/login.html'
            })
}

if (user.tipo == 'administrador') {
    document.querySelector('.menu').innerHTML=`
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-4 navbar-dark"><!--nav-underline-->
                <div class="container-fluid">
                    <a class="navbar-brand" href="index.html">
                        <img src="img/820C2F9E-2657-457B-802B-7DECF5E826FB.PNG" class="img-fluid" alt="" id="logo">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" disabled>Usuarios</a>
                            <a class="nav-link" href="paginas/about_us.html">Nosotras</a>
                            <button type="button" class="btn btn-dark" id="logout">Cerrar Sesión</button>
                        </div>
                    </div>
                </div>
            </nav>`
            document.querySelector('.section_one').innerHTML+=`<p>parte de especialista</p>`
            document.querySelector('#logout').addEventListener('click', ()=>{
                alert('Hasta pronto!')
                localStorage.removeItem('login_success')
                window.location.href = './paginas/login.html'
            })
}