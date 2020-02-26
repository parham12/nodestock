const express = require('express');
const app = express();
var exphbs  = require('express-handlebars');
const path = require('path');

const PORT = process.env.port || 5000;

// Set handlebars middlewar
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set handlebars routes
app.get('/', function (req, res) {
    res.render('home', {
        price: "2400$"
    });
});

// set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

