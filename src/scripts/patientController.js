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
        observation: "cara muito legal"
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
        observation: "cara muito legal"
    }
]

function ListAllPatients(){

    var table = document.getElementById('usersTable');


    patients.forEach( patient => {
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
        "<button type='button' class='btn btn-success'>Ver Detalhes</button>"+
        "</div>"

      
    })
}