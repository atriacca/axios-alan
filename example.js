// This is the lesson example:
const axios = require("axios");

// function assignResponseToVariable(response){
//     console.log(response.data);
// }
// axios.get('https://swapi.co/api/people/1').then(assignResponseToVariable)

// This does same thing:

axios.get('https://swapi.co/api/people/1').then(function(response){
    console.log(response.data);
})

axios.get('https://swapi.co/api/people/1').then(function(response){
    console.log(response.data);
  }).catch(function(error){
    console.log(error)
  });
  
// This was in=class example:
const axios = require("axios");

axios.get("https://pokeapi.co/api/v2/pokemon/1")
// axios.put()
// axios.delete()
// axios.post()
// Promise.then()

