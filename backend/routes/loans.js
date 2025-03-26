const express = require("express");
const router = express.Router();
const { Middleware } = require("../middleware/middleware");
const { prismaClient } = require("../db/db");
router.put("/lend", Middleware, async(req, res)=>{
    console.log("lendrouter")
    console.log("id in the lend endpoint "+ req.userId );
    const Amount = await prismaClient.user.findFirst({
        
        where: {
         id: req.userId
        }
})
if (parseInt(req.body.lendamount) > Amount.amount){
    res.status(411).json({
        message:"Lending amount is more than your worth"
    })
}
else{         
        const user =  prismaClient.User.update({
                where: {
                  id: req.userId,
                },
                data: {
                    amount: { decrement: parseInt(req.body.lendamount)},
                },
              })
              console.log(user);
        
    
         
            
            const loan = prismaClient.loan.create({
                data:{ amount: parseInt(req.body.lendamount),
                 interest: req.body.interest,
                 duration: req.body.duration,
                 lenderid: req.userId,
                },
             });
             
           const arr = prismaClient.$transaction([user, loan]);
           
          arr.then(async value=>{
            console.log("amount after decrement is "+ value[0].amount)
            console.log(value[1].id);
            const Nostro = await prismaClient.nostro.create({
                data:{ amount: parseInt(req.body.lendamount),
                 loanid: value[1].id,
             },
             })
             if(Nostro){
                res.json({
                    message: "everything updated successfully"
                })
             }
          })
        //   console.log(loan);    
   
} 
})
router.post("/borrow", Middleware, async(req, res)=>{
  
try {
  const loandata = await prismaClient.loan.findFirst({
    where: {
      id: req.body.loanid,
      takerid: null
    }
  })
  if(!loandata){
    res.status(411).json({
      message: "Sorry you are late the loan is already taken by someone"
    })
  }
  else if(loandata.lenderid === req.userId){
    res.status(411).json({
      message: "You cannot take a loan which is lended by you"
    })
  }
  else{
const loanupdate = prismaClient.loan.update({
  where:{
    id: req.body.loanid
  },
  data:{
    takerid: req.userId
  }
})
const nostroupdate = prismaClient.nostro.update({
     where:{
      loanid: req.body.loanid
     },
     data:{
      amount: { decrement: loandata.amount}
     }
})
  const arr1 = prismaClient.$transaction([loanupdate, nostroupdate]);
  arr1.then(value=>{
    res.json({
      message: `Loan has been granted to you with amount: Rs.${value[0].amount} duration: ${value[0].duration}Months and interest ${value[0].interest}% happy banking`
    })
  })}
} catch (error) {
  console.log(error);
res.status(411).json({
  
  message: "Error while granting loan"
})  
} 
})
module.exports = router;