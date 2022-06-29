
function ListAllPatients(){

    var table = document.getElementById('usersTable');
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var patients = JSON.parse(localStorage.getItem('patients'))

    patients.forEach( patient => {

        var row = table.insertRow();
        row.classList.toggle('table-light')

        var register = row.insertCell();
        register.innerHTML = patient.identifier;

        var firstName = row.insertCell();
        firstName.innerHTML = patient.firstName;

        var lastName = row.insertCell();
        lastName.innerHTML = patient.lastName

        var age = row.insertCell();
        age.innerHTML = patient.age

        if(currentUser.permission == "employee"){
            var sex = row.insertCell();
            sex.innerHTML = patient.sex
        }

        if(currentUser.permission == "employee"){
            var profission = row.insertCell();
            profission.innerHTML = patient.profission
        }
     

        if(currentUser.permission == "employee"){
            var enterData = row.insertCell();
            enterData.innerHTML = patient.cadastreDate
        }

        if(currentUser.permission == "employee"){
            var sector = row.insertCell();
            sector.innerHTML = patient.sector
        }

        if(currentUser.permission == "admin"){
            var healthPlan = row.insertCell();
            healthPlan.innerHTML = patient.healthPlan
        }

        if(currentUser.permission == "admin"){
            var cardNumber = row.insertCell();
            cardNumber.innerHTML = patient.cardNumber
        }
       

        var buttons = row.insertCell();
        if(currentUser.permission == "admin"){
            buttons.innerHTML = "<div class='btn-group gap-2' role='group' aria-label='Basic example'> "+
            "<button type='button' class='btn btn-primary'>Editar</button>"+
            `<button type='button' class='btn btn-success' data-bs-target="#detailsModal" data-bs-toggle='modal' onclick='showDetails("${patient.identifier}")\'"> Detalhes</button>`+
            "<button type='button' class='btn btn-danger'>Excluir</button>"+
            "</div>"
        }else{
            buttons.innerHTML = "<div class='btn-group gap-2' role='group' aria-label='Basic example'> "+
            "<button type='button' class='btn btn-primary'>Editar</button>"+
            `<button type='button' class='btn btn-success' data-bs-target="#detailsModal" data-bs-toggle='modal' onclick='showDetails("${patient.identifier}")\'"> Detalhes</button>`+
            "</div>"
        }
       
      
    })

}

function showDetails(identifier){

    const patients = JSON.parse(localStorage.getItem('patients'));
    const patient = patients.find( p => p.identifier == identifier)

    var inputIdentifier = document.getElementById("inputIdentifier");
    var inputCpf = document.getElementById("inputCpf");
    var inputSex = document.getElementById("inputSex");
    var inputHealthPlan = document.getElementById("inputHealthPlan");
    var inputStreet = document.getElementById("inputStreet");
    var inputCountry = document.getElementById("inputCountry");

    var inputFullname = document.getElementById("inputFullname");
    var inputBirthdate = document.getElementById("inputBirthdate");
    var inputCardNumber = document.getElementById("inputCardNumber");
    var inputPhone = document.getElementById("inputPhone");
    var inputHouseNumber = document.getElementById("inputHouseNumber");
    var inputProfission = document.getElementById("inputProfission");    
    
    var inputEmail = document.getElementById("inputEmail");
    var inputAge = document.getElementById("inputAge");
    var inputNation = document.getElementById("inputNation");
    var inputCEP = document.getElementById("inputCEP");
    var inputDIstrict = document.getElementById("inputDIstrict");
    var inputCadastreDate = document.getElementById("inputCadastreDate");
    var inputSector = document.getElementById("inputSector");

    var inputObservation = document.getElementById("inputObservation");
    

    inputIdentifier.value = patient.identifier
    inputCpf.value = patient.cpf
    inputSex.value = patient.sex
    inputHealthPlan.value = patient.healthPlan
    inputStreet.value = patient.street
    inputCountry.value = patient.country
    inputSector.value = patient.sector

    inputFullname.value = patient.firstName +" "+patient.lastName 
    inputBirthdate.value = patient.birthDate
    inputPhone.value = patient.phone
    inputHouseNumber.value = patient.houseNumber
    inputProfission.value = patient.profission
    inputCardNumber.value = patient.cardNumber


    inputEmail.value = patient.email
    inputAge.value = patient.age
    inputNation.value = patient.nation
    inputCEP.value = patient.cep
    inputDIstrict.value = patient.district

    inputCadastreDate.value = patient.cadastreDate

    inputObservation.value =  patient.observation


}



