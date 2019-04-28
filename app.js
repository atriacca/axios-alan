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
        document.todo.title.value = "";
        document.todo.description.value = "";
        document.todo.title.focus();
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

    const editButton = document.createElement("button");
    editButton.innerHTML = "edit";
    editButton.addEventListener("click", (e)=>{enterEditMode(e)});

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";
    deleteButton.addEventListener("click", (e)=>{deleteTodo(e, todo._id)});

    const editForm = createEditForm(todo);

    container.append(title);
    container.append(description);
    container.append(checkBox);
    container.append(deleteButton);
    container.append(editButton);
    container.append(editForm);

    document.getElementById("wrapper").append(container);
}

function createEditForm(todo){
    const title = document.createElement("input");
    title.className = "edit-title";
    title.value = todo.title;

    const description = document.createElement("input"); 
    description.className = "edit-description";
    description.value = todo.description;

    const editButton = document.createElement("button");
    editButton.innerHTML = "save";
    editButton.addEventListener("click", (e)=>{saveTodo(e)});

    const form = document.createElement("form");
    form.className = "edit-form none"

    form.append(title);
    form.append(description);
    form.append(editButton);
    
    return form
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

function enterEditMode(e){
    e.target.nextSibling.className = "edit-form"
}