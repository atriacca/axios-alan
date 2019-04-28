// const axios = require("axios");

axios.get("https://api.vschool.io/alan/todo/").then((response) =>{
   console.log(response.data);
   for(let i = 0; i < response.data.length; i++){
      createTodo(response.data[i])
   }
})

function createTodo(todo){
  const container = document.createElement("div");
  container.className = "container";

  const title = document.createElement("h1");
  if(todo.completed === true){
    title.className = 'titleLineThrough';
  } else {
    title.className = 'title';
  }   
  title.textContent = todo.title;

  const description = document.createElement("p");
  description.className = "description";
  description.textContent = todo.description;

  const price = document.createElement('p');
  price.className = 'price';
  price.textContent = todo.price;

  const imgUrl = document.createElement('p');
  imgUrl.className = 'imgUrl';
  imgUrl.textContent = todo.imgUrl;

  const completed = document.createElement('p');
  if(todo.completed === true){
    completed.className = 'completedLineThrough';
  } else {
    completed.className = 'completed';
  } 
  completed.textContent = todo.completed;

  const myCheckBox = document.createElement("input");
  myCheckBox.type = "checkbox";
  myCheckBox.checked = todo.completed;
  myCheckBox.addEventListener("click", (e)=>updateChecked(e, todo._id));

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "delete";
  deleteButton.addEventListener("click", (e)=>{deleteTodo(e, todo._id)});

  container.append(title);
  container.append(description);
  container.append(price);
  container.append(imgUrl);
  container.append(completed);
  container.append(myCheckBox);
  container.append(deleteButton);

  document.getElementById('wrapper').append(container)
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