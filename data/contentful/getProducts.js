const chalk = require("chalk");
const fetchEntries = require("./fetchEntries");

function getProducts() {
  console.log(chalk.green.bold("\nGet PRODUCT Content Types\n"));
  return fetchEntries.forContentTypeId("product");
}

module.exports = getProducts;
