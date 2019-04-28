const axios = require("axios");

axios.get("https://api.vschool.io/alan/todo/").then((response) =>{
    console.log(response.data);
    }).catch(function(error){
    console.log(error)
      for(let i = 0; i < response.data.length; i++){
      createTodo(response.data[i])
      }
    });
    
function createToDo(todo){
  const container = document.createElement("div");
  container.className = "container";

  const title = document.createElement("h1");
  title.className = "title";
  title.textContent = todo.title;

  const description = document.createElement("p");
  description.className = "description";
  description.textContent = description.title

  const title =document.createElement('p');
  price.className = 'price';
  price.textContent = todo.price;

  const title =document.createElement('p');
  imgUrl.className = 'imgUrl';
  imgUrl.textContent = todo.imgUrl;

  const title =document.createElement('p');
  completed.className = 'completed';
  completed.textContent = todo.completed;

  container.append(title);
  container.append(description);
  container.append(price);
  container.append(imgUrl);
  container.append(completed);

  document.getElementById('wrapper').append(container)
}