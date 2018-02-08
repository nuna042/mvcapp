var User = require('mongoose').model('User');

exports.renderSignup = function(req, res, next) {
    res.render('signup', {
        title: 'Sign up'
    });
};

exports.signup = function(req, res, next) {
    if(!req.user) {
        var user = new User(req.body);
        user.provider = 'local';

        user.save(function(err) {
            console.log(err);
            if(err) return res.redirect('/signup');

            req.login(user, function(err) {
                if(err) return next(err);

                res.redirect('/');
            });
        });

    } else {
        res.redirect('/');
    }
};

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

exports.list = function(req, res, next) {
    User.find({}, function(err, users) {
        if(err) {
            next(err);
        } else {
            res.json(users);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.user);
};

exports.update = function(req, res, next) {
    User.findOneAndUpdate({username: req.user.username}, req.body,
        function(err, user) {
            if(err) {
                next(err);
            } else {
                res.json(user);
            }
        });
};

exports.delete = function(req, res, next) {
    req.user.remove(function(err) {
        if(err) {
            next(err);
        } else {
            res.json(req.user);
        }
    });
};

exports.userByUsername = function(req, res, next, username) {
    User.findOne({
        username: username
    }, function(err, user) {
        if(err) {
            next(err);
        } else {
            req.user = user;
            next();
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