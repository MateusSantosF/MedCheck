
let database = [
    {
        registration: "12345",
        password: "123",
        permission: "admin"

    },
    {
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
            location.href = "/pages/home/homeAdmin.html"
        }else{
            location.href = "/pages/home/homeUser.html"
        }
    }

}