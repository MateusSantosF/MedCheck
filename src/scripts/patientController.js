let patients = [

    {
        identifier: "P-32445",
        firstName: "Mateus",
        lastName: "Santos",
        email: "mateusferreira.dev@gmail.com",
        cpf: "50049476866",
        birthDate: "06/02/2002",
        age: "22",
        sex: "masculino",
        phone: "11965852254",
        healthPlan: "Amil saúde",
        cardNumber: "C-56848484",
        cardValite: "08/08/2028",
        nation: "Brasil",
        cep: "08420-040",
        street: "Dr ribeiro de Andrade",
        houseNumber: "25",
        district: "Jd Helena",
        country: "SP",
        profission: "Engenheiro",
        cadastreDate: "02/05/2022",
        observation: "cara muito legal"
    },
    {
        identifier: "P-92445",
        firstName: "Lais",
        lastName: "Barros",
        email: "lbarros@gmail.com",
        cpf: "555848785455",
        birthDate: "08/02/2002",
        age: "20",
        sex: "Feminino",
        phone: "11965554854",
        healthPlan: "Sul America",
        cardNumber: "C-54585554",
        cardValite: "08/08/2030",
        nation: "Brasil",
        cep: "08420-040",
        street: "Ra Dos Andrade",
        houseNumber: "20",
        district: "Roseiras",
        country: "SP",
        profission: "Desenvolvedora",
        cadastreDate: "03/05/2022",
        observation: "ola amigos da rede globo"
    },
    {
        identifier: "P-22445",
        firstName: "Joao",
        lastName: "Pedro",
        email: "joaoP@gmail.com",
        cpf: "8755486866",
        birthDate: "10/10/2002",
        age: "30",
        sex: "masculino",
        phone: "11965852254",
        healthPlan: "Amil saúde",
        cardNumber: "C-55447745",
        cardValite: "08/08/2028",
        nation: "Brasil",
        cep: "08420-040",
        street: "Dr ribeiro de Andrade",
        houseNumber: "25",
        district: "Jd Helena",
        country: "SP",
        profission: "Engenheiro",
        cadastreDate: "02/05/2022",
        observation: "nao sei oque colocar"
    }
]

function ListAllPatients(){

    var table = document.getElementById('usersTable');


    patients.forEach( patient => {

        localStorage.setItem(patient.identifier, JSON.stringify(patient));

        var row = table.insertRow();
        row.classList.toggle('table-light')

        var register = row.insertCell();
        register.innerHTML = patient.identifier;

        var firstName = row.insertCell();
        firstName.innerHTML = patient.firstName;

        var lastName = row.insertCell();
        lastName.innerHTML = patient.lastName

        var email = row.insertCell();
        email.innerHTML = patient.email

        var age = row.insertCell();
        age.innerHTML = patient.age

        var healthPlan = row.insertCell();
        healthPlan.innerHTML = patient.healthPlan

        var cardNumber = row.insertCell();
        cardNumber.innerHTML = patient.cardNumber



        var buttons = row.insertCell();
        buttons.innerHTML = "<div class='btn-group gap-2' role='group' aria-label='Basic example'> "+
        "<button type='button' class='btn btn-primary'>Editar</button>"+
        `<button type='button' class='btn btn-success' data-bs-target="#detailsModal" data-bs-toggle='modal' onclick='showDetails("${patient.identifier}")\'"> Detalhes</button>`+
        "<button type='button' class='btn btn-danger'>Excluir</button>"+
        "</div>"

      
    })

 
}

function showDetails(identifier){

    const patient = JSON.parse(localStorage.getItem(identifier));

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

    var inputObservation = document.getElementById("inputObservation");
    

    inputIdentifier.value = patient.identifier
    inputCpf.value = patient.cpf
    inputSex.value = patient.sex
    inputHealthPlan.value = patient.healthPlan
    inputStreet.value = patient.street
    inputCountry.value = patient.country

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