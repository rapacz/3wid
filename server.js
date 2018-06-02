const app = require('./index');

app.set('port', 8080);

const server = app.listen(app.get('port'), () => {
    console.log('Listening on');
});