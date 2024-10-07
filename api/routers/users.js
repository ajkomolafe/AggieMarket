const express = require('express');
const router = express.Router();

/* get all
get one
create one
update one
delete one */

//Get all users, no params
router.get("/", (req, res) => {
    res.send("Hello World");
});

// //Get one user by email
// router.get("/:id", (req, res) => {

// });

// //Create a user, no params
// router.post("/", (req, res) => {

// });

// //Update one user
// //Uses patch to not overwrite info already there
// router.patch("/:id", (req, res) => {

// });

// //Update one user
// //Uses patch to not overwrite info already there
// router.patch("/:id", (req, res) => {

// });

// //Delete one user
// router.delete("/:id", (req, res) => {

// });

module.exports = router; //Nodejs syntax