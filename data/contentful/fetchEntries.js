const client = require("./client");

// Load all entries for a given Content Type from Contentful
module.exports = {
  forContentTypeId: id =>
    client
      .getEntries({
        content_type: id
      })
      .then(response => response.items)
      .catch(error => {
        console.log(
          chalk.red(
            `\nError occurred while fetching Entries for ${chalk.cyan(id)}:`
          )
        );
        console.error(error);
      }),
  forContentType: contentType =>
    client
      .getEntries({
        content_type: contentType.sys.id
      })
      .then(response => response.items)
      .catch(error => {
        console.log(
          chalk.red(
            `\nError occurred while fetching Entries for ${chalk.cyan(
              contentType.name
            )}:`
          )
        );
        console.error(error);
      })
};
