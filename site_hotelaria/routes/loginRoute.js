const express = require('express');
const LoginController = require('../controllers/loginController');

class LoginRoute {

    #router;

    get router() {
        return this.#router;
    }
    set router(router) {
        this.#router = router;
    }

    constructor() {
        this.#router = express.Router();
        let ctrl = new LoginController();
        this.#router.get('/', ctrl.loginView);
    }
}
module.exports = LoginRoute;