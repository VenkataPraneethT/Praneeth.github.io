
var Q = require('q');
var cartDetails = require('../models/cart');
var mongoose = require('mongoose');

function DbHelpers() {


}

DbHelpers.prototype = {
    updateCartDetails:function(cartObj){
      var deferred = Q.defer();
      var options = { new: true };
      cartDetails.updateMany({"UserId": cartObj.userId}, cartObj,  function (err, details) {
          if (err) {
              deferred.reject(err);
          }
          deferred.resolve(details);
      });
      return deferred.promise;
    },
    fetchCartDetails:function(){
      var deferred = Q.defer();
      cartDetails.find({}, function (err, details) {
          // if there is an error retrieving, send the error. nothing after res.send(err) will execute
          // console.log(err, details, "Tetsts")
          if (err) {
              deferred.reject(err);
          }
          deferred.resolve(details);
      });
      return deferred.promise;
    }

};


module.exports = new DbHelpers();
