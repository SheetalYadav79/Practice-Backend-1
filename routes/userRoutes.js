const express = require('express');
const { addUser, getUser, updateUser, deleteUser } = require('../controllers/userController');
const authenticateToken = require('../middlewares/authmiddleware');
const router = express.Router();

router.post('/userdata', authenticateToken, addUser);
router.get('/getdata', authenticateToken, getUser);
router.put('/updatedata/:id', authenticateToken, updateUser);
router.delete('/deletedata', authenticateToken, deleteUser);

module.exports = router;