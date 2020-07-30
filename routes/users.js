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
router.get('/newuser/add', (req, res, next) => {
  res.render("user-add");
});


router.post('/newuser/add', (req, res, next) => {
  const { username, mail, password, namedog, image, breed, sex, telephone, description, age, weigth, cp } = req.body;
  const newUser = new User({ username, mail, password, namedog, image, breed, sex, telephone, description, age, weigth, cp })
  newUser.save()
  .then((newuser) => {
    res.redirect('/profile');
  })
  .catch((error) => {
    console.log(error);
  })
});

//EDIT A USER

router.get("/user/edit", (req, res, next) => {
  Book.findOne({ _id: req.query.user_id })
    .then((user) => {
      res.render("user-edit", { user });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/user/edit", (req, res, next) => {
  const { username, mail, password, namedog, image, breed, sex, telephone, description, age, weigth, cp } = req.body;
  User.update(
    { _id: req.query.user_id },
    { $set: { title, author, description, rating }}, 
    { new: true})

    .then((user) => {
      res.redirect("/profile");
    })
    .catch((error) => {
      console.log(error);
    });
});


//DELETE A USER


//REVIEW




module.exports = router;