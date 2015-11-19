/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TreasureHuntFlagRequestAnswerMessage = (function (_super) {
    __extends(TreasureHuntFlagRequestAnswerMessage, _super);
    function TreasureHuntFlagRequestAnswerMessage() {
        this.questType = 0;
        this.result = 0;
        this.index = 0;
        _super.call(this);
    }
    TreasureHuntFlagRequestAnswerMessage.prototype.getMessageId = function () {
        return TreasureHuntFlagRequestAnswerMessage.ID;
    };
    TreasureHuntFlagRequestAnswerMessage.prototype.reset = function () {
        this.questType = 0;
        this.result = 0;
        this.index = 0;
    };
    TreasureHuntFlagRequestAnswerMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TreasureHuntFlagRequestAnswerMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TreasureHuntFlagRequestAnswerMessage.prototype.serialize = function (param1) {
        this.serializeAs_TreasureHuntFlagRequestAnswerMessage(param1);
    };
    TreasureHuntFlagRequestAnswerMessage.prototype.serializeAs_TreasureHuntFlagRequestAnswerMessage = function (param1) {
        param1.writeByte(this.questType);
        param1.writeByte(this.result);
        if (this.index < 0) {
            throw new Error('Forbidden value (' + this.index + ') on element index.');
        }
        param1.writeByte(this.index);
    };
    TreasureHuntFlagRequestAnswerMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TreasureHuntFlagRequestAnswerMessage(param1);
    };
    TreasureHuntFlagRequestAnswerMessage.prototype.deserializeAs_TreasureHuntFlagRequestAnswerMessage = function (param1) {
        this.questType = param1.readByte();
        if (this.questType < 0) {
            throw new Error('Forbidden value (' + this.questType + ') on element of TreasureHuntFlagRequestAnswerMessage.questType.');
        }
        this.result = param1.readByte();
        if (this.result < 0) {
            throw new Error('Forbidden value (' + this.result + ') on element of TreasureHuntFlagRequestAnswerMessage.result.');
        }
        this.index = param1.readByte();
        if (this.index < 0) {
            throw new Error('Forbidden value (' + this.index + ') on element of TreasureHuntFlagRequestAnswerMessage.index.');
        }
    };
    TreasureHuntFlagRequestAnswerMessage.ID = 6507;
    return TreasureHuntFlagRequestAnswerMessage;
})(network_message_1.NetworkMessage);
module.exports = TreasureHuntFlagRequestAnswerMessage;