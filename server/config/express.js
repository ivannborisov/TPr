var express = require('express');
var stylus = require('stylus');
var bodyParser = require('body-parser');
//var cookieParser = require('cookie-parser');
//var passport = require('passport');
//var session = require('express-session');


module.exports = function (app, config){

    app.set('view engine', 'jade');
    app.set('views' ,config.rootPath+'/server/views');
 //   app.use(cookieParser());
 //   app.use(bodyParser());
  //  app.use(session({'secret': 'Iborisov2007951727741963456'}))
    app.use(stylus.middleware(
        {
            src: config.rootPath + '/public',
            compile: function (str , path) {
                return stylus(str).set('filename', path);
            }
        }
    ));
//    app.use(passport.initialize());
//    app.use(passport.session());
    app.use(express.static(config.rootPath + '' + '/public'));
 //   app.use(function (req,res,next){
//        next();
//    });

}