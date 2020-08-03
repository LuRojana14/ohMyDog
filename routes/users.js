const express = require("express");
const router = express.Router();

const User = require("../models/UserModel");
const Dog = require('../models/DogModel');


//SHOW ALL DOGS IN HOME PRIVATE PAGE
router.get("/homeprivate", (req, res, next) => {
  Dog.find()
    .then((allTheDogFromDB) => {
      res.render("homeprivate", { alldogs: allTheDogFromDB });
    })
    .catch((error) => {
      console.log("Error while getting the books from the DB: ", error);
    });
});


router.get("/profile", function (req, res, next) {
  res.render("profile");
});

//ROUTER.POST ORIGINAL
// router.post("/prueba", (req, res, next) => {
//     const {
//     namedog,
//     image,
//     breed,
//     sex,
//     telephone,
//     description,
//     age,
//     weigth,
//     cp,
//   } = req.body;
//   const _id = req.session.currentUser._id;
//   Dog.findByIdAndUpdate(
//     _id,
//     { namedog, image, breed, sex, telephone, description, age, weigth, cp },
//     { new: true }
//   )
//     .then((updateDog) => {
//       res.redirect("/users/profile");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

//ROUTER.POST MODIFICADO 

router.post("/prueba", (req, res, next) => {
  const {
  namedog,
  image,
  breed,
  sex,
  description,
  age,
  weigth,
  cp,
  telephone,
  
} = req.body;
const _id = req.session.currentUser._id;
Dog.findByIdAndUpdate(
  _id,
  { namedog, image, breed, sex, telephone, description, age, weigth, cp },
  { new: true }
)

User.findByIdAndUpdate(
  _id,
  { telephone, cp },
  { new: true }  
)
  .then((updateDog) => {
    res.redirect("/users/profile");
  })
  .catch((error) => {
    console.log(error);
  });
});


// ACA VOY A HACER EL POPULATE

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

//REVIEW

// router.get("/reviews", function (req, res, next) {
//   res.render("oneUser");
// });

//NUEVA VERSION AGREGAR REVIEW
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

router.get("/oneDog/:dogId", (req, res, next) => {
  Dog.findById(req.params.dogId)
    .then(theDog => {
      res.render("oneDogdetail", { dog: theDog });
    })
    .catch(error => {
      console.log('Error')
    })
});

//NEW DOG

router.get("/newdog", function (req, res, next) {
  res.render("newdog");
});

module.exports = router;
