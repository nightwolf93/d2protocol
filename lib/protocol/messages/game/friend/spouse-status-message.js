/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SpouseStatusMessage = (function (_super) {
    __extends(SpouseStatusMessage, _super);
    function SpouseStatusMessage() {
        this.hasSpouse = false;
        _super.call(this);
    }
    SpouseStatusMessage.prototype.getMessageId = function () {
        return SpouseStatusMessage.ID;
    };
    SpouseStatusMessage.prototype.reset = function () {
        this.hasSpouse = false;
    };
    SpouseStatusMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SpouseStatusMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SpouseStatusMessage.prototype.serialize = function (param1) {
        this.serializeAs_SpouseStatusMessage(param1);
    };
    SpouseStatusMessage.prototype.serializeAs_SpouseStatusMessage = function (param1) {
        param1.writeBoolean(this.hasSpouse);
    };
    SpouseStatusMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SpouseStatusMessage(param1);
    };
    SpouseStatusMessage.prototype.deserializeAs_SpouseStatusMessage = function (param1) {
        this.hasSpouse = param1.readBoolean();
    };
    SpouseStatusMessage.ID = 6265;
    return SpouseStatusMessage;
})(network_message_1.NetworkMessage);
module.exports = SpouseStatusMessage;