const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        title: "Os melhores Restaurantes de Recife",
        date: "11/11/2020",
        version: "1.0.0"
    })
});


module.exports = router;
