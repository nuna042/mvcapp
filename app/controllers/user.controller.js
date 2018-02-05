exports.login = function(req, res) {
    console.log(req.body);
    console.log('Email: ' + req.body.email);
    console.log('Password: ' + req.body.password);

    res.render('index', {
        title: 'Loged in as ' + req.body.email,
        isLogedIn: true
    });
};

exports.logout = function(req, res) {
    res.render('index', {
        title:'See you later...',
        isLogedIn: false
    });
};