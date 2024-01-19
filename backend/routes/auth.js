const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "awaisisagoodboy@littleone";
//create a User using: POST "/api/auth/createUser" Doesn't require auth??
//no login required
router.post(
  "/createuser",
  //checks inside the below array
  [
    body("name", "Enter a valid Name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid Password (minimum length 5)").isLength({
      min: 5,
    }),
  ],

  async (req, res) => {
    //if there are errors, return bad request and the errors
    // obj={
    //     name: 'awais',
    //     number: 171
    // }
    // // res.json(obj)
    // console.log(req.body)
    // // res.send("hello")
    // //////////////
    // const user = User(req.body)
    // user.save()
    // res.send(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //returns a promise

    //check whether the user with the same email already exists
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({
            error:
              "Sorry, this email has already been registered..!!Try again with a different email",
          });
      }
      const salt = await bcrypt.genSalt(10);
      const securePassword = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        password: securePassword,
        email: req.body.email,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      // console.log(jwdData);
      // res.json({"user":user})
      res.json({ authtoken });

      // .then((user) => res.json(user))
      // .catch(err=>{console.log(err)
      // res.json({"error": "Please enter a unique value for the email", message: err.message})});
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

module.exports = router;
