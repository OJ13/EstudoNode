var express = require('express');
var app = express();
var appRouter = require('./app/router/app.router.js');
var mongoConnection = require('./app/models/mongoConfig');
var bodyParser = require('body-parser');
// var middleware1 = function(req, res, next){
//     if(1 == 1){
//         next();
//     }else{
//         next(new Error("Não passou do middleware1"));
//     }
// }
// var middleware2 = function(req, res, next){
//     if(1 == 2){
//         next();
//     }else{
//         next(new Error("Não passou do middleware2"));
//     }
// }

// app.use('/usuario'/*, [middleware1,middleware2]*/, function(req, res){
//     var user = [{
//         nome: 'Osmar',
//         idade: 27,
//         email: 'oj@email.com'
//     },{
//         nome: 'Osmar',
//         idade: 27,
//         email: 'oj@email.com'
//     }]
//     res.send(user);
// });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.set('views', __dirname, 'dist');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/api', appRouter);
app.use('/', function(req, res){
    res.render('dist/index.html');
})

app.listen(3013, function(){
    console.log('servidor executando na porta 3013');
});