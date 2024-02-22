var express = require('express');
var router = express.Router();

const ProfessoresController = require('../controller/professoresControler')

router 
    .get('/', ProfessoresController.listarDados)
    .get('/:id', ProfessoresController.listarDado)
    .post('/', ProfessoresController.inserirDado)
    .put('/:id', ProfessoresController.atualizarDado)
    .delete('/:id', ProfessoresController.apagarDado)


module.exports = router;

