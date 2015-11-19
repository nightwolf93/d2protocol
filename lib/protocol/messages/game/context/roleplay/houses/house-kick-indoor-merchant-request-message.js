/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var HouseKickIndoorMerchantRequestMessage = (function (_super) {
    __extends(HouseKickIndoorMerchantRequestMessage, _super);
    function HouseKickIndoorMerchantRequestMessage() {
        this.cellId = 0;
        _super.call(this);
    }
    HouseKickIndoorMerchantRequestMessage.prototype.getMessageId = function () {
        return HouseKickIndoorMerchantRequestMessage.ID;
    };
    HouseKickIndoorMerchantRequestMessage.prototype.reset = function () {
        this.cellId = 0;
    };
    HouseKickIndoorMerchantRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    HouseKickIndoorMerchantRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    HouseKickIndoorMerchantRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_HouseKickIndoorMerchantRequestMessage(param1);
    };
    HouseKickIndoorMerchantRequestMessage.prototype.serializeAs_HouseKickIndoorMerchantRequestMessage = function (param1) {
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element cellId.');
        }
        param1.writeVarShort(this.cellId);
    };
    HouseKickIndoorMerchantRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_HouseKickIndoorMerchantRequestMessage(param1);
    };
    HouseKickIndoorMerchantRequestMessage.prototype.deserializeAs_HouseKickIndoorMerchantRequestMessage = function (param1) {
        this.cellId = param1.readVarUhShort();
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element of HouseKickIndoorMerchantRequestMessage.cellId.');
        }
    };
    HouseKickIndoorMerchantRequestMessage.ID = 5661;
    return HouseKickIndoorMerchantRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = HouseKickIndoorMerchantRequestMessage;