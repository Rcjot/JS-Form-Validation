/*
Indonesia
ID NNNNN
Japan
JP NNN-NNNN	
Korea
KR NNNNN
Malaysia
MY NNNNN
Philippines
PH NNNN
Thailand
TH NNNNN	
Vietnam
VN NNNNN
*/

const CountryZipCodeCheck = (function(){
    const zipConstraints = {
        id: [
            "^(ID-)?\\d{5}$",
            "Indonesia needs to match regex"
        ],
        jp: [
            "^(JP-)?\d{3}-\d{4}$",
            "Japan needs to match regex"
        ],
        kr: [
            "^(KR-)?\\d{5}$",
            "Korea needs to match regex"
        ],
        my: [
            "^(MY-)?\\d{5}$",
            "Malaysia needs to match regex"
        ],
        ph: [
            "^(PH-)?\\d{4}$",
            "Philippines needs to match regex"
        ],
        th: [
            "^(TH-)?\\d{5}$",
            "Thailand needs to match regex"
        ],
        vn: [
            "^(VN-)?\\d{5}$",
            "Vietnam needs to match regex"
        ]
    }
    document.querySelector('#zipcode').oninput = checkZIP;
    document.querySelector('#country').onchange = checkZIP;


    function checkZIP () {
        const zipcodeID = '#zipcode';
        const country = document.querySelector('#country').value;
        const zipcode = document.querySelector('#zipcode');
        const regex = new RegExp(zipConstraints[country][0]);

        if (!regex.test(zipcode.value)){
            appendErrorMsg(zipcodeID, zipConstraints[country][1]);
        }else{
            appendErrorMsg(zipcodeID, '');
        }
    }

})();



const PasswordCheck = (function(){
    document.querySelector('#password').oninput = checkPass;
    document.querySelector('#confirmPass').oninput = checkConfirmPass;
    
    function checkPass() {
        const passwordID = '#password'
        const password = document.querySelector('#password');

        if (password.validity.valueMissing) {
            appendErrorMsg(passwordID, 'please enter a password!');
        }else if (password.validity.tooShort) {
            appendErrorMsg(passwordID, `Password should be at least ${password.minLength} characters; you entered ${password.value.length}`);
        }else {
            appendErrorMsg(passwordID, '');
        }
    }

    function checkConfirmPass() {
        const confirmPassID = '#confirmPass';
        const password = document.querySelector('#password');
        const confirmPass = document.querySelector('#confirmPass');
        if (confirmPass.validity.valueMissing){
            appendErrorMsg(confirmPassID, 'please confirm your password!');
        }else if(password.value != confirmPass.value ) {
            appendErrorMsg(confirmPassID, 'Password should match!')
        }else {
            appendErrorMsg(confirmPassID, '');
        }
    }

})();

const EmailCheck = (function(){
    document.querySelector('#emailAdd').oninput = checkEmail;

    function checkEmail() {
        const emailID = '#emailAdd'
        const emailAdd = document.querySelector('#emailAdd');
        if (emailAdd.validity.valueMissing) {
            appendErrorMsg(emailID, 'please input an email address!');
        }else if (emailAdd.validity.typeMismatch) {
            appendErrorMsg(emailID, 'input needs to be an email address!')
        }else if (emailAdd.validity.tooShort){
            appendErrorMsg(emailID, `Email should be at least ${emailAdd.minLength} characters; you entered ${emailAdd.value.length}.`)
        }else {
            appendErrorMsg(emailID, '');
        }
    }
})();

const appendErrorMsg = function(name, msg){
    document.querySelector(`${name} + .error`).textContent = msg
}