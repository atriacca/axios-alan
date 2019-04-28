const axios = require("axios");

const newTodo = {
    title: "My first newTodo"
};
axios.post('https://api.vschool.io/alan/todo/', newTodo).then(function(response){
    console.log(response.data);
  }).catch(function(error){
    console.log(error)
  });
