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

router.get("/profile", (req, res, next) => {
  if (req.session.currentUser._id) {
    User.findOne({ _id: req.session.currentUser._id})
    .populate('dog')
    .then(myUser => {
      
      // console.log("hola", myUser.dog[0])
      res.render("profile", { myInfoProfile: myUser});
    })
     .catch(error => {
        console.log('Error');
      })
    }});


//EDIT USER

router.post("/editUser", (req, res, next) => {
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
  { namedog, image, breed, sex, description, age, weigth},
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


//EDIT DOGPROFILE

router.post("/editDog", (req, res, next) => {
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
  { namedog, image, breed, sex, description, age, weigth},
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

router.get("/reviews", function (req, res, next) {
  res.render("oneUser");
});

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

//ADD NEW DOG

router.get("/add/newdog", (req, res, next) => {
  res.render("newdog");
});

router.post('/add/newdog', (req, res, next) => {
  const { namedog, image, breed, sex, description, age, weigth } = req.body;
  const newDog = new Dog({ namedog, image, breed, sex, description, age, weigth})
  newDog.save()
  .then((dog) => {
    res.redirect('/users/profile');
  })
  .catch((error) => {
    console.log(error);
  })
});

//DELETE

// User.findByIdAndUpdate( req.session.currentUser._id, {dog: {$pull:_id}})
// .then((user) => console.log(user))
// .catch((err) => console.log(err));

// User.deleteOne({dog: "_id"})
// .then((user) => console.log(user))
// .catch((err) => console.log(err));

module.exports = router;
