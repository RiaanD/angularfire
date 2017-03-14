'use strict';

// Required for FirebaseUI
var firebase = require('firebase');
var firebaseui = require('firebaseui');

// Angular App
var sampleApp = angular.module("sampleApp", ["firebase"]);

sampleApp.controller("SampleCtrl", function SampleCtrl($scope, $firebaseObject) {

  var ref = firebase.database().ref('data');
  // download the data into a local object
  $scope.data = $firebaseObject(ref);

  $scope.data.message = "hello again Boss";

  $scope.data.$save().then(function (ref) {
    ref.key === $scope.data.$id; // true
  }, function (error) {
    console.log("Error:", error);
  });

});



  







