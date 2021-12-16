const express=require("express")

const User=require("../models/user.model")

const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.get("/",authenticate, async (req, res)=>{

    const user=await User.find({}).select("-password").lean().exec()

  res.status(200).send({user})
})

module.exports=router

