const router = require('express').Router();
const {
    renderIndex,
    renderExperencia,
    renderEstudios,
    renderConocimientos
} = require('../controllers/controller')

router.get('/', renderIndex)

router.get('/estudios', renderEstudios)

router.get('/experiencia', renderExperencia)

router.get('/conocimientos', renderConocimientos)

module.exports = router;