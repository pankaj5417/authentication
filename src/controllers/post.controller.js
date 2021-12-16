const express=require("express")

const Post=require("../models/post.model")

const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.get("/",authenticate, async (req, res)=>{

    try{

        const post=await Post.find({}).exec()

        return res.status(200).send(post)
    }catch(e){

        res.status(500).send({message:e.message, status:"failed"})
    }

    


})

router.post("/",authenticate, async(req, res)=>{
    try{
        const user = req.user;

        const post = await Post.create({
          title: req.body.title,

         // body: req.body.body,
         
          user: user.user._id,
        });
    
        return res.status(201).json({ post });
      } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
      }
} )

module.exports=router