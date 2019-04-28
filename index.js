// const axios = require("axios"); wrapper

axios.get("https://api.vschool.io/alan/todo/").then((response) =>{
   console.log(response.data);
   for(let i = 0; i < response.data.length; i++){
      createTodo(response.data[i])
   }
})
document.todo.addEventListener("submit", (e)=>{
    e.preventDefault();

    const title = document.todo.title.value;
    const description = document.todo.description.value;
    const price = document.todo.price.value;
    const imgUrl = document.todo.imgUrl.value;

    const body = {
        title,
        description,
        price,
        imgUrl
    }

    axios.post("https://api.vschool.io/alan/todo/", body).then((response)=>{
        console.log(response.data)
        createTodo(response.data);
    })
})
function createTodo(todo){
  const container = document.createElement("div");
  container.className = "container";

  const title = document.createElement("h1");
  todo.completed === true ? title.className = 'titleLineThrough' : title.className = 'title';
  title.textContent = todo.title;

  const description = document.createElement("p");
  description.className = "description";
  description.textContent = todo.description;

  const price = document.createElement('p');
  price.className = 'price';
  price.textContent = todo.price;

  const imgUrl = document.createElement('img');
  imgUrl.className = 'imgUrl';
  imgUrl.src = todo.imgUrl;

  const completed = document.createElement('p');
  completed.className = 'completed';
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
  container.append(myCheckBox);
  container.append(completed);
  container.append(deleteButton);

  document.getElementById('wrapper').append(container)
}

function updateChecked(e, id){
    axios.put("https://api.vschool.io/alan/todo/"+id, {completed: e.target.checked}).then((response)=>{
        console.log(response.data);
    })
}

function deleteTodo(e, id){
    axios.delete("https://api.vschool.io/alan/todo/"+id).then((response)=>{
        e.target.parentNode.remove();
    })
}