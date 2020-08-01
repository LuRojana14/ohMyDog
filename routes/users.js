const express = require("express");
const router = express.Router();

const User = require("../models/UserModel");
const Dog = require('../models/DogModel');


//SHOW ALL DOGS IN HOME PRIVATE PAGE
router.get("/homeprivate", (req, res, next) => {
  Dog.find()
    .then((allTheDogFromDB) => {
      // console.log("hola");
      // console.log('Retrieved dogs from DB:', allTheDogFromDB);
      res.render("homeprivate", { alldogs: allTheDogFromDB });
    })
    .catch((error) => {
      console.log("Error while getting the books from the DB: ", error);
    });
});

//ACA VOY A HACER EL POPULATE

router.get('/:userId', (req, res, next) => {
  let userId = req.params.userId;
  if (!/^[0-9a-fA-F]{24}$/.test(userId)) { 
    return res.status(404).render('not-found');
  }
  User.findOne({'_id': userId})
    .populate('dog')
    .then(user => {
      if (!user) {
          return res.status(404).render('not-found');
      }
      res.render("oneUserdetail", { user })
    })
    .catch(next)
});

//ACA TERMINA EL POPULATE

router.get("/profile", function (req, res, next) {
  res.render("profile");
});


router.post("/pedo", (req, res, next) => {
    const {
    namedog,
    image,
    breed,
    sex,
    telephone,
    description,
    age,
    weigth,
    cp,
  } = req.body;
  const _id = req.session.currentUser._id;
  User.findByIdAndUpdate(
    _id,
    { namedog, image, breed, sex, telephone, description, age, weigth, cp },
    { new: true }
  )
    .then((updateUser) => {
      res.redirect("/users/profile");
    })
    .catch((error) => {
      console.log(error);
    });
});


//REVIEW

router.post('/reviews/add', (req, res, next) => {
  
  const { userId, user, comments, } = req.body;
  User.update(
    { _id: userId },
    { $push: { reviews: { user, comments } } }
    )

    .then(user => {
      res.redirect('/users/oneUser/' + userId);
    })
    .catch(error => {
      console.log(error);
    });
});


// VIEW PROFILE EN SEE MORE

router.get("/oneUser/:userId", (req, res, next) => {
  User.findById(req.params.userId)
    .then(theUser => {
      res.render("oneUserdetail", { user: theUser });
    })
    .catch(error => {
      console.log('Error')
    })
});






module.exports = router;
