var myApp = angular.module('myApp', []);

myApp.controller( 'HighfiveController', function(HighFiveGen){
  console.log('NG');

  var vm = this;




  vm.clickFunction = function (){
    vm.highFive();
    vm.incCounter();

  };

  var skill = HighFiveGen.getRandom(1,10);
  vm.count = HighFiveGen.countGetter();

  vm.incCounter = function (){
    console.log('in incCounter');
    HighFiveGen.countSetter();
    vm.count = HighFiveGen.countGetter();



  };

  vm.highFive = function(){
    var quality = HighFiveGen.getRandom(1,10);
    var comparison = HighFiveGen.highFive(quality, skill);
    console.log(quality);
    console.log(skill);
    var results;
    if (comparison === true) {
    results = 'High Five!';
    }else {
     results = 'You Missed!';
    }
    return results;
  };//end vm.highFive

  vm.appendObject = {
     result: vm.highFive,
     count: vm.incCounter
  };



});//end controller
