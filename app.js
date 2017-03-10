'use strict';

var sampleApp = angular.module("sampleApp", ["firebase"]);

sampleApp.controller("SampleCtrl",function SampleCtrl($scope, $firebaseObject) {
 
     var ref = firebase.database().ref('data');
  // download the data into a local object
   $scope.data = $firebaseObject(ref);
  // putting a console.log here won't work, see below

  
  $scope.data.message = "hello again user!";

  $scope.data.$save().then(function(ref) {
  ref.key === $scope.data.$id; // true
}, function(error) {
  console.log("Error:", error);
});
  
});