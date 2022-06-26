const patients = [

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

const users = [

    {
        register: "U-1111",
        firstName: "Mateus",
        lastName: "Santos",
        email: "mateusferreira.dev@gmail.com",
        github: "https://github.com/MateusSantosF.png",
        rotation: "diurno",
        team: "Equipe X",
        password: "123",
        permission: "admin",
        firstAcess: true
    },
    {
        register: "U-2222",
        firstName: "Vitor",
        lastName: "Fazolli",
        email: "jaozinho.dev@gmail.com",
        github: "https://github.com/Vitor-Fazoli.png",
        rotation: "diurno",
        team: "Equipe Y",
        password: "1234",
        permission: "employee",
        firstAcess: true
    },
    {
        register: "U-3333",
        firstName: "David",
        lastName: "Buzatto",
        email: "jonas.dev@gmail.com",
        github:"https://github.com/davidbuzatto.png",
        rotation: "diurno",
        team: "Equipe Y",
        password: "1234",
        permission: "admin",
        firstAcess: true
    },
    {
        register: "U-4444",
        firstName: "Gabriel",
        lastName: "Alves",
        email: "mateusferreira.dev@gmail.com",
        github: "https://github.com/alvesmgabriel.png",
        rotation: "diurno",
        team: "Equipe X",
        password: "1234",
        permission: "employee",
        firstAcess: true
    }
]

const teams = [

    {
        manager:"Lais Barros Nogueira",
        schedule: "Noite",
        tag: "E-UTI-1",
        members: [
            {
                teste:"teste"
            },
            {
                teste:"teste"
            },
            {
                teste:"teste"
            },
            {
                teste:"teste"
            },{
                teste:"teste"
            },
            {
                teste:"teste"
            },{
                teste:"teste"
            },
            {
                teste:"teste"
            }

        ]
    },
    {
        manager:"David Buzzato",
        schedule: "Tarde",
        tag: "E-PS-1",
        members: [
            {
                teste:"teste"
            },
            {
                teste:"teste"
            },
            ,{
                teste:"teste"
            },
            {
                teste:"teste"
            }
            ,{
                teste:"teste"
            },
            {
                teste:"teste"
            }
        ]
    },
    {
        manager:"Breno Lis Romano",
        schedule: "Manhã",
        tag: "E-UTI-2",
        members:[
            {
                teste:"teste"
            },
            {
                teste:"teste"
            },
            {
                teste:"teste"
            },
            {
                teste:"teste"
            },
            {
                teste:"teste"
            }
        ]
    },
    {
        manager:"Everaldo",
        schedule: "Manhã",
        tag: "E-NEO-1",
        members:[
            {
                teste:"teste"
            },
            {
                teste:"teste"
            },
            {
                teste:"teste"
            },
            {
                teste:"teste"
            },
            {
                teste:"teste"
            },
            {
                teste:"teste"
            }
        ]
    }

]

const drugs = [

    {
        identifier: "M-23445",
        name:"Dipirona",
        manufacturer: "Medley",
        dosage: "1 mg",
        generic: "Não",
        lastPurchase: "01/06/2022",
        amount: "200"
    },
    {
        identifier: "M-34415",
        name:"Azitromicina",
        manufacturer: "Neoquimica",
        dosage: "400 mg",
        generic: "Sim",
        lastPurchase: "15/06/2022",
        amount: "100"
    },
    {
        identifier: "M-34239",
        name:"Apovomin",
        manufacturer: "Dechra",
        dosage: "3 mg/ml",
        generic: "Não",
        lastPurchase: "03/06/2022",
        amount: "40"
    },
    {
        identifier: "M-55742",
        name:"Spedra",
        manufacturer: "Avanafil",
        dosage: "200 mg",
        generic: "Não",
        lastPurchase: "03/06/2022",
        amount: "34"
    },
    {
        identifier: "M-37425",
        name:"Vidaza",
        manufacturer: "Erkim",
        dosage: "100 mg",
        generic: "Não",
        lastPurchase: "06/06/2022",
        amount: "50"
    },
    

]

var firstLoad = localStorage.getItem('firstLoad');
console.log(firstLoad)
if(firstLoad == null){
    localStorage.setItem("firstLoad", true)
    firstLoad = true
}


if (firstLoad == "true"){
    localStorage.setItem("patients", JSON.stringify(patients))
    localStorage.setItem("users", JSON.stringify(users))
    localStorage.setItem("teams", JSON.stringify(teams));
    localStorage.setItem("drugs", JSON.stringify(drugs));
    localStorage.setItem('firstLoad', false)
}
