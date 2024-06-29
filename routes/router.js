const express = require('express');
const userRoutes = require('./userRoutes');
const registeredRoutes = require('./registeredRoutes');
const router = express.Router();

router.use(userRoutes);
router.use(registeredRoutes);
module.exports = { router };