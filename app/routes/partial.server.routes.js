module.exports = function(app) {
    var partial = require('../controllers/partial.server.controller');
    app.get('/modules/:module/views/:partial', partial.render);
};