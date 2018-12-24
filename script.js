var Name = '';
var Address = '';
var City = '';
var Country = '';
var PinCode = '';


var Users = [];
var user = { 'name': this.Name, 'address': this.Address, 'city': this.City, 'pincod': this.PinCode, 'country': this.PinCode }

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
        this.user.name = document.getElementById('inputName').value;
    }

    if (document.getElementById('inputAddress').value == '') {
        getAddress.classList.add('not-valid');
    } else {
        getAddress.classList.remove("not-valid");
        this.user.address = document.getElementById('inputAddress').value;
    }

    if (document.getElementById('inputCity').value == '') {
        getCity.classList.add('not-valid');
    } else {
        getCity.classList.remove('not-valid');
        this.user.city = document.getElementById('inputCity').value;
    }

    if (document.getElementById('inputCountry').value == '') {
        getCountry.classList.add('not-valid');
    } else {
        getCountry.classList.remove('not-valid');
        this.user.country = document.getElementById('inputCountry').value;
    }

    if (document.getElementById('inputPinCode').value == '') {
        getPinCode.classList.add('not-valid');
    } else {
        getPinCode.classList.remove('not-valid');
        this.user.pincod = document.getElementById('inputPinCode').value
    }

    // error e tuka na krajot ne zapisuva 
    if (this.user.name != '' && this.user.address != '' && this.user.city != '' && this.user.pincod != '' && this.user.country != '') {
        this.Users.push(user);
        console.log(this.Users)

        this.user.name = '';
        this.user.address = '';
        this.user.city = '';
        this.user.country = '';
        this.user.pincod = '' ;

        document.getElementById('inputName').value = '';
        document.getElementById('inputAddress').value = '';
        document.getElementById('inputCity').value = '';
        document.getElementById('inputCountry').value = '';
        document.getElementById('inputPinCode').value = '';
    }
}




