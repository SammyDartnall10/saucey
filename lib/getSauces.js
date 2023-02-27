
const testSauces = [
  {
    id: 1,
    name: "Hot Stuff"
  },
  {
    id: 2,
    name: "Hotter Things"
  }
]

const Got = require('got');

const getSauces = async function (name) {
  try {
    // const URL = new URL('https://jsonplaceholder.typicode.com/todos/1');
    // const response = await Got(URL);
    // const body = JSON.parse(response.body);
    // return body;


    console.log(name);
    return testSauces;
    // return `Saucy!!! :D ${url} `;
  } catch (error) {
    console.log(error);
  }
};

// const testCypher = async function () {
//   string: String!
//   @cypher(
//     statement: """
//             RETURN \\"Query-level string\\"
//             """
//   )
// }

module.exports = {
  getSauces: getSauces,
};
