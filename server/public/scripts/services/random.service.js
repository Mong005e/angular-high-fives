myApp.service('HighFiveGen', function (){

var self =this;
self.counter =0;
//counterGetter
this.countGetter = function(){
  console.log('this is counter', self.counter);
  return self.counter;
};

//counterSetter
this.countSetter = function(){
  self.counter++;
};

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
