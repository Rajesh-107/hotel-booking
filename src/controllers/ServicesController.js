// const ServicesModel = require("../models/ServicesModel");


// exports.services=(req, res) => {
//     const reqBody = req.body;
//     reqBody.email = req.headers['email']
//     // .find(query).project({ name: 1 });
//     ServicesModel.create(reqBody, (err, data) => {
//         if(err){
//             res.status(200).json({status:"fail", data:err})
//         }
//         else{
//             res.status(200).json({status:"success", data:data})
//         }
//     })
// }