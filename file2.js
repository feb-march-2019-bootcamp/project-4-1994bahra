
var newt = document.querySelector('#newtask');
var AddBtn = document.querySelector('#addtask');
var incomplete = document.querySelector(".incomplete ul");
var complete =  document.querySelector(".completelist ul");
let buttonD=document.querySelector('.deleteBT')
var label = document.createElement("label"); 
  var checkBox = document.createElement("input");
  var listItem = document.createElement("li");
  let dbt=document.createElement('delete')


function NewTask (task){
  
  label.innerText = task;
  checkBox.type = "checkbox";
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  return listItem;  
  
};

function addTaskToIncom(){

  var listItem = NewTask(newt.value);
  newt.value='';
  incomplete.appendChild(listItem);
  

};
AddBtn.addEventListener("click", addTaskToIncom);


function removeCompleteTtask() {
  
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  
  ul.removeChild(listItem);
  
};

