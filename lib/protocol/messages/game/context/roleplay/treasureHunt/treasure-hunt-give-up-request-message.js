/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TreasureHuntGiveUpRequestMessage = (function (_super) {
    __extends(TreasureHuntGiveUpRequestMessage, _super);
    function TreasureHuntGiveUpRequestMessage() {
        this.questType = 0;
        _super.call(this);
    }
    TreasureHuntGiveUpRequestMessage.prototype.getMessageId = function () {
        return TreasureHuntGiveUpRequestMessage.ID;
    };
    TreasureHuntGiveUpRequestMessage.prototype.reset = function () {
        this.questType = 0;
    };
    TreasureHuntGiveUpRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TreasureHuntGiveUpRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TreasureHuntGiveUpRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_TreasureHuntGiveUpRequestMessage(param1);
    };
    TreasureHuntGiveUpRequestMessage.prototype.serializeAs_TreasureHuntGiveUpRequestMessage = function (param1) {
        param1.writeByte(this.questType);
    };
    TreasureHuntGiveUpRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TreasureHuntGiveUpRequestMessage(param1);
    };
    TreasureHuntGiveUpRequestMessage.prototype.deserializeAs_TreasureHuntGiveUpRequestMessage = function (param1) {
        this.questType = param1.readByte();
        if (this.questType < 0) {
            throw new Error('Forbidden value (' + this.questType + ') on element of TreasureHuntGiveUpRequestMessage.questType.');
        }
    };
    TreasureHuntGiveUpRequestMessage.ID = 6487;
    return TreasureHuntGiveUpRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = TreasureHuntGiveUpRequestMessage;