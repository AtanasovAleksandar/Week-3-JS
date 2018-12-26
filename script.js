var Name = '';
var Address = '';
var City = '';
var Country = '';
var PinCode = '';

var Users = [];
var user = { 'name': '', 'address': '', 'city': '', 'pincod': '', 'country': '' }



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
        // new user = { 'name': '', 'address': '', 'city': '', 'pincod': '', 'country': '' }
        
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






