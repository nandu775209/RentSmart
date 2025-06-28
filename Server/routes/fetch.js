const express = require("express");
const router = express.Router();
 
const {fetchProducts,fetchItem} =require('../controller/fetch');

router.get("/fetch", fetchProducts);
router.get("/item/:product_id", fetchItem);

module.exports = router;
