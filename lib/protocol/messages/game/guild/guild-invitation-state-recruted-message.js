/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildInvitationStateRecrutedMessage = (function (_super) {
    __extends(GuildInvitationStateRecrutedMessage, _super);
    function GuildInvitationStateRecrutedMessage() {
        this.invitationState = 0;
        _super.call(this);
    }
    GuildInvitationStateRecrutedMessage.prototype.getMessageId = function () {
        return GuildInvitationStateRecrutedMessage.ID;
    };
    GuildInvitationStateRecrutedMessage.prototype.reset = function () {
        this.invitationState = 0;
    };
    GuildInvitationStateRecrutedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildInvitationStateRecrutedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildInvitationStateRecrutedMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildInvitationStateRecrutedMessage(param1);
    };
    GuildInvitationStateRecrutedMessage.prototype.serializeAs_GuildInvitationStateRecrutedMessage = function (param1) {
        param1.writeByte(this.invitationState);
    };
    GuildInvitationStateRecrutedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildInvitationStateRecrutedMessage(param1);
    };
    GuildInvitationStateRecrutedMessage.prototype.deserializeAs_GuildInvitationStateRecrutedMessage = function (param1) {
        this.invitationState = param1.readByte();
        if (this.invitationState < 0) {
            throw new Error('Forbidden value (' + this.invitationState + ') on element of GuildInvitationStateRecrutedMessage.invitationState.');
        }
    };
    GuildInvitationStateRecrutedMessage.ID = 5548;
    return GuildInvitationStateRecrutedMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildInvitationStateRecrutedMessage;