exports.render = function(req, res) {
    res.render('.' + req.path);
};