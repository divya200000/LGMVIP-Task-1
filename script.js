let inputBox = document.querySelector(".input-field input");
let btn = document.querySelector(".input-field button");
let toDoList = document.querySelector(".todo");
let deleteAll = document.querySelector(".footer button");

inputBox.onkeyup = ()=>{
    let userData = inputBox.value;
    if(userData.trim() !=0){
        btn.classList.add("active");
    }else{
        btn.classList.remove("active");
    }
}
 showTasks();

btn.onclick = ()=>{
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showTasks();
}

function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    let pendingNumb = document.querySelector(".pendingNumber");
    pendingNumb.textContent = listArr.length;
    
    if(listArr.length > 0){
        deleteAll.classList.add("active"); 
    }else{
        deleteAll.classList.remove("active");
    }

    let newLiTag = '';
    listArr.forEach((element, index) =>{

        newLiTag += `<li> ${element} <span onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    toDoList.innerHTML = newLiTag;
    inputBox.value = "";
}

function deleteTask(index){
   let getLocalStorage = localStorage.getItem("New Todo");
   listArr = JSON.parse(getLocalStorage);
   listArr.splice(index,1);
   localStorage.setItem("New Todo",JSON.stringify(listArr));
   showTasks();
}

deleteAll.onclick = () =>{
   listArr = [];
    localStorage.setItem("New Todo",JSON.stringify(listArr));
   showTasks();
}