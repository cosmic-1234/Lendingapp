const JWT_SECRET = process.env.JWT_SECRET;
const express = require("express");
const jwt = require("jsonwebtoken");
const { prismaClient } = require("../db/db");

const Middleware = async(req, res, next) => {
    const authHeader = req.headers.authorization;
    

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        console.log("one");
        return res.status(403).json({
            
            message: "something wrong with header"
        });
    }

    const token = authHeader.split(' ')[1];
    
    try {
        console.log(token);
        const decoded = jwt.verify(token, JWT_SECRET);
        const useraccount = await prismaClient.user.findFirst({
            where:{
                id:decoded.userid
            }
        })
        if(useraccount)
        {req.userId = decoded.userid;
            console.log("middleware passed")
            next();
        }
        else{
            console.log("two");
            res.status(403).json({
                message: "You are not authenticated sir"
            })
        }
        
 
    } catch (err) {
        console.log("three");
        return res.status(403).json({
            message: "Looks like you are not authenticated"
        });
    }
};

module.exports = {
    Middleware
}