const express = require("express"),
    router = express.Router(),
    user = require("../controllers/user.controller")

//Cheking if api is working route
router.get("/", (req, res) => {
    res.json(require('../../version.json') );

})

router.post('/request', user.request);

module.exports = router;