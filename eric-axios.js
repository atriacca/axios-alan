axios.get("https://api.vschool.io/alan/todo/").then((response) =>{
   console.log(response.data);
   for(let i = 0; i < response.data.length; i++){
      createTodo(response.data[i])
   }
})


// Eric added these incomplete statements for button
document.todo.addEventListener("submit", (e)=>{
    e.preventDefault();

    const title = document.todo.title.value
//  const title = document.getElementById("title").value does same as above
    const description = document.todo.description.value

    const body = {
        title,
        description
    }

    axios.post("https://api.vschool.io/alan/todo/", body).then((response)=>{
        console.log(response.data)
        createTodo(response.data)
    })
})



function createTodo(todo){
    /* =============
    this function will take a todo object with a title and a description. Yours will need 
    to work with an image, price and a "completed" checkbox
    ===============*/

    // create div and give it a class name. We will use this div later to contain or todo info
    const container = document.createElement("div");
    container.className = "container";
    // make an h1 and give it a title
    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = todo.title;
    // make a p tag for our description
    const description = document.createElement("p");
    description.className = "description";
    description.textContent = todo.description


    // here is where i'd write the code to make an Image, price, and completed checkbox


    // append those children inside the container
    container.append(title);
    container.append(description);
    // add that container to the DOM using our wrapper
    document.getElementById("wrapper").append(container)
}
