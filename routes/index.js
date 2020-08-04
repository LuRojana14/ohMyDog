var express = require('express');
var router = express.Router();

// const User = require('../models/UserModel.js')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get("/profile", function (req, res, next) {
//   res.render("profile");
// });

// router.get("/edituser", function (req, res, next) {
//   res.render("edituser");
// });

// router.get("/reviews", function (req, res, next) {
//   res.render("reviews");
// });

module.exports = router;

// verificamos si el usuario tiene una session activa, de ser así, lo redirigimos a la siguiente ruta, en este caso
// /homeprivate
// en caso contrario, redirigimos al usuario a /login


//MIDDLEWARE

// router.use((req, res, next) => {
//   if (req.session.currentUser) { 
//     next(); 
//   } else {
//     res.redirect("/login");
//   }
// });
 
// renderizamos la plantilla homeprivate.hbs con el username
// deconstruimos en la variable username el username de req.session.currentUser

// router.get("/user-add", function (req, res, next) {
//   res.render("user-add");
// });


// router.get("/logout", (req, res, next) => {
//   req.session.destroy((err) => {
//     // si no puede acceder a los datos de sesión, redirige a /login
//     res.redirect("/login");
//   });
// });


// const isLoggedIn = (req, res, next) => {
//   if (req.session.currentUser) { // <== if there's user in the session (user is logged in)
//     next(); // ==> go to the next route 
//   } else {
//     res.redirect("/");
//   }
// }

// router.get("/homeprivate", isLoggedIn, function (req, res, next) {
//   res.render("homeprivate");
// });

