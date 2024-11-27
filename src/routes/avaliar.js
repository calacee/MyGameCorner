var express = require("express");
var router = express.Router();

var avaliarController = require("../controllers/avaliarController");

router.post("/cadastrar", function (req, res) {
    avaliarController.avaliar(req, res);
})

module.exports = router;