const express = require('express');
const app = express();
const { teamsMetadata } = require('./teamLoading');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs', {teamsMetadata});
});

app.listen(3000, () => {
    console.log('listening for requests on port 3000');
})