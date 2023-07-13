const express = require("express");
const { registerUser, authUser } = require("./controllers/userControllers");
const router = express.Router();

router.route("/").post(registerUser);
// router.route("/login").get(() =>{}).post(()=> {}); we can make a chain in the same route
router.post("/login", authUser);

module.exports = router;
