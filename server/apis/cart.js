

const dbHelpers = require("../dbHelpers/dbHelpers");
const express = require("express");
const router = express.Router();

// module.exports = function (app) {

    // route to update cart details
    router.post('/updateCart', function (req, res) {
      dbHelpers.updateCartDetails(req.body)
            .then(function(response){
              console.log(response, "response")
            })
            .catch(function(err){
                console.log(err, "error")
            })
    });

    // route to fetch cart details
    router.get('/cart', function (req, res) {
      // console.log("cnsd")
        dbHelpers.fetchCartDetails()
              .then(function(response){
                console.log(response, "response")
                res.send(response);
              })
              .catch(function(err){
                  console.log(err, "error")
                  res.status(400).send(err)
              })
    });


// };

module.exports = router;
