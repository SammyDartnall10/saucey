'use strict';

const Got = import('got');

const getSauces = async function (url) {
  try {
    // const URL = new URL('https://jsonplaceholder.typicode.com/todos/1');
    // const response = await Got(URL);
    // const body = JSON.parse(response.body);
    // return body;

    console.log('Its alive!!');
    return 'Saucy!!! :D ';
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getSauces: getSauces,
};
