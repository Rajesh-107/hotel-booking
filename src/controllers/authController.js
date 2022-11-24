const Users = require("../models/User");
const bcrypt = require('bcryptjs');
const { createError } = require("../utils/error");


exports.register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new Users({
      userName: req.body.userName,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("User has been created");
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
   const user = await Users.findOne({userName:req.body.userName})
   if(!user) return next(createError(404, "user not found!"))

   const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
   if(!isPasswordCorrect) return next(createError(400, "wrong password!"))

   const {password, isAdmin, ...otherDetails} = user._doc;

    res.status(200).json({...otherDetails});
  } catch (err) {
    next(err);
  }
};
