const db = require('./dbConnect');

var login = require('../controllers/login_controller');
var quotes = require('../controllers/quotes_controller');
var secrets = require('../controllers/secrets_controller');

module.exports = function(app) {

    //--------------------//
    //--- quoting dojo ---//
    //--------------------//
    
    app.get('/', function(req, res) {
        login.root(req, res);
    });
    app.post('/register', function(req, res) {
       login.register(req, res);
    })
    // user login
    app.post('/login', function(req, res) {
       login.login(req, res);
    })
    // user in session redirect to success
    app.get('/success', function(req, res) {
        res.render('success')
    })
    // something went wrong
    app.get('/failed', function(req, res) {
        res.render('failed')
    })   

    //--------------------//
    //--- quoting dojo ---//
    //--------------------//

    app.get('/quotingDojo', function(req, res) {
        quotes.quotes_home(req, res);
    })

    //--------------------//
    //--- dojo secrets ---//
    //--------------------//

    app.get('/secrets', function(req, res) {
        secrets.secrets_home(req, res);
    })
}