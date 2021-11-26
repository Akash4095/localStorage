const myForm= document.querySelector('#my-form');
const name= document.querySelector('#name');
const email= document.querySelector('#email');
const msg= document.querySelector('.msg');
const userList= document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    // localStorage.setItem('name',name.value);
    // localStorage.setItem('email',email.value);

    const userDetails= {
        name:name.value,
        email:email.value
    }
    
    const obj = JSON.stringify(userDetails);
    localStorage.setItem(userDetails.email,obj);

    // var data =JSON.parse(localStorage.getItem('email'))
    
    showUserOnScreen(userDetails)
    
}

function showUserOnScreen(user){

    // const li= document.createElement('li');
    // li.innerHTML=(document.createTextNode(JSON.parse(localStorage.getItem(user.name))));
    // userList.appendChild(li)

    const parentNode= document.getElementById('users');
    const childHTML= `<li> ${user.name} -  ${user.email} </li>`

    parentNode.innerHTML= parentNode.innerHTML+childHTML;
 }

