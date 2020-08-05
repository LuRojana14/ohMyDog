const express = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/UserModel");
const Dog = require("../models/DogModel");
const uploadCloud = require('../config/cloudinary.js');

const router = express.Router();
const bcryptSalt = 10;

//SIGN UP

router.get("/signup", (req, res, next) => {
  res.render("auth/signup", {
    errorMessage: "",
  });
});

router.post("/signup", uploadCloud.single('photo'), (req, res, next) => {
  const nameInput = req.body.username;
  const emailInput = req.body.email;
  const passwordInput = req.body.password;
  const namedogInput = req.body.namedog;
  const imageInput = req.file.url;
  const descriptionInput = req.body.description;
  const ageInput = req.body.age;
  const weigthInput = req.body.weight;
  const breedInput = req.body.breed;
  const sexInput = req.body.sex;
  const telephoneInput = req.body.telephone;
  const cpInput = req.body.cp;

  if (emailInput === "" || passwordInput === "") {
    res.render("auth/signup", {
      errorMessage: "Enter both email and password to sign up.",
    });
    return;
  }

  User.findOne({ mail: emailInput }, (err, existingUser) => {
    if (err) {
      next(err);
      return;
    }

    if (existingUser !== null) {
      res.render("auth/signup", {
        errorMessage: `The email ${emailInput} is already in use.`,
      });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashedPass = bcrypt.hashSync(passwordInput, salt);

    const dogSubmission = {
      namedog: namedogInput,
      //          condicion       TRUE          FALSE
      image: imageInput === "" ? undefined : imageInput,
      description: descriptionInput,
      age: ageInput,
      weigth: weigthInput,
      breed: breedInput,
      sex: sexInput,
    };

    Dog.create(dogSubmission).then((dog) => {
      const userSubmission = {
        username: nameInput,
        mail: emailInput,
        password: hashedPass,
        telephone: telephoneInput,
        cp: cpInput,
        dog: dog._id,
      };
      const theUser = new User(userSubmission);
      console.log(userSubmission);
      theUser.save((err) => {
        if (err) {
          console.log(err);
          res.render("auth/signup", {
            errorMessage: "Something went wrong. Try again later.",
          });
          return;
        }

        res.redirect("/users/homeprivate");
      });
    });
  });
});

//LOGIN

router.get("/login", (req, res, next) => {
  res.render("auth/login", {
    errorMessage: "",
  });
});

router.post("/login", (req, res, next) => {
  const emailInput = req.body.email;
  const passwordInput = req.body.password;

  if (emailInput === "" || passwordInput === "") {
    res.render("auth/login", {
      errorMessage: "Enter both email and password to log in.",
    });
    return;
  }

  User.findOne({ mail: emailInput }, (err, theUser) => {
    if (err || theUser === null) {
      res.render("auth/login", {
        errorMessage: `There isn't an account with email ${emailInput}.`,
      });
      return;
    }

    if (!bcrypt.compareSync(passwordInput, theUser.password)) {
      res.render("auth/login", {
        errorMessage: "Invalid password.",
      });
      return;
    }

    req.session.currentUser = theUser;
    res.redirect("/users/homeprivate");
  });
});

//LOGOUT

router.get("/logout", (req, res, next) => {
  if (!req.session.currentUser) {
    res.redirect("/");
    return;
  }

  req.session.destroy((err) => {
    if (err) {
      next(err);
      return;
    }

    res.redirect("/");
  });
});

module.exports = router;
