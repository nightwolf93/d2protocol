/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var QuestStartedMessage = (function (_super) {
    __extends(QuestStartedMessage, _super);
    function QuestStartedMessage() {
        this.questId = 0;
        _super.call(this);
    }
    QuestStartedMessage.prototype.getMessageId = function () {
        return QuestStartedMessage.ID;
    };
    QuestStartedMessage.prototype.reset = function () {
        this.questId = 0;
    };
    QuestStartedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    QuestStartedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    QuestStartedMessage.prototype.serialize = function (param1) {
        this.serializeAs_QuestStartedMessage(param1);
    };
    QuestStartedMessage.prototype.serializeAs_QuestStartedMessage = function (param1) {
        if (this.questId < 0) {
            throw new Error('Forbidden value (' + this.questId + ') on element questId.');
        }
        param1.writeVarShort(this.questId);
    };
    QuestStartedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_QuestStartedMessage(param1);
    };
    QuestStartedMessage.prototype.deserializeAs_QuestStartedMessage = function (param1) {
        this.questId = param1.readVarUhShort();
        if (this.questId < 0) {
            throw new Error('Forbidden value (' + this.questId + ') on element of QuestStartedMessage.questId.');
        }
    };
    QuestStartedMessage.ID = 6091;
    return QuestStartedMessage;
})(network_message_1.NetworkMessage);
module.exports = QuestStartedMessage;