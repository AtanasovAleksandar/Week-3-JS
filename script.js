var Name = '';
var Address = '';
var City = '';
var Country = '';
var PinCode = '';

var counter = 1;

var Users = [];
var user = { 'id': counter, 'name': '', 'address': '', 'city': '', 'pincod': '', 'country': '' }



function validationOnInput() {
    var getName = document.getElementById('inputName')
    var getAddress = document.getElementById('inputAddress')
    var getCity = document.getElementById('inputCity')
    var getCountry = document.getElementById('inputCountry')
    var getPinCode = document.getElementById('inputPinCode')

    if (document.getElementById('inputName').value == '') {
        getName.classList.add("not-valid");
    } else {
        getName.classList.remove("not-valid");
        user.name = document.getElementById('inputName').value;
    }

    if (document.getElementById('inputAddress').value == '') {
        getAddress.classList.add('not-valid');
    } else {
        getAddress.classList.remove("not-valid");
        user.address = document.getElementById('inputAddress').value;
    }

    if (document.getElementById('inputCity').value == '') {
        getCity.classList.add('not-valid');
    } else {
        getCity.classList.remove('not-valid');
        user.city = document.getElementById('inputCity').value;
    }

    if (document.getElementById('inputCountry').value == '') {
        getCountry.classList.add('not-valid');
    } else {
        getCountry.classList.remove('not-valid');
        user.country = document.getElementById('inputCountry').value;
    }

    if (document.getElementById('inputPinCode').value == '') {
        getPinCode.classList.add('not-valid');
    } else {
        getPinCode.classList.remove('not-valid');
        user.pincod = document.getElementById('inputPinCode').value
    }

    this.Name = this.user.name;
    this.Address = this.user.address;
    this.City = this.user.city;
    this.Country = this.user.country;
    this.PinCode = this.user.pincod;

    var userObj = Object.assign({}, user);
    console.log(userObj)

    if (this.Name != '' && this.Address != '' && this.City != '' && this.PinCode != '' && this.Country != '') {

        Users.push(userObj);

        addRowInTable()
        console.log(this.user);
        console.log(this.Users);

        this.Name = ''
        this.Address = ''
        this.City = ''
        this.Country = ''
        this.PinCode = ''

        document.getElementById('inputName').value = '';
        document.getElementById('inputAddress').value = '';
        document.getElementById('inputCity').value = '';
        document.getElementById('inputCountry').value = '';
        document.getElementById('inputPinCode').value = '';
    }
}

function addRowInTable() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    counter++;

    cell1.innerHTML = counter;
    cell2.innerHTML = user.name;
    cell3.innerHTML = user.address;
    cell4.innerHTML = user.city;
    cell5.innerHTML = user.pincod;
    cell6.innerHTML = user.country
    cell7.innerHTML = '<i onclick="writeInformation()" class="fas fa-eye"></i> <i class="fas fa-pen"> </i><i class="far fa-trash-alt"></i>';
}

function writeInformation() {
    for (var i = 0; i < Users.length; i++) {
        if (Users[i].id == user.id) {
            console.log(Users[i].name);
        }
    }
}









