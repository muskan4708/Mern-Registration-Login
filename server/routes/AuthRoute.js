const { Signup, Login,Logout } = require("../controllers/AuthController");
const {userVerification} = require( "../Middleware/AuthMiddleware")

const router = require("express").Router();
router.post('/',userVerification)
router.post("/signup", Signup);

router.post('/login', Login);
router.post('/logout', Logout);
// //router.post('/',userVerification)
module.exports = router;