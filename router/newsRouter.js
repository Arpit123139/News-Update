const express=require('express')
const { addNews, getNews, deleteNews } = require('../Controllers/NewsController')
const router=express.Router()

router.route("/addNews").post(addNews)
router.route("/getNews").get(getNews)
router.route("/deleteNews/:id").delete(deleteNews)
module.exports=router