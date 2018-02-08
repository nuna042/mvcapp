var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
    firstName: String,
    lastName: String,
    username: {
        type: String,
        unique: true,
        required: 'Username is required',
        trim: true
    },
    email: {
        type: String,
        index: true,
        match: /.+\@.+\.+/
    },
    password: {
        type: String,
        validate: [
            function(password) {
                return password && password.length >=6;
            },
            'Password must be at least 6 charactors'
        ]
    },
    salt: String,
    provider: {
        type: String,
        required: 'Provider is required'
    },
    providerid: String,
    providerData: {},
    created: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre('save', function(next) {
    if(this.password) {
        //this.salt = new Buffer(crypto.randomBytes(64).toString('base64'), 'base64');
        this.salt = new Buffer(crypto.randomBytes(64).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
    next();
});

UserSchema.methods.hashPassword = function(password) {
    //return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512');
};

UserSchema.methods.authenticate = function(password) {
    return this.password == this.hashPassword(password);
};

mongoose.model('User', UserSchema);