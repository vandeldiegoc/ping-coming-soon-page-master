let inputEmail = document.getElementById('email')

let button = document.getElementById('button')

button.addEventListener('click',(event)=> {

    event.preventDefault();
    console.log('se hizo click')
    validateEmail(inputEmail.value)
})

function validateEmail(email){
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    console.log()

    if(expReg.test(email)){
        inputEmail.style.border = '1px solid hsl(223, 87%, 63%)';
        errorEmail.style.visibility = 'hidden';

    }
    else{
        inputEmail.style.border = '1px solid red';
        errorEmail.style.visibility = 'visible';

    }
}