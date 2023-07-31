const ctrl = {};

ctrl.renderIndex = (req, res) => {
    res.render('index')
}
ctrl.renderConocimientos = (req, res) => {
    res.render('conocimientos')
}
ctrl.renderEstudios = (req, res) => {
    res.render('estudios')
}
ctrl.renderExperencia = (req, res) => {
    res.render('experiencia')
}

module.exports = ctrl;