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
            <center><div class="container mt-5"><div class="cover">
      
                <h1 class="search_tittle">Buscar por Especialista</h1>
                <input type="text" id="formulario" class="form-control my-2 ">
                <button class="btn btn-info mb-2" id="boton">Buscar</button>
                <ul id="resultado">
                </ul>
                <!-- Boton para ver horarios -->

            </div>

            <div class="container mt-5">
                
                <h1 class="search_tittle">Buscar por Tema</h1>
                <input type="text" id="formulario2" class="form-control my-2 ">
                <button class="btn btn-info mb-2" id="boton2">Buscar</button>
                <ul id="resultado2">
                </ul>

                <!-- Boton para ver horarios -->
                <button type="button" id="botonHorarios" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Horarios
                </button>

            </div></div></center>
            
            
            <!-- Modal horarios-->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Estos son los turnos disponibles:</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <ul class="mostrarHorario"></ul>
                    <!--<ul>
                        <li>Lunes:</li>
                        <li>Martes:</li>
                        <li>Miercoles:</li>
                        <li>Jueves:</li>
                        <li>Viernes:</li>
                        <li>Sábado:</li>
                        <li>Domingo:</li>
                    </ul>--> 
                    
                    <div class="nuevoevento-wrapper">
                        <div class="nuevoevento-header">
                        <div class="titulo">Solicitar Consulta</div>
                        <i class="cerrar">X</i>
                        </div>
                        <div class="nuevoevento-body">
                        <div class="nuevoevento-input">
                            <input type="text" placeholder="título" class="nombreevento" />
                        </div>
                        <div class="nuevoevento-input">
                            <input
                            type="text"
                            placeholder="Breve descripción"
                            class="consultaevento"
                            />
                        </div>
                        </div>
                        <div class="nuevoevento-footer">
                        <button class="nuevoevento-btn">Solicitar</button>
                        </div>
                    </div>
                    </div>
                    <button class="nuevoevento">
                    <i>+</i>
                    </button>
                    </div>

                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
                </div>
            </div>`
            document.querySelector('.section_three').innerHTML+=`
            <article id="article_one">
                <h2>¿Cómo funciona?</h2>
                <div class="container-fluid mt-5 text-center"><!--container-->
                    <div class="row row-cols-sm-1"><!--row-->
                    <div class="col-md-4 col-lg-4" id="col_one">
                        <img src="img/una.png" alt="icono" class="icons"> <h3>Busca</h3>
                        <p>Busca tu programador por nombre, apellido o especialidad.</p>
                    </div>
                    <div class="col-md-4 col-lg-4" id="col_two">
                        <img src="img/dos.png" alt="icono" class="icons"> <h3>Selecciona</h3>
                        <p>Selecciona el horario que quieras el turno y que más te convenga.</p>
                    </div>
                    <div class="col-md-4 col-lg-4" id="col_three">
                        <img src="img/tres.png" alt="icono" class="icons"> <h3>Reserva</h3>
                        <p>Reserva tu turno de manera rápida y segura. </p>
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
            <center><h2>Calendario</h2></center>
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
                            <a class="nav-link" disabled>Especialista</a>
                            <a class="nav-link" disabled>Paciente</a>
                            <a class="nav-link" href="#article_one">¿Cómo funciona?</a>
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