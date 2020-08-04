const express = require("express");
const router = express.Router();

const User = require("../models/UserModel");
const Dog = require("../models/DogModel");

router.get("/", function (req, res, next) {
  res.render("index", { title: "ohmydog" });
});

//MIDDLEWARE
router.use((req, res, next) => {
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect("/auth/login");
  }
});

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
    User.findOne({ _id: req.session.currentUser._id })
      .populate("dog")
      .then((myUser) => {
        // console.log("hola", myUser.dog[0])
        res.render("profile", { myInfoProfile: myUser });
      })
      .catch((error) => {
        console.log("Error");
      });
  }
});

//EDIT USER

router.post("/editUser", (req, res, next) => {
  const { username, cp, telephone } = req.body;
  const _id = req.session.currentUser._id;

  User.findByIdAndUpdate(_id, { telephone, cp, username }, { new: true })
    .then((updateProfile) => {
      res.redirect("/users/profile");
    })
    .catch((error) => {
      console.log(error);
    });
});

//EDIT DOGPROFILE

router.post("/dogedit", (req, res, next) => {
  console.log(req.body, "holmmmmmmmma");
  const { _id, namedog, description, age, weight, breed, sex } = req.body;
  const user_id = req.session.currentUser._id;
  // _id.find((id) => id == id);
  Dog.findByIdAndUpdate(
    _id,
    { namedog, description, age, weight, breed, sex },
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

router.get("/:userId", (req, res, next) => {
  let userId = req.params.userId;
  if (!/^[0-9a-fA-F]{24}$/.test(userId)) {
    return res.status(404).render("not-found");
  }
  User.findOne({ _id: userId })
    .populate("dog")
    .then((user) => {
      if (!user) {
        return res.status(404).render("not-found");
      }
      res.render("oneUserdetail", { user });
    })
    .catch(next);
});

//ACA TERMINA EL POPULATE

//REVIEW

router.get("/reviews", function (req, res, next) {
  res.render("oneUser");
});

//AGREGAR REVIEW
router.post("/reviews/add", (req, res, next) => {
  const { userId, user, comments } = req.body;
  User.update({ _id: userId }, { $push: { reviews: { user, comments } } })

    .then((user) => {
      res.redirect("/users/oneUser/" + userId);
    })
    .catch((error) => {
      console.log(error);
    });
});

//NUEVA VERSION REVIEW
// router.post('/reviews/add', (req, res, next) => {
//   const { user, comments } = req.body;
//   User.update(
//     { _id: req.query.user_id },
//     { $push: { reviews: { user, comments } } }
//     )

//     .then(user => {
//       res.redirect('/users/oneUser/' + req.query.book_id);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

// VIEW PROFILE EN SEE MORE

router.get("/oneDog/:dogId", (req, res, next) => {
  Dog.findById(req.params.dogId)
    .then((theDog) => {
      res.render("oneDogdetail", { dog: theDog });
    })
    .catch((error) => {
      console.log("Error");
    });
});

//ADD NEW DOG

router.get("/add/newdog", (req, res, next) => {
  res.render("newdog");
});

router.post("/add/newdog", (req, res, next) => {
  console.log(req.body);
  const { namedog, breed, sex, description, age, weight } = req.body;
  const userid = req.session.currentUser._id;
  console.log(userid)
  Dog.create({
    namedog: namedog,
    breed: breed,
    sex: sex,
    description: description,
    age: age,
    weight: weight,
  })
    .then((respuesta) => {
      const dogId = respuesta._id
      User.findByIdAndUpdate(userid, { $push: dog = dogId });
      res.redirect("/users/profile");
    })

    .catch((error) => {
      console.log(error);
    });
});

//DELETE

// User.findByIdAndUpdate( req.session.currentUser._id, {dog: {$pull:_id}})
// .then((user) => console.log(user))
// .catch((err) => console.log(err));

// User.deleteOne({dog: "_id"})
// .then((user) => console.log(user))
// .catch((err) => console.log(err));

module.exports = router;
