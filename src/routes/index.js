const express = require('express');
const {AddCustomer} = require('../controllers/customers')
const {AddItem} = require('../controllers/items')
const {ImageService} = require('../middlewares/ImageService')

const router = express.Router()

router.post("/addcust", AddCustomer);
router.post("/additem", ImageService('barang'), AddItem);

module.exports = router