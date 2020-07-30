const express = require("express");
const router = express.Router();

const User = require("./../models/UserModel");


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

// router.get('/books', (req, res, next) => {
//   Book.find()
//     .then(allTheBooksFromDB => {
//       // console.log('Retrieved books from DB:', allTheBooksFromDB);
//       res.render('books', { books: allTheBooksFromDB });
//     })
//     .catch(error => {
//       console.log('Error while getting the books from the DB: ', error);
//     })
// });


module.exports = router;