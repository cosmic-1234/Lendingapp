const express = require('express');
const router = express.Router();
const zod = require("zod");
const { prismaClient } = require('../db/db');
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const { Middleware } = require("../middleware/middleware");
console.log(JWT_SECRET);

    const Userbody = zod.object({
       username: zod.string(),
       password: zod.string(),
       email: zod.string().email(),
       firstname: zod.string(),
       lastname: zod.string(),
       amount: zod.string(),
    })
router.post("/signup", async(req, res)=>{

    const success = Userbody.safeParse(req.body);
    
    if(!success){console.log(failed);
        return res.status(411).json({
          message: "wrong input brother"
          
        })
    }
    const doesexistuser = await prismaClient.User.findFirst({
        where: {
            username: req.body.username,
            email: req.body.username,
        }
    })
    if(doesexistuser){
        return res.status(411).json({
            message:"username/email address already taken"
        })
    }
    try {
        const user = await prismaClient.user.create({
          data: { 
              username: success.data.username,
              email: success.data.email,
              firstname: success.data.firstname,
              lastname: success.data.lastname,
              password: success.data.password,
              amount: parseInt(success.data.amount),
              
          } 
     } )
     const userid = user.id;
     console.log(JWT_SECRET);

     console.log(userid);
     const token = jwt.sign({
        userid: userid
     }, JWT_SECRET);
     res.json({
        message: "user signedup successfully",
        token: token,
     })

    } catch (error) {
        console.log(error);
         res.status(411).json({
            message: "User already exists with this username"
    })}
      
    
})
const Signinbody = zod.object({
    username: zod.string(),
    password: zod.string(),

})

router.post("/signin", async(req, res)=>
{
   
const success = Signinbody.safeParse(req.body);
if(!success){
    return res.status(411).json({
        message: "Wrong input brother"
    })
}

const User = await prismaClient.user.findFirst({
   where: {username: success.data.username,
    password: success.data.password,}
})
if(!User){
    return res.status(411).json({
        message: "user does not exist please signup and try signin again"
})
}
else {
    const userid = User.id;
    const token = jwt.sign({
        userid
    }, JWT_SECRET)
    
    res.json({
        token: token,
        message: "User signed in successfully"
    })
}

})

router.put("/amount/add", Middleware, async(req, res)=>{
try {
    const updateamount = await prismaClient.user.update({
        where: {
          id: req.userId,
        },
        data: {
          amount: parseInt(req.body.amount),
        },
      })
       res.json({
        amount: updateamount.amount,
        message: "Above amount has been added succesfully"
       })
       
} catch (error) {
    res.status(411).json({
        message: "Something went wrong while updating the amount"
    })
}

})

router.get("/amount/get", Middleware, async(req, res)=>
{
    try {
    
        const amount = await prismaClient.user.findFirst({
            where: {id: req.userId },
            
        })
        if (amount.amount === null)
        {
            res.json({
                message: "Please add money to see the money"
            })
        }
        else{
            res.json({
                amount: amount.amount,
                message: "above is the amount in your account"
            })
        }
        
    } catch (error) {
        res.status(411).json({
            message: "something went wrong while fetching the amount details"
        })
    }
})
module.exports = router;