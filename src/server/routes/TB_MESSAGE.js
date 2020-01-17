var express = require('express');
var Message = require('../models').TB_MESSAGE;
var router = express.Router();

router.get('/', function(req, res){
    console.log('getting all books');
    Message.findAll().then(result => {
        res.json(result);
    });
});

router.get('/:id', function(req, res){
    console.log('getting one book');
    /*Message.findById(req.params.id).then(result => {
        console.log(result);
        res.json(result);
    });*/

    Message.findOne({ where: {MSG_ID: req.params.id} }).then(result => {
        console.log(result);
        res.json(result);
    }).error(err => {
        res.send('error has occured');
    });
});

router.post('/', function(req, res){
    Message.create({
        MSG_SENDER: req.body.sender,
        MSG_RECEIVER: req.body.receiver,
        MSG_MESSAGE: req.body.message
    }).then(message => {
        console.log(message.get({
            plain: true
        }));
        res.send(message);
    });
});

/*router.put('/:id', function(req, res){
    Book.update({
        title: req.body.title,
        author: req.body.author,
        category: req.body.category
    },{
        where: { id: req.params.id }
    }).then(result => {
        res.status(200).json(result);
    });
});

router.delete('/:id', function(req, res){
    Book.destroy({
        where: { id: req.params.id }
    }).then(result => {
        res.status(200).json(result);
    });
});*/

module.exports = router;