const router = require('express').Router();
let Register = require('../models/register.model');
//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');

//using mysql
const mysql = require('mysql');

//router.route('/').post((req, res) => {
//    debugger;
//   Register.findOne(
//        { email: req.body.email }
  //  ).then(user => {
    //    debugger;
     //   if (user) {
            // need to bcrypt input password cause the db password stored as bcrypted
       //     const roundSalt = 10;
         //   bcrypt.genSalt(roundSalt, (err, salt) => {
           //     if (err) {
             //       console.log('Gensalt Error: ' + err);
               // } else {
                 //   bcrypt.hash(req.body.password, salt, (err, hash) => {
                   //     if (err) {
                     //       console.log('Hash Error :' + err);
                       // } else {
                         // if (bcrypt.compareSync(user.password, hash)) {
                            //    const signedUser = {
                           //         _id: user._id,
                             //       email: user.email,
                               //     password: user.password
                                //}
                                //let token = jwt.sign(signedUser, 'secret', {
                                  //  expiresIn: 120000
                                //});
                                //res.send({'AccessToken': token, 'user': user.email});
                            //}
                            //else {
                              //  res.json('User does not Exist: ');
                            //}
                        //}
                    //});
                //}
            //});
        //}
        //else {
          //  res.json('User does not Exist: ');
        //}
    //}).catch(err => {
      //  console.log('Error :' + err);
    //});

     //mysql login
    //connect mysql
  const con = mysql.createConnection({
      host: 'localhost',
      user: process.env.MYSQLUSER || 'newuser',
      password: process.env.MYSQLPASS || 'Welcome@123',
      database: 'mydb'
  });

  con.connect((err) => {
      if (err) {
          console.log('Error in connection' + err);
          return;
      } else {
          console.log('Connection established');     
          var mail = req.body.email;
          var pass = req.body.password;
          if(mail && pass){
              var sql = "SELECT * FROM mydb.registeredusers WHERE email = ? AND password = ?";
              con.query(sql,[mail, pass], (err, result) => {
                  if(result.length > 0){
                      res.send(result);
                  }
              });
          } else {
              res.send('Please enter email & password');
          }     
      }
  });
});

module.exports = router;
