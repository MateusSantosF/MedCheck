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
        sector: "UTI",
        profission: "Engenheiro",
        cadastreDate: "02/05/2022",
        observation: "cara muito legal"
    },
    {
        identifier: "P-92445",
        firstName: "Joana",
        lastName: "Souza",
        email: "lbarros@gmail.com",
        cpf: "555848785455",
        birthDate: "08/02/2002",
        age: "0",
        sex: "Feminino",
        phone: "11965554854",
        healthPlan: "Sul America",
        cardNumber: "C-54585554",
        cardValite: "08/08/2030",
        nation: "Brasil",
        cep: "08420-040",
        street: "Ra Dos Andrade",
        houseNumber: "20",
        sector: "UTI NEO",
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
        sector: "PS",
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
const protocols = [

    {
        identifier: "P-32445",
        firstName: "Mateus",
        lastName: "Santos",
        age: "22",
        sex: "masculino",
        sector: "UTI",
        lastProtocolTime: "20:00h",
        lastProtocolType: "Fluxo",
        userResponsible: "Vitor Fazolli"
    },
    {
        identifier: "P-32445",
        firstName: "Carlos",
        lastName: "Pereira",
        age: "52",
        sex: "masculino",
        sector: "UTI",
        lastProtocolTime: "19:00h",
        lastProtocolType: "Fluxo",
        userResponsible: "Gabriel Alves"
    },
    {
        identifier: "P-32445",
        firstName: "Jose",
        lastName: "Gomes",
        age: "49",
        sex: "masculino",
        sector: "UTI",
        lastProtocolTime: "21:00h",
        lastProtocolType: "Óbito",
        userResponsible: "Gabriel Alves"
    },
    {
        identifier: "P-32445",
        firstName: "Joana",
        lastName: "Pereira",
        age: "0",
        sex: "Feminino",
        sector: "UTI",
        lastProtocolTime: "19:43h",
        lastProtocolType: "Fluxo",
        userResponsible: "Vitor Fazolli"
    }
]

const users = [

    {
        register: "U-1111",
        firstName: "Mateus",
        lastName: "Santos",
        email: "mateusferreira.dev@gmail.com",
        github: "https://github.com/MateusSantosF.png",
        rotation: "noite",
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
        rotation: "tarde",
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
        rotation: "manhã",
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
        rotation: "manhã",
        team: "Equipe X",
        password: "1234",
        permission: "employee",
        firstAcess: true
    },
    {
        register: "U-5555",
        firstName: "Everaldo",
        lastName: "Gomes",
        email: "everaldo@gmail.com",
        github: "https://github.com/alvesmgabriel.png",
        rotation: "tarde",
        team: "Equipe K",
        password: "1234",
        permission: "chief",
        firstAcess: true,
        teams: [
            {
                manager:"Everaldo Gomes",
                schedule: "Manhã",
                tag: "E-PS-1",
                members:[
                    {
                        identifier: "U-12333",
                        name:"Mateus Santos",
                        patients:[
                            {},
                            {},
                            {},
                            {},
                        ]
                    },
                    {
                        identifier: "U-77777",
                        name:"Rosa Maria",
                        patients:[
                            {},
                            {},
                            {},
                            {},
                        ]
                    },
                    {
                        identifier: "U-99933",
                        name:"Claudia Santos",
                        patients:[
                            {},
                            {},
                            {},
                            {},
                        ]
                    },
                    {
                        identifier: "U-12322",
                        name:"Célia Santos",
                        patients:[
                            {},
                            {},
                            {},
                            {},
                        ]
                    },
                    {
                        identifier: "U-323232",
                        name:"Leticia Santos",
                        patients:[
                            {},
                            {},
                            {},
                            {},
                        ]
                    }
                ]
            },
            {
                manager:"Everaldo Gomes",
                schedule: "Tarde",
                tag: "UTI-1",
                members:[
                    {
                        identifier: "U-12333",
                        name:"Mateus Santos",
                        patients:[
                            {},
                            {},
                            {},
                            {},
                        ]
                    },
                    {
                        identifier: "U-77777",
                        name:"Rosa Maria",
                        patients:[
                            {},
                            {},
                            {},
                            {},
                        ]
                    },
                    {
                        identifier: "U-99933",
                        name:"Claudia Santos",
                        patients:[
                            {},
                            {},
                            {},
                            {},
                        ]
                    },
                    {
                        identifier: "U-12322",
                        name:"Célia Santos",
                        patients:[
                            {},
                            {},
                            {},
                            {},
                        ]
                    },
                    {
                        identifier: "U-323232",
                        name:"Leticia Santos",
                        patients:[
                            {},
                            {},
                            {},
                            {},
                        ]
                    }
                ]
                
            },
            {
                manager:"Everaldo Gomes",
                schedule: "Noturno",
                tag: "NEO-1",
                members:[
                    {
                        identifier: "U-12333",
                        name:"Mateus Santos",
                    },
                    {
                        identifier: "U-77777",
                        name:"Rosa Maria",
                    },
                    {
                        identifier: "U-99933",
                        name:"Claudia Santos",
                    },
                    {
                        identifier: "U-12322",
                        name:"Célia Santos",
                    },
                    {
                        identifier: "U-323232",
                        name:"Leticia Santos",
                    }
                ]
            }
        ]
    },
    {
        register: "U-6666",
        firstName: "Breno",
        lastName: "Romano",
        email: "breno.romano@gmail.com",
        github: "https://github.com/blromano.png",
        rotation: "integral",
        team: "Equipe Z",
        password: "1234",
        permission: "chief",
        firstAcess: true,
        teams: [
            {
                manager:"Breno Romano",
                schedule: "Manhã",
                tag: "E-PS-1",
                members:[
                    {
                        identifier: "U-23243",
                        name:"Mateus Santos",
                        patients:[
                            {},
                            {},
                            {},
                            {},
                        ]
                    },
                    {
                        identifier: "U-34343",
                        name:"Rosa Maria",
                        patients:[
                            {},
                            {},
                            {},
                            {},
                        ]
                    },
                    {
                        identifier: "U-34455",
                        name:"Claudia Santos",
                        patients:[
                            {},
                            {},
                            {},
                            {},
                        ]
                    },
                    {
                        identifier: "U-23232",
                        name:"Célia Santos",
                        patients:[
                            {},
                            {},
                            {},
                            {},
                        ]
                    },
                    {
                        identifier: "U-22222",
                        name:"Leticia Santos",
                        patients:[
                            {},
                            {},
                            {},
                            {},
                        ]
                    }
                ]
            },
            {
                manager:"Breno Romanoo",
                schedule: "Tarde",
                tag: "UTI-1",
                members:[
                    {
                        identifier: "U-12333",
                        name:"Mateus Santos",
                        patients:[
                            {},
                            {},
                            {},
                            {},
                        ]
                    },
                    {
                        identifier: "U-77777",
                        name:"Rosa Maria",
                        patients:[
                            {},
                            {},
                            {},
                            {},
                        ]
                    },
                    {
                        identifier: "U-99933",
                        name:"Claudia Santos",
                        patients:[
                            {},
                            {},
                            {},
                            {},
                        ]
                    },
                    {
                        identifier: "U-12322",
                        name:"Célia Santos",
                        patients:[
                            {},
                            {},
                            {},
                            {},
                        ]
                    },
                    {
                        identifier: "U-323232",
                        name:"Leticia Santos",
                        patients:[
                            {},
                            {},
                            {},
                            {},
                        ]
                    }
                ]
            },
            {
                manager:"Breno Romanoo",
                schedule: "Noturno",
                tag: "NEO-1",
                members:[
                    {
                        identifier: "U-12333",
                        name:"Mateus Santos",
                    },
                    {
                        identifier: "U-77777",
                        name:"Rosa Maria",
                    },
                    {
                        identifier: "U-99933",
                        name:"Claudia Santos",
                    },
                    {
                        identifier: "U-12322",
                        name:"Célia Santos",
                    },
                    {
                        identifier: "U-323232",
                        name:"Leticia Santos",
                    }
                ]
            }
        ]
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
    },
    {
        manager:"Breno Lis Romano",
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
            ,
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
        manager:"Breno lis Romano",
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
            ,
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

if(firstLoad == null){
    localStorage.setItem("firstLoad", true)
    firstLoad = true
}


if (firstLoad == "true"){
    localStorage.setItem("patients", JSON.stringify(patients))
    localStorage.setItem("users", JSON.stringify(users))
    localStorage.setItem("teams", JSON.stringify(teams));
    localStorage.setItem("drugs", JSON.stringify(drugs));
    localStorage.setItem("protocols", JSON.stringify(protocols));
    localStorage.setItem('firstLoad', false)
}
