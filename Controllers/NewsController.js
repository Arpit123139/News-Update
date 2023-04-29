const express=require('express')
const News=require('../models/News');
const { mongo, default: mongoose } = require('mongoose');

exports.addNews = async (req,res)=>{
    // res.send("Hello I am there ")

    const {title,details,date}=req.body;

    console.log(req.body);
    console.log(date.toString())
    const news=await News.create({
        title:title,
        details:details,
        date:date
    })

    res.status(200).json({
        news
    })


}

exports.getNews = async (req,res)=>{
    // res.send("Hello I am there ")
    const news=await News.find({})
    res.status(200).send(news)
}

exports.deleteNews=async (req,res)=>{

    const id=req.params.id;
    console.log("id "+id);
    if(id==undefined)
        return res.send("Id is not efined")
    
    const deleteitem=await News.findByIdAndDelete(id)

    res.status(200).json({
        deleteitem
    })
}