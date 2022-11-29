const express = require('express');
const  UserController  = require("../controllers/userController");
const { verifyUser, verifyAdmin } = require('../utils/RoleUser');
const router = express.Router();


//update
router.put("/:id",  UserController.updateUser);
//Delete
router.delete("/:id",  UserController.deleteUser);
//get
router.get("/:id", UserController.getUser);
//get all
router.get("/",  UserController.getUsers);

module.exports = router;