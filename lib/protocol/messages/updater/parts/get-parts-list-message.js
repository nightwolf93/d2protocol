/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GetPartsListMessage = (function (_super) {
    __extends(GetPartsListMessage, _super);
    function GetPartsListMessage() {
        _super.call(this);
    }
    GetPartsListMessage.prototype.getMessageId = function () {
        return GetPartsListMessage.ID;
    };
    GetPartsListMessage.prototype.reset = function () {
    };
    GetPartsListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GetPartsListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GetPartsListMessage.prototype.serialize = function (param1) {
        this.serializeAs_GetPartsListMessage(param1);
    };
    GetPartsListMessage.prototype.serializeAs_GetPartsListMessage = function (param1) {
    };
    GetPartsListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GetPartsListMessage(param1);
    };
    GetPartsListMessage.prototype.deserializeAs_GetPartsListMessage = function (param1) {
    };
    GetPartsListMessage.ID = 1501;
    return GetPartsListMessage;
})(network_message_1.NetworkMessage);
module.exports = GetPartsListMessage;