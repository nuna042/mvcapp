module.exports = {
    debug: true,
    mongoUri: 'mongodb://localhost/mvcdb',
    sessionSecret: 'dev_secret_key',
    facebook: {
        clientID: '161106614679918',
        clientSecret: '727bb9b9e6fbfe008349e72b21ba6dd2',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback'
    }
};