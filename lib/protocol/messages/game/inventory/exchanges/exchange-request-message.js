/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeRequestMessage = (function (_super) {
    __extends(ExchangeRequestMessage, _super);
    function ExchangeRequestMessage() {
        this.exchangeType = 0;
        _super.call(this);
    }
    ExchangeRequestMessage.prototype.getMessageId = function () {
        return ExchangeRequestMessage.ID;
    };
    ExchangeRequestMessage.prototype.reset = function () {
        this.exchangeType = 0;
    };
    ExchangeRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeRequestMessage(param1);
    };
    ExchangeRequestMessage.prototype.serializeAs_ExchangeRequestMessage = function (param1) {
        param1.writeByte(this.exchangeType);
    };
    ExchangeRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeRequestMessage(param1);
    };
    ExchangeRequestMessage.prototype.deserializeAs_ExchangeRequestMessage = function (param1) {
        this.exchangeType = param1.readByte();
    };
    ExchangeRequestMessage.ID = 5505;
    return ExchangeRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeRequestMessage;