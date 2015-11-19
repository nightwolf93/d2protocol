/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var BooleanByteWrapper = require('../../../boolean-byte-wrapper');
var HouseInformations = (function () {
    function HouseInformations() {
        this.houseId = 0;
        this.doorsOnMap = [];
        this.ownerName = '';
        this.isOnSale = false;
        this.isSaleLocked = false;
        this.modelId = 0;
    }
    HouseInformations.prototype.getTypeId = function () {
        return HouseInformations.ID;
    };
    HouseInformations.prototype.reset = function () {
        this.houseId = 0;
        this.doorsOnMap = [];
        this.ownerName = '';
        this.isOnSale = false;
        this.isSaleLocked = false;
        this.modelId = 0;
    };
    HouseInformations.prototype.serialize = function (param1) {
        this.serializeAs_HouseInformations(param1);
    };
    HouseInformations.prototype.serializeAs_HouseInformations = function (param1) {
        var _loc2_ = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.isOnSale);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.isSaleLocked);
        param1.writeByte(_loc2_);
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element houseId.');
        }
        param1.writeVarInt(this.houseId);
        param1.writeShort(this.doorsOnMap.length);
        var _loc3_ = 0;
        while (_loc3_ < this.doorsOnMap.length) {
            if (this.doorsOnMap[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.doorsOnMap[_loc3_] + ') on element 2 (starting at 1) of doorsOnMap.');
            }
            param1.writeInt(this.doorsOnMap[_loc3_]);
            _loc3_++;
        }
        param1.writeUTF(this.ownerName);
        if (this.modelId < 0) {
            throw new Error('Forbidden value (' + this.modelId + ') on element modelId.');
        }
        param1.writeVarShort(this.modelId);
    };
    HouseInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_HouseInformations(param1);
    };
    HouseInformations.prototype.deserializeAs_HouseInformations = function (param1) {
        var _loc5_ = 0;
        var _loc2_ = param1.readByte();
        this.isOnSale = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.isSaleLocked = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.houseId = param1.readVarUhInt();
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element of HouseInformations.houseId.');
        }
        var _loc3_ = param1.readUnsignedShort();
        var _loc4_ = 0;
        while (_loc4_ < _loc3_) {
            _loc5_ = param1.readInt();
            if (_loc5_ < 0) {
                throw new Error('Forbidden value (' + _loc5_ + ') on elements of doorsOnMap.');
            }
            this.doorsOnMap.push(_loc5_);
            _loc4_++;
        }
        this.ownerName = param1.readUTF();
        this.modelId = param1.readVarUhShort();
        if (this.modelId < 0) {
            throw new Error('Forbidden value (' + this.modelId + ') on element of HouseInformations.modelId.');
        }
    };
    HouseInformations.ID = 111;
    return HouseInformations;
})();
module.exports = HouseInformations;