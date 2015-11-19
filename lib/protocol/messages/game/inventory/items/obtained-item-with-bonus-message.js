/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObtainedItemMessage = require('./obtained-item-message');
var ObtainedItemWithBonusMessage = (function (_super) {
    __extends(ObtainedItemWithBonusMessage, _super);
    function ObtainedItemWithBonusMessage() {
        this.bonusQuantity = 0;
        _super.call(this);
    }
    ObtainedItemWithBonusMessage.prototype.getMessageId = function () {
        return ObtainedItemWithBonusMessage.ID;
    };
    ObtainedItemWithBonusMessage.prototype.reset = function () {
        this.bonusQuantity = 0;
    };
    ObtainedItemWithBonusMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ObtainedItemWithBonusMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ObtainedItemWithBonusMessage.prototype.serialize = function (param1) {
        this.serializeAs_ObtainedItemWithBonusMessage(param1);
    };
    ObtainedItemWithBonusMessage.prototype.serializeAs_ObtainedItemWithBonusMessage = function (param1) {
        _super.prototype.serializeAs_ObtainedItemMessage.call(this, param1);
        if (this.bonusQuantity < 0) {
            throw new Error('Forbidden value (' + this.bonusQuantity + ') on element bonusQuantity.');
        }
        param1.writeVarInt(this.bonusQuantity);
    };
    ObtainedItemWithBonusMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ObtainedItemWithBonusMessage(param1);
    };
    ObtainedItemWithBonusMessage.prototype.deserializeAs_ObtainedItemWithBonusMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.bonusQuantity = param1.readVarUhInt();
        if (this.bonusQuantity < 0) {
            throw new Error('Forbidden value (' + this.bonusQuantity + ') on element of ObtainedItemWithBonusMessage.bonusQuantity.');
        }
    };
    ObtainedItemWithBonusMessage.ID = 6520;
    return ObtainedItemWithBonusMessage;
})(ObtainedItemMessage);
module.exports = ObtainedItemWithBonusMessage;