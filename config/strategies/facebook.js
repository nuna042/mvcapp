var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('../config');
var user = require('../../app/controllers/user.controller');

module.exports = function() {
    passport.use(new FacebookStrategy({
        clientID: config.facebook.clientID,
        clientSecrete: config.facebook.clientSecrete,
        callbackURL: config.facebook.callbackURL,
        //profileFields: ['id', 'displayName', 'photos', 'email'],
        profileFields: ['id', 'email', 'name'],
        pasReqToCallback: true
    }, function(req, accessToken, refreshToken, profile, done) {
        var providerData = profile._json;
        profileData.accessToken = accessToken;
        profileData.refreshToken = refreshToken;

        var providerUserProfile = {
            firstname: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.emails[0].value,
            username: profile.username,
            provider: 'facebook',
            providerId: profile.id,
            providerData: providerData
        }
        user.saveOAuthUserProfile(req, providerUserProfile, done);
    }));
};