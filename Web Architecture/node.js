const figlet = require('figlet');

figlet('Hello', function(err, data) {
    console.log(data)
});