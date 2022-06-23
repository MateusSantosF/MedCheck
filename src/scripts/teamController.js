
var users = localStorage.getItem("users")

const teams = [

    {
        manager:"Lais Barros Nogueira",
        schedule: "Noite",
        tag: "E-UTI-1",
        users: users
    },
    {
        manager:"David Buzzato",
        schedule: "Tarde",
        tag: "E-PS-1",
        users: users
    },
    {
        manager:"Breno Lis Romano",
        schedule: "Manhã",
        tag: "E-UTI-2",
        users: users
    }

]

localStorage.setItem("teams", JSON.stringify(teams));


function listAllTeams(){
    
    var table = document.getElementById('teamsTable');

    var teams = JSON.parse(localStorage.getItem("teams"))
    
    teams.forEach( team => {
        var row = table.insertRow();
        row.classList.toggle('table-light')

        var manager = row.insertCell();
        manager.innerHTML = team.manager;

        var tag = row.insertCell();
        tag.innerHTML = team.tag;

        var schedule = row.insertCell();
        schedule.innerHTML = team.schedule

        var membersQtd = row.insertCell();
        var users = JSON.parse(team.users).length
        membersQtd.innerHTML = users

        var buttons = row.insertCell();
        buttons.innerHTML = "<div class='btn-group gap-2' role='group' aria-label='Basic example'> "+
        "<button type='button' class='btn btn-primary'>Editar</button>"+
        "<button type='button' class='btn btn-danger'>Excluir</button>"+
        "</div>"
    })
}

function addUserInList(){
    var ul = document.getElementById("listMembers")
    var li = document.createElement("li")
    var div = document.createElement('div')
    const input = document.getElementById('inputEmailMember');

    let ulChildrens = ul.childElementCount - 1;
    li.id = ulChildrens

    if(input.value.length > 5){
        div.innerHTML = `
        <div class="p-1 ps-3 d-flex flex-row justify-content-between me-2" > 
            <div class="p-1" > ${input.value}</div>
            <button type="button" class="btn btn-danger p-1" onclick="removeMember('${ulChildrens}')">Remover</button>   
         </div> 
    `
        li.appendChild(div)
        ul.appendChild(li);
        input.value = ""
    }
}

function removeMember(li){
    
    var ul = document.getElementById("listMembers")

    ul.childNodes.forEach( t=> {

        if(t.id == li){
            t.remove()
            return;
        }
    } )
    

}



console.log(teams[0].users)