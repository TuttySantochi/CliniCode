const signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const especialidad = document.querySelector('#especialidad').value
    const tipo = document.querySelector('#tipo').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)
    if(isUserRegistered){
        return alert('El usuario ya esta registrado!')
    }

    Users.push({name: name, email: email, password: password, especialidad: especialidad, tipo: tipo})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Exitoso!')
    // redirecciona al Login
    window.location.href = '../paginas/login_especialista.html'
})
