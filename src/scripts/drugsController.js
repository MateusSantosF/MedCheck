function ListAllDrugs(){

    var table = document.getElementById('drugsTable');
    
    var drugs = JSON.parse(localStorage.getItem('drugs'))

    drugs.forEach( drug => {

        var row = table.insertRow();
        row.classList.toggle('table-light')

        var identifier = row.insertCell();
        identifier.innerHTML = drug.identifier;

        var name = row.insertCell();
        name.innerHTML = drug.name;


        var manufacturer = row.insertCell();
        manufacturer.innerHTML = drug.manufacturer

        var dosage = row.insertCell();
        dosage.innerHTML = drug.dosage

        var generic = row.insertCell();
        generic.innerHTML = drug.generic

        var lastPurchase = row.insertCell();
        lastPurchase.innerHTML = drug.lastPurchase

        var amount = row.insertCell();
        amount.innerHTML = drug.amount

      

        var buttons = row.insertCell();
        buttons.innerHTML = "<div class='btn-group gap-2' role='group' aria-label='Basic example'> "+
        "<button type='button' class='btn btn-primary'>Editar</button>"+
        "<button type='button' class='btn btn-danger'>Excluir</button>"+
        "</div>"
      
    })

}