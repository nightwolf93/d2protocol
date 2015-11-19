/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MountClientData = require('../../../../types/game/mount/mount-client-data');
var ExchangeMountsPaddockAddMessage = (function (_super) {
    __extends(ExchangeMountsPaddockAddMessage, _super);
    function ExchangeMountsPaddockAddMessage() {
        this.mountDescription = [];
        _super.call(this);
    }
    ExchangeMountsPaddockAddMessage.prototype.getMessageId = function () {
        return ExchangeMountsPaddockAddMessage.ID;
    };
    ExchangeMountsPaddockAddMessage.prototype.reset = function () {
        this.mountDescription = [];
    };
    ExchangeMountsPaddockAddMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeMountsPaddockAddMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeMountsPaddockAddMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeMountsPaddockAddMessage(param1);
    };
    ExchangeMountsPaddockAddMessage.prototype.serializeAs_ExchangeMountsPaddockAddMessage = function (param1) {
        param1.writeShort(this.mountDescription.length);
        var _loc2_ = 0;
        while (_loc2_ < this.mountDescription.length) {
            (this.mountDescription[_loc2_]).serializeAs_MountClientData(param1);
            _loc2_++;
        }
    };
    ExchangeMountsPaddockAddMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeMountsPaddockAddMessage(param1);
    };
    ExchangeMountsPaddockAddMessage.prototype.deserializeAs_ExchangeMountsPaddockAddMessage = function (param1) {
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
    ExchangeMountsPaddockAddMessage.ID = 6561;
    return ExchangeMountsPaddockAddMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeMountsPaddockAddMessage;