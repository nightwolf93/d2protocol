/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildPaddockRemovedMessage = (function (_super) {
    __extends(GuildPaddockRemovedMessage, _super);
    function GuildPaddockRemovedMessage() {
        this.paddockId = 0;
        _super.call(this);
    }
    GuildPaddockRemovedMessage.prototype.getMessageId = function () {
        return GuildPaddockRemovedMessage.ID;
    };
    GuildPaddockRemovedMessage.prototype.reset = function () {
        this.paddockId = 0;
    };
    GuildPaddockRemovedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildPaddockRemovedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildPaddockRemovedMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildPaddockRemovedMessage(param1);
    };
    GuildPaddockRemovedMessage.prototype.serializeAs_GuildPaddockRemovedMessage = function (param1) {
        param1.writeInt(this.paddockId);
    };
    GuildPaddockRemovedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildPaddockRemovedMessage(param1);
    };
    GuildPaddockRemovedMessage.prototype.deserializeAs_GuildPaddockRemovedMessage = function (param1) {
        this.paddockId = param1.readInt();
    };
    GuildPaddockRemovedMessage.ID = 5955;
    return GuildPaddockRemovedMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildPaddockRemovedMessage;