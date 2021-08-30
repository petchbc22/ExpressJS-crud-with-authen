

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

exports.allMovie = (req, res) => {
  res.status(200).send("allMovie");
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