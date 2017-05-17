myApp.controller( 'ifController', function(HighFiveGen){
  console.log('iron fist');

  var vm = this;
  vm.countToDisplay = HighFiveGen.counter;
  vm.skill = HighFiveGen.getRandom(1,10);

  vm.highFive = function(){
    vm.quality = HighFiveGen.getRandom(1,10);
    vm.comparison = HighFiveGen.highFive(vm.quality, vm.skill);
    // console.log(quality);
    // console.log(skill);
    // vm.results;
    if (vm.comparison === true) {
    vm.results = 'High Five!';
    HighFiveGen.countSetter();
    vm.countToDisplay = HighFiveGen.countGetter();
    console.log('countToDisplay', vm.countToDisplay);
    }else {
     vm.results = 'You Missed!';
    }
    vm.resultString = vm.results;
  };//end vm.highFive
});//end controller
