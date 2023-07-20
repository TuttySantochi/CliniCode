const user = JSON.parse(localStorage.getItem('login_success')) || false
if (!user) {
    window.location.href = '../paginas/login.html'
}



if (user.tipo == 'paciente') {
    document.querySelector('.menu').innerHTML=`
            <nav class="navbar navbar-expand-lg bg-body-tertiary p-4 navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="../index.html">
                        <img src="../img/820C2F9E-2657-457B-802B-7DECF5E826FB.PNG" class="img-fluid" alt="" id="logo">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="../index.html">Inicio</a>
                            <!--<a class="nav-link" aria-current="page" href="#">Paciente</a>
                            <a class="nav-link" href="#article_one">¿Cómo funciona?</a>-->
                            <button type="button" class="btn btn-dark" id="logout">Cerrar Sesión</button>
                        </div>
                    </div>
                </div>
            </nav>`
            document.querySelector('.section_one').innerHTML+=`<!--<p>parte de paciente</p>-->`
            document.querySelector('#logout').addEventListener('click', ()=>{
                alert('Hasta pronto!')
                localStorage.removeItem('login_success')
                window.location.href = '../paginas/login.html'
            })
}

if (user.tipo == 'especialista') {
    document.querySelector('.menu').innerHTML=`
            <nav class="navbar navbar-expand-lg bg-body-tertiary p-4 navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="../index.html">
                        <img src="../img/820C2F9E-2657-457B-802B-7DECF5E826FB.PNG" class="img-fluid" alt="" id="logo">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="../index.html">Inicio</a>
                            <!--<a class="nav-link" aria-current="page" href="#">Especialista</a>
                            <a class="nav-link" href="#article_one">¿Cómo funciona?</a>-->
                            <button type="button" class="btn btn-dark" id="logout">Cerrar Sesión</button>
                        </div>
                    </div>
                </div>
            </nav>`
            document.querySelector('.section_one').innerHTML+=`<!--<p>parte de especialista</p>-->`
            document.querySelector('#logout').addEventListener('click', ()=>{
                alert('Hasta pronto!')
                localStorage.removeItem('login_success')
                window.location.href = '../paginas/login.html'
            })
}

if (user.tipo == 'administrador') {
    document.querySelector('.menu').innerHTML=`
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-4 navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="../index.html">
                        <img src="../img/820C2F9E-2657-457B-802B-7DECF5E826FB.PNG" class="img-fluid" alt="" id="logo">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="../index.html">Inicio</a>
                            <a class="nav-link" aria-current="page" href="#">Especialista</a>
                            <a class="nav-link" aria-current="page" href="#">Paciente</a>
                            <a class="nav-link" href="#article_one">¿Cómo funciona?</a>
                            <button type="button" class="btn btn-dark" id="logout">Cerrar Sesión</button>
                        </div>
                    </div>
                </div>
            </nav>`
            document.querySelector('.section_one').innerHTML+=`<p>parte de especialista</p>`
            document.querySelector('#logout').addEventListener('click', ()=>{
                alert('Hasta pronto!')
                localStorage.removeItem('login_success')
                window.location.href = '../paginas/login.html'
            })
}