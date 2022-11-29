// const createError = require("./createError");
// const { VerifyToken } = require("./VerifyToken");


// exports.verifyUser = (req, res, next) => {
//   VerifyToken(req, res, next, () => {
//     if (req.user.id === req.params.id || req.user.isAdmin) {
//       next();
//     } else {
//       return next(createError(403, "You are not authorized!"));
//     }
//   });
// };

// exports.verifyAdmin = (req, res, next) => {
//   VerifyToken(req, res, next, () => {
//     console.log(req.user,' pacchi na')
//   //   if (req.user.isAdmin) {
//   //     next();
//   //   } else {
//   //     return next(createError(403, "You are not authorized!"));
//   //   }
//   //   console.log(req.user);
//    });
//   console.log(req.user,'token koi')
// };
