const axios = require("axios");

axios.get("https://api.vschool.io/alan/todo")

// To use Axios on the front-end vs with node, just use the cdn.
// <script src="https://unpkg.com/axios/dist/axios.min.js"></script>


// The database model looks like this:
// Note: You won't need to mess with sessionId - that is handled automatically

// {
//     title: {
//         type: String,
//         required: true
//     },
//     description: String,
//     price: Number,
//     imgUrl: String,
//     completed: Boolean,
//     sessionId: {
//         type: String,
//         required: true
//     }
// }