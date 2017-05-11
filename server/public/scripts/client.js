var myApp = angular.module('myApp', []);

myApp.controller( 'HighfiveController', function(HighFiveGen){
  console.log('NG');

  var vm = this;

  console.log();


  var skill = HighFiveGen.getRandom(1,10);


  vm.highFive = function(){
    var quality = HighFiveGen.getRandom(1,10);
    var whatever = HighFiveGen.highFive(quality, skill);
    console.log(quality);
    console.log(skill);
    if (whatever === true) {
      console.log('High Five');
    }else {
      console.log('Miss!');
    }

  };//end vm.highFive



});//end controller
