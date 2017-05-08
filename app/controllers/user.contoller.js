var User = require('../models/user.model');

exports.get = function(req, res){
    User.find({}, function(err, obj){
        if(err){
            res.status(500).send('Erro no retorno dos usuários -> ' + err);
        }
        res.send(obj);
    });
}
exports.create = function(req, res){
    console.log('body -->> ' + req.body);
    user = new User(req.body);
    user.save(function(err, obj){
        if(err){
            res.status(500).send('Erro ao criar o usuário -> ' + err);
        }
        res.send(obj);
    });
}
exports.update = function(req, res){
    User.findOneAndUpdate({_id: req.body._id}, req.body, function(err, obj){
        if(err){
            res.status(500).send('Erro ao Atualizar o usuário -> ' + err);
        }
        res.send(obj);
    });
}
exports.delete = function(req, res){
    User.findOneAndRemove({_id: req.body._id}, function(err, obj){
        if(err){
            res.status(500).send('Erro ao deletar o usuário -> ' + err);
        }
        res.send(obj);
    });
}