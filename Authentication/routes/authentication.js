let express = require('express');
let router = express.Router();

const jwt = require('jwt-simple');
const config = require('../config');
let db = require('../models');
let bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const passportService = require('../config/passAuth');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

let user = {
    id: '1999',
    username: 'Veronica',
    email: 'me@me.com'
}

function tokenForUser(user){
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timestamp}, 
                        config.secret)
}

//HomePage
router.get('/', requireAuth, (req, res) => {
    res.send("hello");
})

//Signin Post
router.post('/signin', requireSignin, (req, res) =>{
    console.log('inside signin')
     res.json({token: tokenForUser(req.user)})
})

//Signup Get
router.get('/signup', (req, res) => {
    res.send("signup");
})

//Signup Post
router.post('/signup', (req, res) => {

    // res.send("signup");

    let email = req.body.email;

    let password = bcrypt.hashSync(req.body.password, 8);
    db.user.findAll({where: {email: email}})
    .then((results) => {

        //no users were found, create user in database
        if(results.length == 0){

            db.user.create({email: "email", password: "password"})
            .then((user) => {
                return res.json({token: tokenForUser(user)})
            })
        }
        else{
            return res.status(422).send({error: "Email already exists."});

        }
    })
})

module.exports = router;