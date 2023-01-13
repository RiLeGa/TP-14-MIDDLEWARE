const express = require('express');
const router = express.Router();

const {list, create, edit, destroy,} = require('../controllers/adminControllers');
const adminLogs = require('../middlewares/adminLogs')



router.get('/',adminLogs,adminLogs,list);
router.get('/createProduct',create);
router.get('/editProduct',edit);
router.get('/deleteProduct',destroy);



module.exports = router;