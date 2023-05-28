const express = require('express');

const Controller = require("../Controller/videoController")
const router = express.Router();
const authMiddleware = require('../Middleware/jwt');

router.post('/add',authMiddleware,Controller.add)
router.get('/find',authMiddleware,Controller.find)

module.exports = router