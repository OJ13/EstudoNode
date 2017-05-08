var express = require('express');
var router = express.Router();
var user = require('../controllers/user.contoller');

// router.get('/usuario', function(req, res){
//     var user = [{
//         nome: 'Osmar',
//         idade: 27,
//         email: 'oj@email.com'
//     },{
//         nome: 'Junior',
//         idade: 27,
//         email: 'junior@email.com'
//     }]
//     res.send(user);
// });

router.get('/usuario',user.get);
router.post('/usuario', user.create);
router.put('/usuario', user.update);
router.delete('/usuario', user.delete);

module.exports = router;