const signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const tipo = document.querySelector('#tipo').value
    const user = {name, email, password, tipo}
    /*window.localStorage.setItem('users', user)*/
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)
    if(isUserRegistered){
        return alert('El usuario ya esta registrado!')
    }

    Users.push(user)
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Exitoso!')
    // redirecciona al Login
    window.location.href = '../paginas/login.html'
})
