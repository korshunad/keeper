const express = require('express');
const app = express();

app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});

app.set('view engine', 'pug')
app.get('/', (req, res) => {
	res.render('index', {title: 'Hey', message: 'Hello there!hhhh yo'});
});

app.use(express.static('dist'));
app.use(express.static('public'));
