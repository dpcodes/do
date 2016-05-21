const router = require('express').Router();
const SignController = require('../controllers/SignController');
const api = require('./api');
const auth = require('./auth');

router.use('/api', api);
router.use('/auth', auth);

router.post('/sign-up', SignController.signUp);

module.exports = router;