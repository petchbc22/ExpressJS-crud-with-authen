const db = require("../models");

const User = db.user;

var bcrypt = require("bcryptjs");

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content aa.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.teamleaderBoard = (req, res) => {
  res.status(200).send("Teamleader Content.");
};

exports.adminandteamleaderBoard = (req, res) => {
  res.status(200).send("Admin || Teamleader Content.");
};

exports.allMovie = (req, res) => {
  res.status(200).send("allMovie");
};

exports.updatePassword = async (req, res) => {
  const email = req.body.email;
  const password = req.body.oldpassword;
  const newPassword = req.body.password;

  User.findOne({
    where: {
      email: email,
    },
  })
    .then((user) => {
      console.log(user);
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      var passwordIsValid = bcrypt.compareSync(password, user.password);
      if (!passwordIsValid) {
        return res.status(404).send({
          message: "Invalid Old Password!",
        });
      }
      else{
        User.update({password : bcrypt.hashSync(newPassword, 8)}, {
          where: { id: user.id },
        }).then((data) => {
          return res.send({ message: "success" });
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
  
    });
};

//================ R ================================
// exports.allMovie = (req,res) =>{

//     sql.query("SELECT * FROM movie", (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }

//       console.log("movie: ", res);
//       result(null, res);
//       res.status(200).send(res);
//     });

// }
