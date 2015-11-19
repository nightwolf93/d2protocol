/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AcquaintanceSearchMessage = (function (_super) {
    __extends(AcquaintanceSearchMessage, _super);
    function AcquaintanceSearchMessage() {
        this.nickname = '';
        _super.call(this);
    }
    AcquaintanceSearchMessage.prototype.getMessageId = function () {
        return AcquaintanceSearchMessage.ID;
    };
    AcquaintanceSearchMessage.prototype.reset = function () {
        this.nickname = '';
    };
    AcquaintanceSearchMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AcquaintanceSearchMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AcquaintanceSearchMessage.prototype.serialize = function (param1) {
        this.serializeAs_AcquaintanceSearchMessage(param1);
    };
    AcquaintanceSearchMessage.prototype.serializeAs_AcquaintanceSearchMessage = function (param1) {
        param1.writeUTF(this.nickname);
    };
    AcquaintanceSearchMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AcquaintanceSearchMessage(param1);
    };
    AcquaintanceSearchMessage.prototype.deserializeAs_AcquaintanceSearchMessage = function (param1) {
        this.nickname = param1.readUTF();
    };
    AcquaintanceSearchMessage.ID = 6144;
    return AcquaintanceSearchMessage;
})(network_message_1.NetworkMessage);
module.exports = AcquaintanceSearchMessage;