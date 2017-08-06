const config = require("./config.json");
const contentful = require("contentful");

module.exports = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: config.SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: config.ACCESS_TOKEN
});
