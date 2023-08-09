const express = require('express');
const { createUser, loginController, forgotPasswordController, testController } = require('../controllers/authController');
const { requireSignIn, isAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

//register
router.post('/register', createUser);

//login
router.post('/login', loginController);

//forgot password
router.post('/forgot-password', forgotPasswordController);

//protected user route auth
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ok : true});
})

//protected admin route auth
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ok : true});
})

module.exports = router;