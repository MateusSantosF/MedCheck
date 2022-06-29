
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
        membersQtd.innerHTML = team.members.length
        
        

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


function ListAllTeamsByUser(){

    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    var table = document.getElementById('teamsTable');
    var teams = currentUser.teams;
    
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
        membersQtd.innerHTML = team.members.length

        var buttons = row.insertCell();
        buttons.innerHTML = "<div class='btn-group gap-2' role='group' aria-label='Basic example'> "+
       ` <button type="button" class="btn btn-primary" onclick="loadMembers()" data-bs-toggle="modal" data-bs-target="#edit-modal" >Editar</button>`+
       
        "<button type='button' class='btn btn-danger'>Excluir</button>"+
        ` <button type="button" class="btn btn-success" onclick="loadMembers2()" data-bs-toggle="modal" data-bs-target="#view-modal" >Membros</button>`+
        "</div>"
    })
    
}

function addUserInList2(){
    var ul = document.getElementById("listMembers2")
    var li = document.createElement("li")
    var div = document.createElement('div')
    const input = document.getElementById('inputEmailMember2');

    let ulChildrens = ul.childElementCount - 1;
    li.id = ulChildrens

    if(input.value.length > 5){
        div.innerHTML = `
        <div class="p-1 ps-3 d-flex flex-row justify-content-between me-2" > 
            <div class="p-1" > ${input.value}</div>
            <button type="button" class="btn btn-danger p-1" onclick="removeMember2('${ulChildrens}')">Remover</button>   
         </div> 
    `
        li.appendChild(div)
        ul.appendChild(li);
        input.value = ""
    }
}

function removeMember2(li){
    
    var ul = document.getElementById("listMembers2")

    ul.childNodes.forEach( t=> {

        if(t.id == li){
            t.remove()
            return;
        }
    } )
}

function loadMembers(){
    var lider = document.getElementById('inputManager2');
    var tag = document.getElementById('inputTag2')
    var ul = document.getElementById("listMembers2")
    var li = document.createElement("li")
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));

    lider.value = currentUser.firstName + " " + currentUser.lastName;

    var team = currentUser.teams[1];
    tag.value = team.tag;
    team.members.forEach( member =>{
     
        let ulChildrens = ul.childElementCount - 1;
        li.id = ulChildrens    
        var div = document.createElement('div')
        div.innerHTML = `
            <div class="p-1 ps-3 d-flex flex-row justify-content-between me-2" > 
                <div class="p-1" > ${member.name}</div>
                <button type="button" class="btn btn-danger p-1" onclick="removeMember2('${ulChildrens}')">Remover</button>   
             </div> 
        `
        li.appendChild(div)
        ul.appendChild(li);        
    })
}

function clearMembers(){
    var ul = document.getElementById("listMembers2")
    while (ul.firstChild) {
        ul.removeChild(ul.lastChild);
    }
}




function loadMembers2(){
    
    var table = document.getElementById("membersTable");
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    var team = currentUser.teams[0];
    
    team.members.forEach( member =>{
       
        var row = table.insertRow();
        var identifier = row.insertCell();
        identifier.innerHTML = member.identifier;

        var name = row.insertCell();
        name.innerHTML = member.name;

        var qtd = row.insertCell();
       
        qtd.innerHTML = member.patients.length;

        var buttons = row.insertCell();
        buttons.innerHTML = `
            <div class="" > 
                <button type="button" class="btn btn-primary p-1">Ver Pacientes</button> 
                <button type="button" class="btn btn-success p-1"">Definir Novo Paciente</button>     
             </div> 
        `
        table.append(row);
    })
}

function clearMembers2(){
    var table = document.getElementById("membersTable")
    var tableRows = table.getElementsByTagName('tr');
    var rowCount = tableRows.length;

    for (var x=rowCount-1; x>0; x--) {
        table.removeChild(tableRows[x]);
    }

}