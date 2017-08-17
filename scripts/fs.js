const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

function ensureDirectoriesExist(targetDir) {
  const sep = path.sep;
  const initDir = path.isAbsolute(targetDir) ? sep : "";

  return targetDir.split(sep).reduce((parentDir, childDir) => {
    const curDir = path.resolve(parentDir, childDir);
    if (!fs.existsSync(curDir)) {
      fs.mkdirSync(curDir);
    }

    return curDir;
  }, initDir);
}

function writeFileSync(targetDir, filename, data) {
  ensureDirectoriesExist(targetDir);
  console.log(chalk.green.bold("\nWrite to " + targetDir + "\n"));

  fs.writeFileSync(
    targetDir + "/" + filename,
    JSON.stringify(data, null, 2),
    "utf-8"
  );
  console.log(chalk.green.bold("\nDone writing to" + targetDir + "\n"));
}

module.exports = {
  ensureDirectoriesExist,
  writeFileSync
};
