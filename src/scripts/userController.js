

let users = [

    {
        register: "U-12345",
        firstName: "Mateus",
        lastName: "Santos",
        email: "mateusferreira.dev@gmail.com",
        rotation: "diurno",
        team: "Equipe X"
    },
    {
        register: "U-23423",
        firstName: "Joazinho",
        lastName: "Pereira",
        email: "jaozinho.dev@gmail.com",
        rotation: "diurno",
        team: "Equipe Y"
    },
    {
        register: "U-12565",
        firstName: "Jonas",
        lastName: "Ferreira",
        email: "jonas.dev@gmail.com",
        rotation: "diurno",
        team: "Equipe Y"
    },{
        register: "U-12345",
        firstName: "Mateus",
        lastName: "Santos",
        email: "mateusferreira.dev@gmail.com",
        rotation: "diurno",
        team: "Equipe X"
    }
]

function ListAllUsers(){

    var table = document.getElementById('usersTable');


    users.forEach( user => {
        var row = table.insertRow();
        row.classList.toggle('table-light')

        var register = row.insertCell();
        register.innerHTML = user.register;

        var firstName = row.insertCell();
        firstName.innerHTML = user.firstName;

        var lastName = row.insertCell();
        lastName.innerHTML = user.lastName

        var email = row.insertCell();
        email.innerHTML = user.email

        var turno = row.insertCell();
        turno.innerHTML = user.rotation

        var team = row.insertCell();
        team.innerHTML = user.team

        var buttons = row.insertCell();
        buttons.innerHTML = "<div class='btn-group gap-2' role='group' aria-label='Basic example'> "+
        "<button type='button' class='btn btn-primary'>Editar</button>"+
        "<button type='button' class='btn btn-danger'>Excluir</button>"+
        "</div>"

      
    })


}