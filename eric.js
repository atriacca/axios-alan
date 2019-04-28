// const axios = require("axios");
// "https://api.vschool.io/franklin/todo/"

axios.get("https://api.vschool.io/franklin/todo/").then(response=>{
    console.log(response.data);
    for(let i = 0; i < response.data.length; i++){
        createTodo(response.data[i])
    }
})

document.todo.addEventListener("submit", (e)=>{
    e.preventDefault();

    const title = document.todo.title.value;
    const description = document.todo.description.value;

    const body = {
        title,
        description 
    }

    axios.post("https://api.vschool.io/franklin/todo/", body).then((response)=>{
        console.log(response.data)
        createTodo(response.data);
    })
})

function createTodo(todo){
    const container = document.createElement("div");
    container.className = "container";

    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = todo.title;

    const description = document.createElement("p"); 
    description.className = "description";
    description.textContent = todo.description;

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = todo.completed;
    checkBox.addEventListener("click", (e)=>updateChecked(e, todo._id));

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";
    deleteButton.addEventListener("click", (e)=>{deleteTodo(e, todo._id)});

    container.append(title);
    container.append(description);
    container.append(checkBox);
    container.append(deleteButton);

    document.getElementById("wrapper").append(container)
}

function updateChecked(e, id){
    axios.put("https://api.vschool.io/franklin/todo/"+id, {completed: e.target.checked}).then((response)=>{
        console.log(response.data);
    })
}

function deleteTodo(e, id){
    axios.delete("https://api.vschool.io/franklin/todo/"+id).then((response)=>{
        e.target.parentNode.remove();
    })
}