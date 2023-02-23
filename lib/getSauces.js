'use strict';

const Got = require('got');

const getSauces = async function () {
  try {
    // const URL = new URL('https://jsonplaceholder.typicode.com/todos/1');
    // const response = await Got(URL);
    // const body = JSON.parse(response.body);
    // return body;

    console.log('Its alive!!');
    return `Saucy!!! :D  `;
    // return `Saucy!!! :D ${url} `;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getSauces: getSauces,
};
