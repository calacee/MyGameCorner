var express = require("express");
var router = express.Router();

var avaliarController = require("../controllers/avaliarController");

router.post("/enviar", function (req, res) {
    avaliarController.avaliar(req, res);
})

router.get("/puxar/:idJogo", function (req, res){
    avaliarController.puxar(req, res)
})

router.get("/grafico", function (req, res){
    avaliarController.grafico(req, res)
})

module.exports = router;