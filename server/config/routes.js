const db = require('./dbConnect');

var login = require('../../apps/login/controllers/login_controller');
var quotes = require('../../apps/quotes/controllers/quotes_controller');
var secrets = require('../../apps/secrets/controllers/secrets_controller');
var wall = require('../../apps/wall/controllers/wall_controller');

module.exports = function(app) {

    //--------------------//
    //------ login -------//
    //--------------------//
    
    app.get('/', function(req, res) {
        login.login_home(req, res);
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
        login.success(req, res);
    })
    // something went wrong
    app.get('/failed', function(req, res) {
        login.failed(req, res);
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

    //--------------------//
    //----- the wall -----//
    //--------------------//

    app.get('/wall', function(req, res) {
        wall.wall_home(req, res);
    })
}