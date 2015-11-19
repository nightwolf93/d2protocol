/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var HouseInformationsForSell = (function () {
    function HouseInformationsForSell() {
        this.modelId = 0;
        this.ownerName = '';
        this.ownerConnected = false;
        this.worldX = 0;
        this.worldY = 0;
        this.subAreaId = 0;
        this.nbRoom = 0;
        this.nbChest = 0;
        this.skillListIds = [];
        this.isLocked = false;
        this.price = 0;
    }
    HouseInformationsForSell.prototype.getTypeId = function () {
        return HouseInformationsForSell.ID;
    };
    HouseInformationsForSell.prototype.reset = function () {
        this.modelId = 0;
        this.ownerName = '';
        this.ownerConnected = false;
        this.worldX = 0;
        this.worldY = 0;
        this.subAreaId = 0;
        this.nbRoom = 0;
        this.nbChest = 0;
        this.skillListIds = [];
        this.isLocked = false;
        this.price = 0;
    };
    HouseInformationsForSell.prototype.serialize = function (param1) {
        this.serializeAs_HouseInformationsForSell(param1);
    };
    HouseInformationsForSell.prototype.serializeAs_HouseInformationsForSell = function (param1) {
        if (this.modelId < 0) {
            throw new Error('Forbidden value (' + this.modelId + ') on element modelId.');
        }
        param1.writeVarInt(this.modelId);
        param1.writeUTF(this.ownerName);
        param1.writeBoolean(this.ownerConnected);
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
        }
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
        }
        param1.writeShort(this.worldY);
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        param1.writeByte(this.nbRoom);
        param1.writeByte(this.nbChest);
        param1.writeShort(this.skillListIds.length);
        var _loc2_ = 0;
        while (_loc2_ < this.skillListIds.length) {
            param1.writeInt(this.skillListIds[_loc2_]);
            _loc2_++;
        }
        param1.writeBoolean(this.isLocked);
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element price.');
        }
        param1.writeVarInt(this.price);
    };
    HouseInformationsForSell.prototype.deserialize = function (param1) {
        this.deserializeAs_HouseInformationsForSell(param1);
    };
    HouseInformationsForSell.prototype.deserializeAs_HouseInformationsForSell = function (param1) {
        var _loc4_ = 0;
        this.modelId = param1.readVarUhInt();
        if (this.modelId < 0) {
            throw new Error('Forbidden value (' + this.modelId + ') on element of HouseInformationsForSell.modelId.');
        }
        this.ownerName = param1.readUTF();
        this.ownerConnected = param1.readBoolean();
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of HouseInformationsForSell.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of HouseInformationsForSell.worldY.');
        }
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of HouseInformationsForSell.subAreaId.');
        }
        this.nbRoom = param1.readByte();
        this.nbChest = param1.readByte();
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readInt();
            this.skillListIds.push(_loc4_);
            _loc3_++;
        }
        this.isLocked = param1.readBoolean();
        this.price = param1.readVarUhInt();
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element of HouseInformationsForSell.price.');
        }
    };
    HouseInformationsForSell.ID = 221;
    return HouseInformationsForSell;
})();
module.exports = HouseInformationsForSell;