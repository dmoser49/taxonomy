var ForagerBee = function() {
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
  ForagerBee.prototype.constructor = ForagerBee;
};

ForagerBee.prototype = new Bee;
ForagerBee.prototype.forage = function(treasure){
  this.treasureChest.push(treasure);
};
