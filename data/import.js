"use strict";

const chalk = require("chalk");
const boilerplate = require("./contentful/boilerplate.js");
const getProducts = require("./contentful/getProducts.js");
const fs = require("../scripts/fs");

// boilerplate();
function importData() {
  return new Promise((resolve, reject) => {
    getProducts()
      .then(result => {
        const location = __dirname + "/generated";
        fs.writeFileSync(location, "products.json", result);
        resolve();
      })
      .catch(e => {
        console.log(chalk.red.bold("\nWriting failed due to" + e + "\n"));
        reject(e);
      });
  });
}

importData();
