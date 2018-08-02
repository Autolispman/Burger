const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require("express-handlebars");
const routes = require('./controllers/burgers_controller.js')
const path = require('path')

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// app.use(express.static(process.cwd() + '/public'))
app.use(express.static(path.join(__dirname, '/public')))


// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});


