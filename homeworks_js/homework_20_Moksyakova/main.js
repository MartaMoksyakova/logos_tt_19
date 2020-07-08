let userForm = document.forms['user-form'];
let users = [];
let table = document.getElementById('table-body')
const log = userForm.login
const pass = userForm.password
const email = userForm.email

userForm.add.addEventListener('click',function(){
    
if (user) {
    user.login = log.value;
    user.password = pass.value;
    user.email = email.value;
    user = null;
    userForm.add.innerText = 'Add user'
} else {
    let newUser = new User(log.value, pass.value, email.value);
    users.push(newUser)
}

render()
clearInputs()
})



function render(){
    table.innerHTML = ''
    for(let i = 0; i < users.length; i++){
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerText = i;
        tr.appendChild(td)
        for(let key in users[i]){
            let usTD = document.createElement('td');
            usTD.innerText = users[i][key]
            tr.appendChild(usTD)
        }
        let editTD = `<td><button>Edit</button></td>`
        let deleteTD = `<td><button onclick="deleteUser(${i})">Delete</button></td>`
        tr.innerHTML += editTD
        tr.innerHTML += deleteTD
        table.appendChild(tr)
    }
}


function deleteUser(id){
    users.splice(id,1)
    render()
}

function clearInputs() {
    log.value = '';
    pass.value = '';
    email.value = '';
}

function User(log,pass,email){
    this.login = log;
    this.password = pass;
    this.email = email;
}


let user;

function editUser(id) {
    user = users[id];
    log.value = user.login;
    pass.value = user.password;
    email.value = user.email;
    userForm.add.innerText = 'Save edit';
}
  
  userForm.editUser.addEventListener("click", function () {
    saveEditUser();
  });
  
  function saveEditUser() {
  
    let user = getUser();
    users[index] = user;
  
    table.innerHTML = "";
    userForm.reset();
    render();
  
    userForm.add.style.display = "block";
    userForm.editUser.style.display = "none";
  }
 
  