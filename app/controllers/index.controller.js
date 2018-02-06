exports.render = function(req, res) {
    var isLogedIn = false;

    if(typeof req.session.remember !== 'undefined') {
        isLogedIn = req.session.remember;
    }

    res.render('index', {
        title: 'Hello World',
        isLogedIn: isLogedIn
    });
};