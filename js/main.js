
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('.text_name');
const emailInput = document.querySelector('.text_email');
const message = document.querySelector('.msg');
const users = document.querySelector('#users');
const addedUsers = document.querySelector('#AddedUsers');
console.log(addedUsers.value);

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    
    if(nameInput.value ==='' || emailInput.value===''){    
        message.classList.add('error');    
        message.innerHTML = 'Please enter all the required fields' ;
        setTimeout(()=> message.remove(), 3000);
    }

    else { 
      
        if(addedUsers.children.length > 0){            
        }
        else{
            const label = document.createElement('h2');
            label.classList.add('AddedUsers');
            label.innerHTML = 'Added Users';        
            addedUsers.appendChild(label);    
            
        }

                   
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        users.appendChild(li);       
        //Clear the fields
        nameInput.value ='' ;
        emailInput.value='';
    }
}