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
    // li.innerHTML=document.createTextNode(JSON.parse(localStorage.getItem('userDetails')));
    // userList.appendChild(li)
    if(localStorage.getItem(user.email)!==null){
        removeUserFromTheScreen(user.email)
    }
    const parentNode= document.getElementById('users');
    const childHTML= `<li id="${user.email}" > ${user.name} -  ${user.email} 
                    <button  onclick=removeUser('${user.email}')>Delete User</button>
                    <button onclick=editUser('${user.name}','${user.email}')> Edit user</button>
                    </li>`;

    parentNode.innerHTML= parentNode.innerHTML+childHTML;
 }
function removeUser(emailId){
    localStorage.removeItem(emailId)
    removeUserFromTheScreen(emailId)

}

function editUser(uname,emailId){
    document.getElementById('name').value=uname
    document.getElementById('email').value=emailId
    localStorage.removeItem(emailId)
    removeUserFromTheScreen(emailId)
    
}


function removeUserFromTheScreen(emailId){
    const parentNode= document.getElementById('users');
    const childNodeToBeDeleted= document.getElementById(emailId)

    if(childNodeToBeDeleted){
        parentNode.removeChild(childNodeToBeDeleted)
    }
    
}
