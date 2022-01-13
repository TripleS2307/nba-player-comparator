const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<p>Howdy World!</p>');
})

app.listen(3000, () => {
    console.log('listening for requests on port 3000');
})