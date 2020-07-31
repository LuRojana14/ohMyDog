const express = require("express");
const router = express.Router();

const User = require("./../models/UserModel");



//SHOW ALL DOGS IN HOME PRIVATE PAGE
router.get('/homeprivate', (req, res, next) => {
  User.find()
    .then(allTheUsersFromDB => {
      console.log('hola');
      // console.log('Retrieved dogs from DB:', allTheUsersFromDB);
      res.render('homeprivate', { alldogs: allTheUsersFromDB });
    })
    .catch(error => {
      console.log('Error while getting the books from the DB: ', error);
    })
});


//EDIT USER
router.get('/edituser', (req, res, next) => {
  res.render("edituser");
});


router.post("/edituser", (req, res, next) => {
  console.log('HERE', req.session);
  const { namedog, image, breed, sex, telephone, description, age, weigth, cp } = req.body;
  const _id = req.session.currentUser._id;
  User.findByIdAndUpdate( _id, { namedog, image, breed, sex, telephone, description, age, weigth, cp }, {new: true})
  .then((updateUser) => {
    res.redirect('/profile');
  })
  .catch((error) => {
    console.log(error);
  })
});


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