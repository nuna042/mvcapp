var User = require('mongoose').model('User');

exports.create = function(req, res, next) {
    var user = new User(req.body);

    user.save(function(err) {
        if(err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};

exports.login = function(req, res) {
    req.checkBody('email', 'Invalid email').notEmpty().isEmail();
    req.sanitizeBody('email').normalizeEmail();
    var errors = req.validationErrors();
    if(errors) {
        res.render('index', {
            title: 'There have been validation error ' + JSON.stringify(errors),
            isLogedIn: false
        });
        return;
    }

    if(req.body.remember === 'remember') {
        req.session.remember = true;
        req.session.email = req.body.email;
        req.session.cookie.maxAge = 60000; // milliseconds
    }

    res.render('index', {
        title: 'Loged in as ' + req.body.email,
        isLogedIn: true
    });
};

exports.logout = function(req, res) {
    req.session = null;

    res.render('index', {
        title:'See you later...',
        isLogedIn: false
    });
};