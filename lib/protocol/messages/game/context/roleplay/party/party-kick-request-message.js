/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AbstractPartyMessage = require('./abstract-party-message');
var PartyKickRequestMessage = (function (_super) {
    __extends(PartyKickRequestMessage, _super);
    function PartyKickRequestMessage() {
        this.playerId = 0;
        _super.call(this);
    }
    PartyKickRequestMessage.prototype.getMessageId = function () {
        return PartyKickRequestMessage.ID;
    };
    PartyKickRequestMessage.prototype.reset = function () {
        this.playerId = 0;
    };
    PartyKickRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyKickRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyKickRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyKickRequestMessage(param1);
    };
    PartyKickRequestMessage.prototype.serializeAs_PartyKickRequestMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyMessage.call(this, param1);
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
    };
    PartyKickRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyKickRequestMessage(param1);
    };
    PartyKickRequestMessage.prototype.deserializeAs_PartyKickRequestMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of PartyKickRequestMessage.playerId.');
        }
    };
    PartyKickRequestMessage.ID = 5592;
    return PartyKickRequestMessage;
})(AbstractPartyMessage);
module.exports = PartyKickRequestMessage;