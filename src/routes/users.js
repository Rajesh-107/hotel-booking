const express = require('express');
const  UserController  = require("../controllers/userController");
const { verifyUser, verifyAdmin } = require('../utils/verifyToken');
const router = express.Router();


//update
router.put("/:id", verifyUser, UserController.updateUser);
//Delete
router.delete("/:id", verifyUser, UserController.deleteUser);
//get
router.get("/:id", verifyUser, UserController.getUser);
//get all
router.get("/", verifyAdmin, UserController.getUsers);

module.exports = router;