



function listAllProtocols(){

  var table = document.getElementById('protocolTable');
  var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  var protocols = JSON.parse(localStorage.getItem('protocols'))

  protocols.forEach( protocol => {

      var row = table.insertRow();
      row.classList.toggle('table-light')

      var register = row.insertCell();
      register.innerHTML = protocol.identifier;

      var firstName = row.insertCell();
      firstName.innerHTML = protocol.firstName;

      var lastName = row.insertCell();
      lastName.innerHTML = protocol.lastName
      

      var age = row.insertCell();
      age.innerHTML = protocol.age


      var sex = row.insertCell();
      sex.innerHTML = protocol.sex
      
      var lastProtocolTime = row.insertCell();
      lastProtocolTime.innerHTML = protocol.lastProtocolTime

      var lastProtocolType = row.insertCell();
      lastProtocolType.innerHTML = protocol.lastProtocolType

    

      var userResponsible = row.insertCell();
      userResponsible.innerHTML = protocol.userResponsible

      var buttons = row.insertCell();
    
          buttons.innerHTML = "<div class='btn-group gap-2' role='group' aria-label='Basic example'> "+
          `<button type="button" class="btn btn-primary" data-bs-toggle="modal" 
                            data-bs-target="#protocolModal" >+Protocolo</button>`+
      
          "<button type='button' class='btn btn-success'>Detalhes</button>"+
          "</div>"
      
     
    
  })

}