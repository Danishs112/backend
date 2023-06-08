const fs = require("fs");
const Tour = require("../models/tourModel")

exports.checkId  = (req,res,next,val) =>{
  // const data = tours.find((element) => element.id === req.params.id * 1);
 
  // if (!data) {
  //   return res.status(404).json({
  //     status: "failed",
  //     message: "invalid response",
  //   });
  // }
  next()
}


exports.checkBody = (req,res,next) =>{
  // if(!req.body.name || !req.body.age){
  //   return res.status(404).json({
  //     status:"error",
  //     message: "please fill the valid data on the request"
  //   })
  // }
  next();
}


exports.getAllData = async (req, res) => {
    try{
      const tours = await Tour.find()
      res.status(200).json({
        status: 200,
        results: tours.length,
        data: {
          tours
        },
      });
    }
    catch(error){
      res.status(404).json({
        status:'fail',
        message:error
      })
    }

  };

exports.getDataById = async(req, res) => {
  const tour = await Tour.findById(req.params.id);
  try{
      
       res.status(201).json({
        data: {
          tour
        },
      });
     }
     catch(error){
       res.status(404).json({
          status:"failed",
          message:error
       })
     }
  };

exports.createData = async(req, res) => {
  try{
    const newTour = await Tour.create(req.body)
    res.status(200).json({
      status: 200,
      data: {
        tour:newTour
      },
    });
  }
  catch(error){
    res.json({
      status:'fail',
      message:"Invalid data sent"
    })
  }

  };
  
exports.updateData = async (req, res) => {
    try{
      const tour = await Tour.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
      })
      res.status(201).json({
      status:'Success',
      data:{
        tour
      }
     });
    } 
    catch(error){
      res.status(404).json({
        status:'fail',
        message:'not able to update the user'
      })
    } 
};
  
exports.deleteData = async(req, res) => {
   try{
     const tour = await Tour.findOneAndDelete(req.params.id)
     console.log("danish",tour)
     res.json({
      status:'Success',
     })
   }
   catch(error){
    res.status(404).json({
       status:'fail',
       message:"not able to delete the user"
    })
   }  
};
