const express = require("express");
const router = express.Router();

const User = require("./../models/UserModel");



//SHOW ALL DOGS IN HOME PRIVATE PAGE
router.get('/homeprivate', (req, res, next) => {
  User.find()
    .then(allTheUsersFromDB => {
      // console.log('Retrieved books from DB:', allTheBooksFromDB);
      res.render('homeprivate', { alldogs: allTheUsersFromDB });
    })
    .catch(error => {
      console.log('Error while getting the books from the DB: ', error);
    })
});


//CREATE A NEW USER
router.get('/edituser', (req, res, next) => {
  res.render("edituser");
});


router.post("/edituser", (req, res, next) => {
  console.log('HERE', req.session);
  const { namedog, image, breed, sex, telephone, description, age, weigth, cp } = req.body;
  const _id = req.session.currentUser._id;
  User.findByIdAndUpdate( _id, { namedog, image, breed, sex, telephone, description, age, weigth, cp })
  .then((updateUser) => {
    res.redirect('/profile');
  })
  .catch((error) => {
    console.log(error);
  })
});

//EDIT A USER

// router.get("/user/edit", (req, res, next) => {
//   Book.findOne({ _id: req.query.user_id })
//     .then((user) => {
//       res.render("user-edit", { user });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// router.post("/user/edit", (req, res, next) => {
//   const { username, mail, password, namedog, image, breed, sex, telephone, description, age, weigth, cp } = req.body;
//   User.update(
//     { _id: req.query.user_id },
//     { $set: { username, mail, password, namedog, image, breed, sex, telephone, description, age, weigth, cp }}, 
//     { new: true})

//     .then((user) => {
//       res.redirect("/profile");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });


//DELETE A USER

// User.deleteOne({ title: "Carrot Cake" })
//   .then((recipe) => console.log("Receta eliminada", recipe))

//   .catch((error) => {
//     console.error("Error connecting to the database", error);
//   });


//REVIEW

// router.post('/reviews/add', (req, res, next) => {
//   const { user, comments } = req.body;
//   User.update(
//     { _id: req.query.user_id },
//     { $push: { reviews: { user, comments } } }
//   )
//     .then(user => {
//       res.redirect('/profile' + req.query.user_id);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });



module.exports = router;