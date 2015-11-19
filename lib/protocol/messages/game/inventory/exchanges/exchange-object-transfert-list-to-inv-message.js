/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeObjectTransfertListToInvMessage = (function (_super) {
    __extends(ExchangeObjectTransfertListToInvMessage, _super);
    function ExchangeObjectTransfertListToInvMessage() {
        this.ids = [];
        _super.call(this);
    }
    ExchangeObjectTransfertListToInvMessage.prototype.getMessageId = function () {
        return ExchangeObjectTransfertListToInvMessage.ID;
    };
    ExchangeObjectTransfertListToInvMessage.prototype.reset = function () {
        this.ids = [];
    };
    ExchangeObjectTransfertListToInvMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeObjectTransfertListToInvMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeObjectTransfertListToInvMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeObjectTransfertListToInvMessage(param1);
    };
    ExchangeObjectTransfertListToInvMessage.prototype.serializeAs_ExchangeObjectTransfertListToInvMessage = function (param1) {
        param1.writeShort(this.ids.length);
        var _loc2_ = 0;
        while (_loc2_ < this.ids.length) {
            if (this.ids[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.ids[_loc2_] + ') on element 1 (starting at 1) of ids.');
            }
            param1.writeVarInt(this.ids[_loc2_]);
            _loc2_++;
        }
    };
    ExchangeObjectTransfertListToInvMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeObjectTransfertListToInvMessage(param1);
    };
    ExchangeObjectTransfertListToInvMessage.prototype.deserializeAs_ExchangeObjectTransfertListToInvMessage = function (param1) {
        var _loc4_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readVarUhInt();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of ids.');
            }
            this.ids.push(_loc4_);
            _loc3_++;
        }
    };
    ExchangeObjectTransfertListToInvMessage.ID = 6039;
    return ExchangeObjectTransfertListToInvMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeObjectTransfertListToInvMessage;