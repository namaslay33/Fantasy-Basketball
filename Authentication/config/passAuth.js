var passport = require('passport');
var config = require('../config');
var db = require('../models');
var JwtStrategy = require('passport-jwt').Strategy
var ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcryptjs');

const LocalStrategy = require('passport-local');

//Setup options for local Strategy
const localOptions = {
    usernameField: 'email'
}

//Local Strategy
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
    console.log("Inside local strategy.")
    db.user.findAll( {where: {email: email} })
    .then(results => {
        console.log("Inside then statement.")
        if(results != null){
            //found email
            console.log("Inside results statement.")
            const user = results[0]
            console.log(results[0].email);
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if(err){
                    return done(err);
                }
                if(!isMatch){
                    return done(null, false)
                }
                console.log("Inside return user.")
                return done(null, user)
            })
        }
        else {
                return done(null, user);
        }
                
    })
})

//Setup options for JWT strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

//JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){

    console.log("inside jwt strategy")
    db.user.findById(payload.sub)
    .then((foundUser) => {
        if(foundUser){

            console.log("found user: " + foundUser)
            done(null, foundUser)
        }
        else{
            console.log("found error")
            done(null, false)
        }
    })
    .catch((err) => {
        console.log("error2")
        return(err, false)
    })
})

//Passport to Use Strategy
passport.use(jwtLogin);
passport.use(localLogin);