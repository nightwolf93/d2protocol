var StatisticDataInt = function() {
  this.value = 0;
};



StatisticDataInt.prototype.serialize = function(output) {
  this.serializeAs_StatisticDataInt(output);
};

StatisticDataInt.prototype.deserialize = function(input) {
  this.deserializeAs_StatisticDataInt(input);
};

StatisticDataInt.prototype.serializeAs_StatisticDataInt = function(output) {
  this.serializeAs_StatisticData(param1);
  param1.writeInt(this.value);
};

StatisticDataInt.prototype.deserializeAs_StatisticDataInt = function(input) {
  this.deserialize(param1);
  this.value = param1.readInt();
};

StatisticDataInt.prototype.getTypeId = function() {
  return 485;
};

StatisticDataInt.prototype.getClassName = function() {
  return 'StatisticDataInt';
};

module.exports.id = 485;
module.exports.class = StatisticDataInt;