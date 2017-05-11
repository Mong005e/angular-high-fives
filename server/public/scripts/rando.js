myApp.service('HighFiveGen', function (){

// var counter =0;
//counterGetter

//counterSetter
 this.getRandom= function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


this.highFive = function(quality, skill){
  console.log('in highFiveGen');
    if (quality >= skill) {
      return true;
    }else {
      return false;
    }
  };
});
