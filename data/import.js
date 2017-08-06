const chalk = require("chalk");
const boilerplate = require("./contentful/boilerplate.js");
const getProducts = require("./contentful/getProducts.js");
const fs = require("fs");

// boilerplate();
getProducts().then(result => {
  console.log(chalk.green.bold("\nWrite to data/product.json\n"));
  fs.writeFileSync(
    "./data/generated/products.json",
    JSON.stringify(result, null, 2),
    "utf-8"
  );
});
