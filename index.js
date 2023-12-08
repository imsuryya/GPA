const add= document.querySelector('#addbtn');
const submit= document.querySelector('#submitbtn');
const cred= document.querySelector('.cred form-control');
const grade= document.querySelector('.opt form-control');
const pattern= document.querySelectorAll('.pattern')

add.addEventListener( 'click',() => {
    let maincontainer = document.createElement('.mainContainer');
    maincontainer.innerHTML = pattern.value;
    pattern.appendChild(maincontainer);
});