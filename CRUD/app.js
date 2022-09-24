// add task 
showtable();
const inputtask = document.querySelector('#inputPassword2');
const addtask = document.querySelector('#addtask');

addtask.addEventListener('click',()=>{
    let inputval = inputtask.value;
    if(!inputval == 0){
        let webdesk = localStorage.getItem('localstore');
        if(webdesk == null ){
            taskObj =[]; 
    }else{
        taskObj = JSON.parse(webdesk);
    }
    taskObj.push(inputval);
    localStorage.setItem('localstore',JSON.stringify(taskObj));
  
}
});

// show table 
function showtable(){
    let webdesk = localStorage.getItem('localstore');
    if(webdesk == null ){
        taskObj =[]; 
    }else{
    taskObj = JSON.parse(webdesk);
    }

    let html ='';
    let tabledata = document.querySelector('#tabdata');
    taskObj.map((item,index)=>{
        html += `
        <li class="list-group-item">${item}
           <button class="border-0 btn-transition btn btn-outline-danger" style="float: right;" onclick="deletefn(${index})"> <i class="fa fa-trash"></i> </button> 
           <button class="border-0 btn-transition btn btn-outline-success" style="float: right;" onclick="editfn(${index})"> <i class="fa fa-pencil-square-o"></i></button> 
                                        
        </li>
        
        `
        tabledata.innerHTML =html;
    })
}

// edit task 
function editfn(index){
    let updatedtxt = document.querySelector('#updatetext');
    let updatebtn = document.querySelector('#updatebtn');
    let addbtnn = document.querySelector('#addtask');
    
    updatedtxt.value = index;

    let webdesk = localStorage.getItem('localstore');
    taskObj = JSON.parse(webdesk);

    inputtask.value = taskObj[index];

    addbtnn.style.display="none";
    updatebtn.style.display="block";
}

// save edit 
let updatebtn = document.querySelector('#updatebtn');
updatebtn.addEventListener('click',function(){
    showtable();
    let webdesk = localStorage.getItem('localstore');
    let taskObj = JSON.parse(webdesk);

    let updatedvalue = document.querySelector('#updatetext').value;

    taskObj[updatedvalue] = inputtask.value;
    localStorage.setItem('localstore',JSON.stringify(taskObj));
})

// delete fun 
function deletefn(index){
    let webdesk = localStorage.getItem('localstore');
    let taskObj = JSON.parse(webdesk);

    taskObj.splice(index,1);
    localStorage.setItem('localstore',JSON.stringify(taskObj));
    showtable();
}

// remove all 
const removeall = document.querySelector('#removeall');
removeall.addEventListener('click',()=>{
    let webdesk = localStorage.getItem('localstore');
    let taskObj = JSON.parse(webdesk);

    if(webdesk == null ){
        taskObj =[]; 
    }else{
    taskObj = JSON.parse(webdesk);
    taskObj =[];
    }

    localStorage.setItem('localstore',JSON.stringify(taskObj));
    showtable();
})

// searching task 
const searching = document.querySelector('#searchbar');
searching.addEventListener('input',function(){
    let trlist = document.querySelectorAll('li');
    Array.from(trlist).map((itemss)=>{
        let searchtxt = itemss.innerText;
        let searchbox = searching.value;
        let re = new RegExp(searchbox,'gi');
        if(searchtxt.match(re)){
            itemss.style.display="block";
        }else{
            itemss.style.display="none";
        }
    })

})