//take value from input field
const inputbox=document.getElementById("input-id");

//contains lists
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputbox.value===''){
        alert("You must enter something");
    }else{

        // creating a new HTML element named "li"
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;

        //adding li into listContainer
        listContainer.appendChild(li);
        
        //creating a cross sign
        let span=document.createElement("span");
        span.innerHTML="\u00d7";

        //adding along with lists
        li.appendChild(span);
    }
    inputbox.value='';

    saveData();
}

//adding and removing functionality
listContainer.addEventListener("click",function(e){

    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();

    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})


//saving the data
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//show data
function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showData();