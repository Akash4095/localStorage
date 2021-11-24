const myForm= document.querySelector('#my-form');
const name= document.querySelector('#name');
const email= document.querySelector('#email');
const msg= document.querySelector('.msg');
const userList= document.querySelector('#user');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    // localStorage.setItem('name',name.value);
    // localStorage.setItem('email',email.value);

    const userDetails= {
        name:name.value,
        email:email.value
    }
    
    const obj= JSON.stringify(userDetails)
    localStorage.setItem('userDetails',obj)
    

}

