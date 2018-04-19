var mongoose = require('mongoose');
var request = require('request');
var user = require('../models/user');
var constants = require('../constants/constants.json');


exports.userregister = function(userName,callback){

    console.log('username...',userName);
    var newUser = new user({

        userName : userName

    });


    user.find({userName : userName}, function(err,users){

        var totalUsers = users.length;

        if (totalUsers == 0) {

            newUser.save(function(err){

                if (!err) {

                    //callback(constants.success.msg_reg_success);
                    callback({numUsers:users.length});

                } else {

                    callback(constants.error.msg_reg_failure);

                }
            });
        } else {

            callback(constants.error.msg_reg_exists);

        }


    });

}