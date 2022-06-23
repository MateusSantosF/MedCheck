
let database = [
    {
        firstName: "Jonas",
        lastName: "Santos",
        registration: "12345",
        password: "123",
        permission: "admin"

    },
    {
        firstName: "Joao",
        lastName: "Pedro",
        registration: "1234",
        password: "1234",
        permission: "employee"

    },

]

function validateUser(){
    
    let form = document.getElementById('formLogin');

    let matricula = document.getElementById('matricula').value
    let password = document.getElementById('password').value
 

    var currentUser;
    
    database.forEach( user => {
        
        if( user.registration == matricula && user.password == password){
            currentUser = user;
        }
    })

    if( currentUser != undefined){
        if(currentUser.permission == "admin"){
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            location.href = "/pages/home/homeAdmin.html"
        }else{
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            location.href = "/pages/home/homeUser.html"
        }
    }else{
        const alertTrigger = document.getElementById('liveAlertBtn')
        if (alertTrigger) {
            alert("Usuário ou senha inválida! Tente novamente", "danger")
        }
    }

}

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

