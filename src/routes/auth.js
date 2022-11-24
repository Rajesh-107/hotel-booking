const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello vai")
})

module.exports = router;