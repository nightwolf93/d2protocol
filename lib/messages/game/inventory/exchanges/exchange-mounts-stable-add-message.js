var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeMountsStableAddMessage = function() {
  this.mountDescription = [];
};

util.inherits(ExchangeMountsStableAddMessage, BaseMessage);

ExchangeMountsStableAddMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeMountsStableAddMessage(output);
};

ExchangeMountsStableAddMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeMountsStableAddMessage(input);
};

ExchangeMountsStableAddMessage.prototype.serializeAs_ExchangeMountsStableAddMessage = function(output) {
  param1.writeShort(this.mountDescription.length);
  var _loc2_ = 0;
  while (_loc2_ < this.mountDescription.length) {
    (this.mountDescription[_loc2_]).serializeAs_MountClientData(param1);
    _loc2_++;
  }
};

ExchangeMountsStableAddMessage.prototype.deserializeAs_ExchangeMountsStableAddMessage = function(input) {
  var _loc4_ = null;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new MountClientData();
    _loc4_.deserialize(param1);
    this.mountDescription.push(_loc4_);
    _loc3_++;
  }
};

ExchangeMountsStableAddMessage.prototype.getMessageId = function() {
  return 6555;
};

ExchangeMountsStableAddMessage.prototype.getClassName = function() {
  return 'ExchangeMountsStableAddMessage';
};

module.exports.id = 6555;
module.exports.class = ExchangeMountsStableAddMessage;