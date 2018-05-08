const db = require('./dbConnect');

var login_controller = require('../controllers/login_controller');
var quotes_controller = require('../controllers/quotes_controller');

module.exports = function(app) {
    app.get('/', function(req, res) {
        login_controller.root(req, res);
    });
    app.post('/register', function(req, res) {
       login_controller.register(req, res);
    })
    // user login
    app.post('/login', function(req, res) {
       login_controller.login(req, res);
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
        quotes_controller.quotes_home(req, res);
    })

    //--------------------//
    //--- dojo secrets ---//
    //--------------------//

    app.get('/dojoSecrets', function(req, res) {
        dojo_secrets.secrets_home(req, res);
    })
}