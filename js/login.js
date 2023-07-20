const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(window.localStorage.getItem('users')) 
    const validUser = Users.find(user => user.email === email && user.password === password)
    /*console.log(validUser?'true':'false');
    if (!validUser) {
        return alert('Usuario y/o contraseña incorrectos!')
    }
    alert(`Bienvenido/a ${validUser.name}`)*/

    if (validUser != undefined) {
        localStorage.setItem('login_success', JSON.stringify(validUser))
        window.location.href = '../index.html'
    } else{
        Swal.fire(
            'Email o Contraseña incorrecta',
            '',
            'error'
          )
        /*window.location.reload()*/
    }
    
    
})