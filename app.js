const express = require("express");
var addDays = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  const date = addDays(new Date(), 100);
  const dateFormat = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  response.send(dateFormat);
});

app.listen(3000);

module.exports = app;
