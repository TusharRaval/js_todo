const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("write something");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // asci value
        li.appendChild(span);
        
    }
    inputBox.value = "";// clear input field after adding the 
    saveData(); //to save the data of user
}

    listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
        e.target.classList.toggle("ch");
        saveData(); 
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();  
        saveData();    
        }
    }, false);


    function saveData(){
        localStorage.setItem("data", listContainer.innerHTML);
    }
    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");
    }
    showTask();
